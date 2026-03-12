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
-- 6. INSERT SAMPLE DATA (Optional)
-- ============================================

-- Sample User
INSERT INTO users (email, password, name, age, weight, height) 
VALUES ('john@example.com', '$2a$10$example_hash_here', 'John Doe', 28, 75.50, 180);

-- Sample Workout
INSERT INTO workouts (user_id, name, date, duration, completed, notes) 
VALUES (1, 'Upper Body Workout', '2026-03-12', 60, 0, 'Focused on chest and shoulders');

-- Sample Exercise
INSERT INTO exercises (workout_id, name, sets, reps, weight, duration) 
VALUES 
  (1, 'Bench Press', 4, 10, 80.00, NULL),
  (1, 'Incline Dumbbell Press', 3, 12, 30.00, NULL),
  (1, 'Shoulder Press', 3, 10, 40.00, NULL);

-- Sample Progress
INSERT INTO progress (user_id, workout_id, metric_name, metric_value, recorded_date) 
VALUES 
  (1, 1, 'Steps', 8500, '2026-03-12'),
  (1, 1, 'Calories Burned', 450, '2026-03-12'),
  (1, 1, 'Distance', 6.5, '2026-03-12');

-- ============================================
-- 7. VERIFY TABLES CREATED
-- ============================================
-- Run this to verify all tables are created:
-- SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'fitness_tracker';

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
