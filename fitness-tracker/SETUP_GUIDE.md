# Fitness Tracker - Complete Setup Guide

## 🗄️ Database Setup (phpMyAdmin)

### 1. Create Database
1. Open phpMyAdmin: `http://localhost/phpmyadmin`
2. Click "New" → Enter database name: `fitness_tracker`
3. Collation: `utf8mb4_unicode_ci` → Click "Create"

### 2. Create Tables
Run these SQL queries in phpMyAdmin (click SQL tab):

#### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  age INT,
  weight DECIMAL(5,2),
  height INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Workouts Table
```sql
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
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

#### Exercises Table
```sql
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
  FOREIGN KEY (workout_id) REFERENCES workouts(id) ON DELETE CASCADE
);
```

#### Progress Table
```sql
CREATE TABLE progress (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  workout_id INT,
  metric_name VARCHAR(100) NOT NULL,
  metric_value DECIMAL(10,2) NOT NULL,
  recorded_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (workout_id) REFERENCES workouts(id) ON DELETE SET NULL
);
```

---

## 🔧 Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install mysql2 bcryptjs jsonwebtoken express cors dotenv axios
```

> **Note:** frontend uses Expo Image Picker for selecting profile photos. To add it, run `npm install expo-image-picker` inside the `app` directory.  
> You can also install it now if you plan to pick images.


### 2. Configure Environment (.env)
Create `.env` file in backend folder:
```
NODE_ENV=development
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=fitness_tracker

JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
```

### 3. Start Backend Server
```bash
npm start
# or with auto-reload:
npm run dev
```

Server will run at: `http://localhost:5000`

---

## 📱 Frontend Setup

### 1. Install Dependencies
```bash
cd app
npm install @react-native-async-storage/async-storage axios
```

### 2. API Configuration
The frontend automatically connects to `http://localhost:5000/api`

### 3. Update API URL (if needed)
Edit `frontend/src/services/api.js` line 3:
```javascript
export const API_BASE_URL = 'http://your-server:5000/api';
```

---

## ✅ Test the Connection

### 1. Check Server Health
```bash
curl http://localhost:5000/health
```

### 2. Test Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "age": 28,
    "weight": 75.5
  }'
```

### 3. Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

---

## 🚀 Running the Full App

### Terminal 1: Start Backend
```bash
cd backend
npm start
```

### Terminal 2: Start Expo App
```bash
npm start
# then press 'a' for Android or 'i' for iOS
```

---

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/verify` - Verify token

### Workouts
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get specific workout
- `POST /api/workouts` - Create workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Exercises
- `POST /api/workouts/:id/exercises` - Add exercise
- `PUT /api/exercises/:id` - Update exercise
- `DELETE /api/exercises/:id` - Delete exercise

### Progress
- `GET /api/progress/:userId` - Get user progress
- `POST /api/progress` - Record metric

---

## 🆘 Troubleshooting

### Port 5000 already in use
```bash
lsof -i :5000  # Find process
kill -9 <PID>  # Kill process
```

### MySQL Connection Failed
- Check MySQL is running: `mysql -u root -p`
- Verify `.env` credentials
- Create database if not exists

### Token Not Saving
- Install AsyncStorage: `npm install @react-native-async-storage/async-storage`
- Link native modules

### CORS Errors
- Backend already has CORS enabled
- Check API_URL matches exactly

---

## 📝 Next Steps

1. ✅ Set up MySQL database in phpMyAdmin
2. ✅ Configure backend `.env` file
3. ✅ Install backend dependencies
4. ✅ Start backend server
5. ✅ Install frontend dependencies
6. ✅ Test API endpoints
7. ✅ Run Expo app and test login/register

Good luck! 🎉
