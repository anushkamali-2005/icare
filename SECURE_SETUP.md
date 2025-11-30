# 🔐 SECURE CONFIGURATION GUIDE

## ⚠️ SECURITY FIRST!

**NEVER share your secret keys publicly!** Always keep them in `.env` files only.

---

## 📝 Backend Configuration (.env)

### Step 1: Create .env file

```powershell
cd C:\Users\aksha\.gemini\antigravity\scratch\icare-platform\backend
notepad .env
```

### Step 2: Copy this template and fill in YOUR values

```env
# DATABASE - From Supabase → Settings → Database → Connection string → URI
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[YOUR-DB-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

# SUPABASE - From Supabase → Settings → API
SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
SUPABASE_SERVICE_KEY="[PASTE-SERVICE-ROLE-KEY-HERE]"

# JWT
JWT_SECRET="icare-super-secret-jwt-key-2024"
JWT_EXPIRES_IN="7d"

# SERVER
NODE_ENV="development"
PORT=5000

# FRONTEND
FRONTEND_URL="http://localhost:3000"

# OTP
OTP_SERVICE="demo"
```

### Step 3: Fill in the values

1. **DATABASE_URL**: 
   - Go to Supabase → Settings → Database → Connection string → URI
   - Copy and replace `[YOUR-DB-PASSWORD]` with your actual password

2. **SUPABASE_URL**: 
   - Go to Supabase → Settings → API
   - Copy "Project URL"

3. **SUPABASE_SERVICE_KEY**: 
   - Go to Supabase → Settings → API Keys → Secret keys
   - Copy the `service_role` key (starts with `sb_secret_...`)
   - **IMPORTANT**: Generate a NEW key since you shared the old one!

---

## 📝 Frontend Configuration (.env.local)

### Step 1: Create .env.local file

```powershell
cd C:\Users\aksha\.gemini\antigravity\scratch\icare-platform\frontend
notepad .env.local
```

### Step 2: Copy this template

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Supabase (Optional)
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR-PUBLISHABLE-KEY]
```

### Step 3: Fill in the values

1. **NEXT_PUBLIC_SUPABASE_URL**: Same as backend
2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**: 
   - Go to Supabase → Settings → API Keys
   - Copy "Publishable key" (starts with `sb_publishable_...`)

---

## 🚀 After Configuration

### 1. Install Backend Dependencies

```powershell
cd C:\Users\aksha\.gemini\antigravity\scratch\icare-platform\backend
npm install
```

### 2. Setup Database

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

### 3. Start Backend

```powershell
npm run dev
```

### 4. Verify

Open browser: http://localhost:5000/api/health

Should see: `{"status":"ok","message":"ICARE API is running"}`

---

## ✅ Checklist

- [ ] Revoked the old service_role key in Supabase
- [ ] Created new service_role key
- [ ] Created backend `.env` file with all values
- [ ] Created frontend `.env.local` file with all values
- [ ] Installed backend dependencies
- [ ] Ran Prisma migrations
- [ ] Started backend server
- [ ] Tested health endpoint

---

## 🔒 Security Reminders

✅ **DO:**
- Keep `.env` files local only
- Use different keys for dev/production
- Rotate keys regularly

❌ **DON'T:**
- Share keys in chat/screenshots
- Commit `.env` to Git
- Use same keys across projects

---

**Need help?** Follow the steps above and let me know if you get stuck!
