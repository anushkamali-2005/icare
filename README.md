# ICARE Platform - Complete Website

This is the complete ICARE Platform with frontend and backend.

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npx prisma migrate dev
npm run dev
```

API runs on `http://localhost:5000`

## 📁 Project Structure

```
icare-platform/
├── frontend/          # Next.js 14 application
│   ├── src/
│   │   ├── app/      # Pages (landing, register, dashboard, etc.)
│   │   ├── components/
│   │   └── types/
│   └── package.json
│
├── backend/           # Express.js API
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── middleware/
│   │   └── server.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
└── README.md
```

## ✨ Features

### Frontend Pages
- ✅ Landing Page
- ✅ Patient Registration (4-step wizard)
- ✅ Patient Dashboard
- ✅ Financial Assistance
- ✅ Hospital Finder
- ✅ Document Vault
- ✅ About Us
- ✅ Contact Us

### Backend APIs
- ✅ Authentication (OTP-based)
- ✅ Patient Management
- ✅ Financial Assistance
- ✅ Document Management
- ✅ Appointments
- ✅ Hospital Search

## 🗄️ Database

PostgreSQL with Prisma ORM. 12 models including:
- User & PatientProfile
- Document & Appointment
- FundingApplication & TreatmentCost
- Hospital & NGOPartner
- Activity & Message
- CaseManager

## 🔐 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret
PORT=5000
```

## 📦 Tech Stack

**Frontend:**
- Next.js 14, TypeScript, Tailwind CSS
- React Hook Form, Zod validation
- Lucide React icons

**Backend:**
- Node.js, Express, TypeScript
- Prisma ORM, PostgreSQL
- JWT authentication

## 🌐 Deployment

**Frontend:** Netlify
**Backend:** Render
**Database:** Render PostgreSQL

See deployment guides in `/docs`

## 📞 Support

Email: support@icare.in
Phone: 1800-XXX-XXXX (24/7)

---

Built with ❤️ for India's cancer patients
