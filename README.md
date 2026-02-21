# 🏥 ICARE — India's Integrated Cancer Care & Relief Ecosystem

<div align="center">

**A unified digital platform connecting cancer patients with hospitals, NGOs, and funding sources across India.**

[![Status](https://img.shields.io/badge/Status-MVP%20In%20Progress-orange)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-brightgreen)](https://github.com)
[![Made for India](https://img.shields.io/badge/Made%20for-India%20🇮🇳-orange)](https://github.com)

</div>

---

## 📌 The Problem

India sees **1.56 million new cancer cases every year**. The average treatment cost is ₹3.31 lakh — but the real cost is often ₹10L+. Most patients:

- Don't know they're eligible for PM-JAY, NGO grants, or CSR funds
- Waste critical weeks navigating paperwork instead of getting treatment
- Have no single point of contact to guide them through the system
- Fall through the cracks between hospitals, insurers, and government schemes

**ICARE fixes this.** One platform. One case manager. Full journey support.

---

## 💡 What is ICARE?

ICARE is a **comprehensive cancer care coordination platform** that guides patients from early detection all the way through to survivorship. It connects:

- 🧑‍⚕️ **Patients** — with case managers, hospitals, and funding
- 🏨 **Hospitals** — with verified patient pipelines and document management
- 🤝 **NGOs & CSR Partners** — with a managed, trackable giving channel
- 💰 **NBFCs & Insurers** — with pre-screened loan and claim applicants

---

## 🏛️ The 8 Pillars of Care

| # | Pillar | What it does |
|---|--------|-------------|
| 1 | 🔍 **Early Detection & Prevention** | AI risk assessment, cancer education hub, symptom checker |
| 2 | 🩺 **Screening Support** | Camp locator, subsidized screening registration, reminders |
| 3 | 🧭 **Diagnosis Navigation** | Help with scans, pathology timelines, second opinions |
| 4 | 🗓️ **Treatment Coordination** | Case manager assignment, appointments, hospital finder |
| 5 | 💸 **Financial Assistance & Protection** | PM-JAY, NGO grants, CSR, NBFC loans, Adopt-a-Patient |
| 6 | 🧠 **Counselling & Psychosocial Support** | Mental health, family guidance, peer support groups |
| 7 | 🥗 **Rehabilitation & Nutrition Care** | Physio, diet plans, post-treatment recovery programs |
| 8 | 🕊️ **Palliative & Survivorship Care** | End-of-life care, survivorship programs, long-term follow-up |

---

## 🖥️ Platform Features

### For Patients
- **Smart Onboarding** — 4-step registration wizard (Basic Info → Medical → Financial → Consent)
- **Patient Dashboard** — Real-time financial summary, funding status, next actions
- **Document Vault** — Encrypted storage for medical reports, bills, prescriptions
- **Financial Assistance Tracker** — Track PM-JAY, NGO, NBFC applications in one place
- **Hospital Finder** — Map-based search with PM-JAY empanelment and oncology filters
- **Appointment Booking** — Book, track, and manage doctor appointments
- **Mobile App** — Full feature parity on Android and iOS

### For Case Managers
- Patient portfolio management
- Document verification workflow
- Funding application tracking
- Counselling session scheduling

### For Partners (Hospitals / NGOs / CSR)
- Patient referral pipeline
- Verified document access
- Impact reporting dashboard
- CSR fund deployment tracking

---

## 🗺️ Patient Journey

```
Register (OTP)
      ↓
4-Step Onboarding
      ↓
Case Manager Assigned
      ↓
Upload Documents → Financial Assessment → Apply for Funding → Track Applications
                                                    ↓
                              Find Hospitals → Book Appointment → Get Treatment
                                                    ↓
                                        Counselling Support
                                                    ↓
                              Funding Disbursed → Treatment Complete → Recovery
```

**Typical Timeline:**
- Week 1: Registration & Onboarding
- Week 2-3: Document upload & Financial applications
- Week 4-5: Hospital selection & Appointment booking
- Month 2-6: Treatment & Ongoing support
- Month 6+: Recovery & Survivorship programs

---

## 💰 Funding Sources Supported

| Source | Type | Typical Amount |
|--------|------|---------------|
| PM-JAY (Ayushman Bharat) | Government | Up to ₹5,00,000 |
| NGO Grants | Non-profit | ₹50,000 – ₹2,00,000 |
| CSR Adoption | Corporate | Variable |
| NBFC Medical Loans | Loan | ₹50,000 – ₹5,00,000 |
| Crowdfunding | Community | Variable |
| Insurance Claims | Insurance | As per policy |

---

## 🛠️ Tech Stack

> *(Update this section based on your actual stack)*

```
Frontend        — React.js / React Native (Web + Mobile)
Backend         — Node.js / Python (FastAPI)
Database        — PostgreSQL + Redis
Storage         — AWS S3 (encrypted document vault)
Auth            — OTP-based (SMS via Twilio/MSG91)
Maps            — Google Maps API
Notifications   — WhatsApp Business API + Firebase
AI/ML           — Risk assessment engine (Python)
Hosting         — AWS / GCP
```

---

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
postgresql >= 14
```

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/icare.git
cd icare

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your config

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

### Environment Variables

```env
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
AWS_ACCESS_KEY=...
AWS_SECRET_KEY=...
GOOGLE_MAPS_API_KEY=...
SMS_API_KEY=...
WHATSAPP_API_KEY=...
```

---

## 📁 Project Structure

```
icare/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/          # Dashboard, Financial, Documents, Hospitals
│   │   ├── components/     # UI component library
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Helpers
├── server/                 # Backend API
│   ├── routes/             # API endpoints
│   ├── models/             # Database models
│   ├── services/           # Business logic
│   └── middleware/         # Auth, validation
├── mobile/                 # React Native app
├── docs/                   # Wireframes and documentation
│   ├── wireframes/         # UI wireframes (all screens)
│   └── features/           # Feature breakdown docs
└── README.md
```

---

## 📊 Impact Metrics We Track

- Patients registered and onboarded
- Average time from registration → first funding secured
- Total funds mobilized per patient
- Cost per patient served
- Treatment completion rate
- Documents uploaded and verified
- Funding applications success rate

---

## 🗓️ Roadmap

### Phase 1 — MVP (Current)
- [x] UI/UX wireframes (all screens)
- [x] 8-pillar feature specification
- [ ] Patient registration + onboarding
- [ ] Document vault
- [ ] Financial assistance tracker
- [ ] Hospital finder (Mumbai pilot)

### Phase 2 — Pilot
- [ ] Case manager dashboard
- [ ] PM-JAY eligibility checker (API integration)
- [ ] NGO grant application workflows
- [ ] 50-patient pilot with anchor hospital

### Phase 3 — Scale
- [ ] NBFC loan origination integration
- [ ] AI-powered risk assessment
- [ ] Multi-language support (10+ Indian languages)
- [ ] Government scheme auto-matching
- [ ] Pan-India hospital network

---

## 🤝 Partners We're Looking For

We are actively seeking partnerships with:

- 🏨 **Cancer hospitals** — pilot the case management platform
- 🤝 **NGOs** — integrate grant workflows (Tata Trusts, Cipla Foundation, etc.)
- 💼 **CSR teams** — deploy cancer care funds through a verified platform
- 🏦 **NBFCs** — co-originate medical loans for cancer patients
- 👨‍⚕️ **Oncology social workers** — become ICARE case managers

**Interested? Reach out at:** [your-email@icare.in](mailto:your-email@icare.in)

---

## 🙏 Contributing

We welcome contributions from developers, designers, healthcare professionals, and domain experts.

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/your-feature-name

# Commit your changes
git commit -m "Add: your feature description"

# Push and open a PR
git push origin feature/your-feature-name
```

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🧑‍💻 Built With Purpose

> *"In India, a cancer diagnosis shouldn't also be a financial death sentence. ICARE exists to change that."*

---

<div align="center">

**⭐ Star this repo if you believe in what we're building**

[Report Bug](https://github.com/yourusername/icare/issues) · [Request Feature](https://github.com/yourusername/icare/issues) · [Get in Touch](mailto:your-email@icare.in)

</div>
