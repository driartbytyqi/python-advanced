# Fitness Tracker - Add YouTube Workout Videos TODO

## Approved Plan Progress

✅ **Step 1:** Thoroughly analyzed files with search_files/read_file (backend/routes/workouts.js, WorkoutScreen.js, WorkoutDetailCard.js, db.js, SQL_QUERIES.sql, etc.)

✅ **Step 2:** Created detailed edit plan and got user confirmation

**Current Step - 3:** Create this TODO.md to track progress

---

## Remaining Steps:

✅ **Step 4:** Updated `SQL_QUERIES.sql` - Added `ALTER TABLE` + 4 sample workouts with YouTube URLs (Full Body, Upper Body, Legs)

✅ **Step 5:** Updated `backend/routes/workouts.js` - Added youtube_url to SELECTs, POST body/INSERT, PUT body/UPDATE

✅ **Step 6:** Updated `frontend/src/screens/WorkoutScreen.js` - Imported WorkoutDetailCard and replaced UI with it (now shows YouTube button!)

**⬜ Step 7: Provide Migration Instructions**
- Give `ALTER TABLE` command for existing DB
- Restart backend: `cd backend && npm start`

**⬜ Step 8: Verify & Complete**
- Test create/view workout with YT video
- Update TODO.md as [✅]
- attempt_completion

✅ **All code changes complete!** 

## Final Steps:
**✅ Steps 1-6:** Code updates done (DB schema, backend API, frontend WorkoutScreen now uses WorkoutDetailCard with YouTube button)

**Next:** Run these commands:

1. **Migrate DB:** (if not re-running full SQL_QUERIES.sql)
   ```
   mysql -u root -p fitness_tracker -e "ALTER TABLE workouts ADD COLUMN IF NOT EXISTS youtube_url VARCHAR(500) NULL;"
   ```

2. **Restart backend:**
   ```
   cd backend && npm start
   ```

3. **Run frontend** (Expo/NPX):
   ```
   cd frontend && npx expo start
   ```

4. **Test:** Login → View workouts → Tap Full Body Workout → See red "Watch Tutorial on YouTube" button → Tap opens YouTube video!

Sample workouts with videos now available in DB.

