# ✅ Fitness Tracker - Implementation Checklist

## Phase 1: Database Setup ☑️

- [ ] **1.1 Open phpMyAdmin**
  - URL: `http://localhost/phpmyadmin`
  - Username: `root`
  - Password: (leave empty or your MySQL password)

- [ ] **1.2 Create Database**
  - Click "New"
  - Database name: `fitness_tracker`
  - Collation: `utf8mb4_unicode_ci`
  - Click "Create"

- [ ] **1.3 Create Tables**
  - Open `SQL_QUERIES.sql` file in this directory
  - Copy all SQL code
  - In phpMyAdmin, go to SQL tab
  - Paste and click "Go"
  - Verify all 4 tables are created

- [ ] **1.4 Verify Tables**
  - In phpMyAdmin, click database `fitness_tracker`
  - You should see: users, workouts, exercises, progress

---

## Phase 2: Backend Setup ☑️

- [ ] **2.1 Navigate to Backend**
  ```bash
  cd backend
  ```

- [ ] **2.2 Install Dependencies**
  ```bash
  npm install
  ```
  Should install: mysql2, bcryptjs, jsonwebtoken, express, cors, dotenv, axios, nodemon

- [ ] **2.3 Create .env File**
  - File should be: `backend/.env`
  - Should contain:
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

- [ ] **2.4 Test MySQL Connection**
  ```bash
  node -e "require('mysql2'); console.log('MySQL module loaded')"
  ```

---

## Phase 3: Start Backend ☑️

- [ ] **3.1 Open New Terminal/PowerShell**
  - Navigate to: `backend` folder
  ```bash
  cd backend
  npm start
  ```

- [ ] **3.2 Verify Server Running**
  - Should see: "✅ Connected to MySQL database"
  - Should see: "Server is running on port 5000"

- [ ] **3.3 Test Health Endpoint**
  ```bash
  curl http://localhost:5000/health
  ```
  Expected response:
  ```json
  {"status":"Server is running"}
  ```

---

## Phase 4: Frontend Setup ☑️

- [ ] **4.1 Install Frontend Dependencies**
  ```bash
  npm install
  ```
  Or in root:
  ```bash
  npm install --prefix app
  ```

- [ ] **4.2 Verify API Configuration**
  - File: `frontend/src/services/api.js`
  - Line 3: `export const API_BASE_URL = 'http://localhost:5000/api';`

- [ ] **4.3 Install AsyncStorage**
  ```bash
  npm install @react-native-async-storage/async-storage
  ```

---

## Phase 5: Start Frontend ☑️

- [ ] **5.1 Open New Terminal**
  ```bash
  npm start
  ```

- [ ] **5.2 Choose Platform**
  - Press `a` for Android emulator
  - Press `i` for iOS simulator
  - Or scan QR code with Expo Go app

- [ ] **5.3 Wait for App to Load**
  - Should see dark-themed fitness tracker
  - Activity rings section should display
  - All tabs should be visible

---

## Phase 6: Test Functionality ☑️

- [ ] **6.1 Test Registration**
  - Open app
  - Go to login screen
  - Click "Register"
  - Fill: email, password, name, age, weight
  - Submit
  - Should receive success message

- [ ] **6.2 Test Login**
  - Use registered credentials
  - Should receive auth token
  - Should be redirected to home screen

- [ ] **6.3 Test Home Screen**
  - Should see Activity Rings
  - Should see Step Count
  - Should see workout sessions
  - Should see awards section

- [ ] **6.4 Test Profile**
  - Click Profile tab
  - Should see user info
  - Should see health stats
  - Should see settings menu

- [ ] **6.5 Test Progress**
  - Click Progress tab
  - Should see statistics
  - Should see activity chart
  - Should see weekly breakdown

---

## Phase 7: API Testing ☑️

- [ ] **7.1 Test Register API**
  ```bash
  curl -X POST http://localhost:5000/api/auth/register ^
    -H "Content-Type: application/json" ^
    -d "{\"email\":\"test@example.com\",\"password\":\"test123\",\"name\":\"Test User\",\"age\":25,\"weight\":70}"
  ```

- [ ] **7.2 Test Login API**
  ```bash
  curl -X POST http://localhost:5000/api/auth/login ^
    -H "Content-Type: application/json" ^
    -d "{\"email\":\"test@example.com\",\"password\":\"test123\"}"
  ```

- [ ] **7.3 Test Get Workouts (with token)**
  ```bash
  curl -X GET http://localhost:5000/api/workouts ^
    -H "Authorization: Bearer YOUR_TOKEN_HERE"
  ```

---

## Phase 8: Database Verification ☑️

- [ ] **8.1 Check User Created**
  - In phpMyAdmin
  - Go to users table
  - Should see registered user with hashed password

- [ ] **8.2 Check Workouts Created**
  - Go to workouts table
  - Should see any workouts created in app

- [ ] **8.3 Check Progress Recorded**
  - Go to progress table
  - Should see metrics recorded

---

## Troubleshooting Checklist ☑️

- [ ] **MySQL not connecting?**
  - Check MySQL service is running
  - Verify `.env` credentials
  - Check database exists

- [ ] **Port 5000 in use?**
  ```bash
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  ```

- [ ] **Module not found?**
  ```bash
  cd backend && npm install
  cd ../app && npm install
  ```

- [ ] **CORS errors?**
  - Backend CORS is configured
  - Check API URL matches

- [ ] **Token not saving?**
  ```bash
  npm install @react-native-async-storage/async-storage
  ```

---

## Final Verification ☑️

- [ ] Database created: `fitness_tracker`
- [ ] 4 tables created: users, workouts, exercises, progress
- [ ] Backend running on port 5000
- [ ] Frontend running and can register/login
- [ ] App displays dark theme design
- [ ] Activity rings visible
- [ ] All tabs working (Home, Progress, Profile)
- [ ] API endpoints responding correctly

---

## 🎉 Success Indicators

✅ Backend console shows "Connected to MySQL database"
✅ App loads without errors
✅ Can register new user
✅ Can login with registered credentials
✅ Home screen shows activity rings
✅ Data appears in phpMyAdmin tables
✅ No CORS or connection errors

---

## Quick Start Commands

**Terminal 1 (Backend):**
```bash
cd backend && npm start
```

**Terminal 2 (Frontend):**
```bash
npm start
```

**Terminal 3 (Testing):**
```bash
curl http://localhost:5000/health
```

---

**When all checkboxes are marked, your fitness tracker is fully operational!** 🎉
