#!/bin/bash
# Fitness Tracker - Quick Start Commands

echo "🚀 Fitness Tracker - Complete Setup"
echo "===================================="

# Step 1: MySQL Database
echo "1️⃣ Create these tables in phpMyAdmin (http://localhost/phpmyadmin):"
echo "   - Users, Workouts, Exercises, Progress"

# Step 2: Backend Setup
echo ""
echo "2️⃣ Backend Installation:"
cd backend
npm install mysql2 bcryptjs jsonwebtoken express cors dotenv axios

# Step 3: Start Backend
echo ""
echo "3️⃣ Starting Backend Server..."
echo "   Run in Terminal 1:"
echo "   cd backend && npm start"
echo ""

# Step 4: Frontend Setup
echo "4️⃣ Frontend Installation:"
cd ../app
npm install @react-native-async-storage/async-storage axios

# Step 5: Start Frontend
echo ""
echo "5️⃣ Starting Frontend App..."
echo "   Run in Terminal 2:"
echo "   npm start"
echo ""

echo "✅ Everything is ready!"
echo ""
echo "📱 API Base URL: http://localhost:5000/api"
echo "🌐 MySQL: localhost:3306"
echo "📊 phpMyAdmin: http://localhost/phpmyadmin"
