# Supabase Database Setup Guide

## Step 1: Create Supabase Account

1. Go to https://supabase.com
2. Click **"Start your project"**
3. Sign up with GitHub (recommended) or email
4. Verify your email if needed

## Step 2: Create New Project

1. Click **"New Project"**
2. Fill in details:
   - **Name**: `icare-platform` (or any name you prefer)
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to India (Singapore or Mumbai if available)
   - **Pricing Plan**: Select **FREE** tier
3. Click **"Create new project"**
4. Wait 2-3 minutes for setup to complete

## Step 3: Get Connection String

1. In your Supabase dashboard, click **"Settings"** (gear icon in sidebar)
2. Click **"Database"** in the left menu
3. Scroll down to **"Connection string"**
4. Select **"URI"** tab
5. Copy the connection string (it looks like this):
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres
   ```
6. **IMPORTANT**: Replace `[YOUR-PASSWORD]` with the actual password you created in Step 2

## Step 4: Configure Backend Environment

1. Navigate to the backend folder:
   ```bash
   cd C:\Users\aksha\.gemini\antigravity\scratch\icare-platform\backend
   ```

2. Create `.env` file (copy from `.env.example`):
   ```bash
   copy .env.example .env
   ```

3. Open `.env` file and update:
   ```env
   # Database
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.xxxxx.supabase.co:5432/postgres"

   # JWT Secret (generate a random string)
   JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
   JWT_EXPIRES_IN="7d"

   # Environment
   NODE_ENV="development"
   PORT=5000

   # Frontend URL
   FRONTEND_URL="http://localhost:3000"
   ```

## Step 5: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 6: Run Prisma Migrations

This will create all the database tables:

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations to create tables
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view your database
npx prisma studio
```

## Step 7: Verify Database Setup

1. Go back to Supabase dashboard
2. Click **"Table Editor"** in sidebar
3. You should see all your tables:
   - users
   - patients
   - case_managers
   - appointments
   - documents
   - financial_assessments
   - funding_applications
   - counseling_sessions
   - And more...

## Step 8: Start Backend Server

```bash
npm run dev
```

You should see:
```
Server running on port 5000
Database connected successfully
```

## Step 9: Test API

Open your browser or use Postman:
```
http://localhost:5000/api/health
```

You should get:
```json
{
  "status": "ok",
  "message": "ICARE API is running"
}
```

---

## 🎉 Success!

Your database is now set up and connected! 

### What You Have Now:
✅ PostgreSQL database (500MB free)  
✅ All tables created  
✅ Backend connected to database  
✅ Ready to store real data  

### Bonus: Supabase Features You Can Use Later
- **Authentication**: Built-in auth (can replace your custom JWT)
- **Storage**: File uploads for documents/images
- **Real-time**: Live updates for appointments/messages
- **Row Level Security**: Advanced data protection

---

## Troubleshooting

### Error: "Can't reach database server"
- Check if your IP is whitelisted in Supabase
- Go to Settings → Database → Connection pooling
- Enable "Connection pooling"

### Error: "Password authentication failed"
- Double-check your password in the connection string
- Make sure you replaced `[YOUR-PASSWORD]` with actual password

### Error: "Prisma migration failed"
- Delete `prisma/migrations` folder
- Run `npx prisma migrate dev --name init` again

---

## Next Steps

1. ✅ Database setup complete
2. ⏳ Configure OTP service (Twilio/MSG91)
3. ⏳ Set up file storage (Supabase Storage)
4. ⏳ Deploy backend to Render
5. ⏳ Connect frontend to backend

**Ready to move to the next step?**
