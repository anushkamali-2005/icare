# Production Setup Guide

## 🔐 Setting Up Real OTP Authentication

### Step 1: Choose SMS Provider

**Option A: Twilio (Recommended)**
1. Sign up at https://www.twilio.com
2. Get your Account SID and Auth Token
3. Buy a phone number

**Option B: MSG91 (India-focused)**
1. Sign up at https://msg91.com
2. Get your Auth Key
3. Verify your sender ID

### Step 2: Configure Backend

1. Navigate to backend directory:
```bash
cd backend
```

2. Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

3. Edit `.env` and add your credentials:

**For Twilio:**
```env
OTP_SERVICE=twilio
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
```

**For MSG91:**
```env
OTP_SERVICE=msg91
MSG91_AUTH_KEY=your_auth_key_here
MSG91_SENDER_ID=your_sender_id
```

4. Install dependencies:
```bash
npm install
```

5. Set up database:
```bash
npx prisma migrate dev
```

6. Start backend:
```bash
npm run dev
```

### Step 3: Test OTP

1. Open frontend at `http://localhost:3000`
2. Click "Login" or "Register"
3. Enter your phone number
4. You should receive a **real OTP** via SMS!
5. Enter the OTP to login

## 🚀 Deployment

### Frontend (Netlify)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/.next`
4. Add environment variable:
   - `NEXT_PUBLIC_API_URL` = your backend URL

### Backend (Render)

1. Create new Web Service on Render
2. Connect your GitHub repository
3. Settings:
   - Build command: `cd backend && npm install && npx prisma generate`
   - Start command: `cd backend && npm start`
4. Add environment variables (all from `.env`)
5. Add PostgreSQL database
6. Update `DATABASE_URL` in environment variables

## 🔒 Protected Routes

The following pages require login:
- `/dashboard` - Patient dashboard
- `/financial-assistance/*` - All funding pages
- `/documents` - Document vault
- `/counselling` - Counselling booking
- `/case-manager` - Case manager console
- `/admin` - Admin dashboard

Public pages (no login required):
- `/` - Landing page
- `/about` - About us
- `/contact` - Contact
- `/symptom-checker` - Symptom checker
- `/hospital-finder` - Hospital finder
- `/screening-locator` - Screening locator
- `/login` - Login page
- `/register` - Registration

## 📝 Notes

- OTP expires in 10 minutes
- JWT tokens expire in 7 days
- All passwords/tokens should be kept secret
- Never commit `.env` file to Git
