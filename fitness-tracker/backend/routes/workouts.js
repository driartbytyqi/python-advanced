const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all workouts for user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const workouts = await db.all(
      `SELECT w.*, w.youtube_url, COUNT(e.id) as exercise_count
       FROM workouts w
       LEFT JOIN exercises e ON w.id = e.workout_id
       WHERE w.user_id = ?
       GROUP BY w.id
       ORDER BY w.date DESC`,
      [userId]
    );

    // Fetch exercises for each workout
    for (let workout of workouts) {
      const exercises = await db.all(
        'SELECT * FROM exercises WHERE workout_id = ?',
        [workout.id]
      );
      workout.exercises = exercises;
    }

    res.json(workouts);
  } catch (error) {
    console.error('Get workouts error:', error);
    res.status(500).json({ message: 'Failed to fetch workouts' });
  }
});

// Get single workout
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const workout = await db.get(
      'SELECT *, youtube_url FROM workouts WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    const exercises = await db.all(
      'SELECT * FROM exercises WHERE workout_id = ?',
      [id]
    );

    workout.exercises = exercises;

    res.json(workout);
  } catch (error) {
    console.error('Get workout error:', error);
    res.status(500).json({ message: 'Failed to fetch workout' });
  }
});

// Create workout
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, date, duration, notes, youtube_url } = req.body;
    const userId = req.userId;

    if (!name || !date) {
      return res.status(400).json({
        message: 'Workout name and date are required',
      });
    }

    const result = await db.run(
      `INSERT INTO workouts (user_id, name, date, duration, notes, youtube_url)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, name, date, duration || null, notes || null, youtube_url || null]
    );

    res.status(201).json({
      message: 'Workout created successfully',
      id: result.id,
    });
  } catch (error) {
    console.error('Create workout error:', error);
    res.status(500).json({ message: 'Failed to create workout' });
  }
});

// Update workout
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, duration, completed, notes, youtube_url } = req.body;
    const userId = req.userId;

    // Verify ownership
    const workout = await db.get(
      'SELECT id FROM workouts WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    await db.run(
      `UPDATE workouts 
       SET name = ?, date = ?, duration = ?, completed = ?, notes = ?, youtube_url = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [name, date, duration, completed, notes, youtube_url || null, id]
    );

    res.json({ message: 'Workout updated successfully' });
  } catch (error) {
    console.error('Update workout error:', error);
    res.status(500).json({ message: 'Failed to update workout' });
  }
});

// Delete workout
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    // Verify ownership
    const workout = await db.get(
      'SELECT id FROM workouts WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    // Delete exercises first (due to foreign key)
    await db.run('DELETE FROM exercises WHERE workout_id = ?', [id]);

    // Delete workout
    await db.run('DELETE FROM workouts WHERE id = ?', [id]);

    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Delete workout error:', error);
    res.status(500).json({ message: 'Failed to delete workout' });
  }
});

// Add exercise to workout
router.post('/:id/exercises', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, sets, reps, weight, duration, notes } = req.body;
    const userId = req.userId;

    // Verify workout ownership
    const workout = await db.get(
      'SELECT id FROM workouts WHERE id = ? AND user_id = ?',
      [id, userId]
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    if (!name) {
      return res.status(400).json({ message: 'Exercise name is required' });
    }

    const result = await db.run(
      `INSERT INTO exercises (workout_id, name, sets, reps, weight, duration, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, name, sets || null, reps || null, weight || null, duration || null, notes || null]
    );

    res.status(201).json({
      message: 'Exercise added successfully',
      id: result.id,
    });
  } catch (error) {
    console.error('Add exercise error:', error);
    res.status(500).json({ message: 'Failed to add exercise' });
  }
});

// Get progress data
router.get('/progress/summary', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const stats = await db.get(
      `SELECT 
        COUNT(CASE WHEN completed = 1 THEN 1 END) as totalWorkouts,
        COUNT(CASE WHEN DATE_FORMAT(date, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m') THEN 1 END) as thisMonth,
        SUM(duration) as totalDuration
       FROM workouts
       WHERE user_id = ?`,
      [userId]
    );

    const recentWorkouts = await db.all(
      `SELECT id, name, date, duration FROM workouts 
       WHERE user_id = ? 
       ORDER BY date DESC 
       LIMIT 5`,
      [userId]
    );

    res.json({
      stats,
      recentActivity: recentWorkouts,
    });
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Failed to fetch progress data' });
  }
});

module.exports = router;
