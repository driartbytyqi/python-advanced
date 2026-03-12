@echo off
REM Fitness Tracker - Windows Quick Setup

echo.
echo ===================================
echo Fitness Tracker - Complete Setup
echo ===================================
echo.

echo 1. Installing Backend Dependencies...
cd backend
call npm install mysql2 bcryptjs jsonwebtoken express cors dotenv axios nodemon

if %errorlevel% neq 0 (
    echo Error installing backend dependencies!
    pause
    exit /b 1
)

echo.
echo 2. Creating .env file...
(
    echo NODE_ENV=development
    echo PORT=5000
    echo.
    echo DB_HOST=localhost
    echo DB_USER=root
    echo DB_PASSWORD=
    echo DB_NAME=fitness_tracker
    echo.
    echo JWT_SECRET=your_jwt_secret_key_here
    echo JWT_EXPIRE=7d
) > .env

echo.
echo 3. Testing Node and npm...
node --version
npm --version

echo.
echo ===================================
echo SETUP COMPLETE!
echo ===================================
echo.
echo NEXT STEPS:
echo.
echo 1. phpMyAdmin:
echo    - Go to http://localhost/phpmyadmin
echo    - Create database: fitness_tracker
echo    - Run the SQL table creation queries from SETUP_GUIDE.md
echo.
echo 2. Start Backend (in new terminal):
echo    - cd backend
echo    - npm start
echo.
echo 3. Start Frontend (in another terminal):
echo    - npm start
echo    - Press 'a' for Android or 'i' for iOS
echo.
echo 4. Test the API:
echo    - http://localhost:5000/health
echo.
pause
