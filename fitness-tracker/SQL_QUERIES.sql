-- Fitness Tracker - Complete MySQL Setup
-- Copy and paste each section into phpMyAdmin SQL tab

-- ============================================
-- 1. CREATE DATABASE
-- ============================================
CREATE DATABASE IF NOT EXISTS fitness_tracker;
USE fitness_tracker;

-- ============================================
-- 2. CREATE USERS TABLE
-- ============================================
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  age INT,
  weight DECIMAL(5,2),
  height INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 3. CREATE WORKOUTS TABLE
-- ============================================
CREATE TABLE workouts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  duration INT,
  completed BOOLEAN DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id),
  INDEX idx_date (date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 4. CREATE EXERCISES TABLE
-- ============================================
CREATE TABLE exercises (
  id INT AUTO_INCREMENT PRIMARY KEY,
  workout_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  sets INT,
  reps INT,
  weight DECIMAL(5,2),
  duration INT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (workout_id) REFERENCES workouts(id) ON DELETE CASCADE,
  INDEX idx_workout_id (workout_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 5. CREATE PROGRESS TABLE
-- ============================================
CREATE TABLE progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  workout_id INT,
  metric_name VARCHAR(100) NOT NULL,
  metric_value DECIMAL(10,2) NOT NULL,
  recorded_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (workout_id) REFERENCES workouts(id) ON DELETE SET NULL,
  INDEX idx_user_id (user_id),
  INDEX idx_recorded_date (recorded_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 9. ADD YOUTUBE_URL COLUMN (New!)
-- ============================================
ALTER TABLE workouts ADD COLUMN youtube_url VARCHAR(500) NULL;

-- ============================================
-- 6. INSERT SAMPLE DATA (Optional - with YouTube!)
-- ============================================

-- Sample User
INSERT INTO users (email, password, name, age, weight, height) 
VALUES ('john@example.com', '$2a$10$example_hash_here', 'John Doe', 28, 75.50, 180);

-- Sample Workouts WITH YouTube URLs
INSERT INTO workouts (user_id, name, date, duration, completed, notes, youtube_url) 
VALUES 
  (1, 'Full Body Workout', '2024-10-01', 30, 1, 'Complete beginner HIIT', 'https://www.youtube.com/watch?v=SGHF8q9JdxE'),
  (1, 'Upper Body Strength', '2024-10-02', 45, 0, 'Chest, shoulders, back focus', 'https://www.youtube.com/watch?v=FBYJ3aXm8uY'),
  (1, 'Leg Day Burn', '2024-10-03', 40, 1, 'Quads, hamstrings, calves', 'https://www.youtube.com/watch?v=WC4OcPQRGE4'),
  (1, 'Upper Body Workout', '2026-03-12', 60, 0, 'Focused on chest and shoulders', NULL);

-- Sample Exercises (for first workout)
INSERT INTO exercises (workout_id, name, sets, reps, weight, duration) 
VALUES 
  (1, 'Bodyweight Squats', 3, 15, NULL, NULL),
  (1, 'Push-ups', 3, 12, NULL, NULL),
  (1, 'Plank', 3, NULL, NULL, 30),
  (4, 'Bench Press', 4, 10, 80.00, NULL),
  (4, 'Incline Dumbbell Press', 3, 12, 30.00, NULL),
  (4, 'Shoulder Press', 3, 10, 40.00, NULL);

-- Sample Progress
INSERT INTO progress (user_id, workout_id, metric_name, metric_value, recorded_date) 
VALUES 
  (1, 1, 'Steps', 8500, '2024-10-01'),
  (1, 1, 'Calories Burned', 450, '2024-10-01'),
  (1, 1, 'Distance', 6.5, '2024-10-01'); 

-- ============================================
-- 7. VERIFY TABLES CREATED
-- ============================================
-- Run this to verify all tables are created:
-- SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'fitness_tracker';

-- ============================================
-- 10. VERIFY YOUTUBE COLUMN ADDED
-- ============================================
-- DESCRIBE workouts;  -- Should show youtube_url column

-- ============================================
-- 8. VIEW TABLE STRUCTURE
-- ============================================
-- DESC users;
-- DESC workouts;
-- DESC exercises;
-- DESC progress;

-- ============================================
-- BACKUP: Export all data
-- ============================================
-- Use phpMyAdmin Export tab to download backup

-- ============================================
-- RESET: Delete all data (careful!)
-- ============================================
-- DELETE FROM progress;
-- DELETE FROM exercises;
-- DELETE FROM workouts;
-- DELETE FROM users;
