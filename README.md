<div align="center">
  <img src="public/logo.png" alt="Vaultly Logo" width="200"/>
  
  # Vaultly
  
  ### Secure Your Financial Future
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/Prisma-6.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
  
  **AI-powered personal finance platform for intelligent expense tracking, budget management, and financial insights**
  
  [Live Demo](https://vaultly.vercel.app) · [Report Bug](https://github.com/MUKESH-KHUSWAHA/Vaultly/issues) · [Request Feature](https://github.com/MUKESH-KHUSWAHA/Vaultly/issues)
  
</div>

---

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432" alt="Vaultly Dashboard" width="100%"/>
</div>

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      
### 🤖 AI-Powered Receipt Scanning
Extract transaction data automatically from receipts using Google Gemini AI

### 📊 Advanced Analytics
Interactive charts and graphs to visualize spending patterns

### 💳 Multi-Account Management
Track multiple bank accounts and credit cards in one place

    </td>
    <td width="50%">
      
### 🎯 Smart Budget Planning
Intelligent budget recommendations and real-time alerts

### 📧 Automated Notifications
Monthly reports and budget alerts via email

### 🔒 Enterprise-Grade Security
Protected by ArcJet security and Clerk authentication

    </td>
  </tr>
</table>

---

## 🚀 Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
      <br>Next.js
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=prisma" width="48" height="48" alt="Prisma" />
      <br>Prisma
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=postgres" width="48" height="48" alt="PostgreSQL" />
      <br>PostgreSQL
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
      <br>Tailwind
    </td>
    <td align="center" width="96">
      <img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" />
      <br>Vercel
    </td>
  </tr>
</table>

### Core Technologies

- **Framework:** Next.js 15 (App Router) with React 19
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk
- **AI:** Google Gemini API
- **Email:** Resend
- **Security:** ArcJet
- **Background Jobs:** Inngest
- **Styling:** Tailwind CSS + Shadcn UI
- **Charts:** Recharts
- **Form Management:** React Hook Form + Zod

---

## 🎯 Features Overview

### 💰 Financial Management
- ✅ Track income and expenses across multiple accounts
- ✅ Categorize transactions automatically
- ✅ Set custom categories for better organization
- ✅ Multi-currency support with real-time conversion

### 📈 Analytics & Insights
- ✅ Interactive charts and visualizations
- ✅ Spending trends analysis
- ✅ Budget vs actual comparisons
- ✅ Monthly financial reports

### 🤖 AI-Powered Features
- ✅ Smart receipt scanning with OCR
- ✅ Automatic data extraction from images
- ✅ Intelligent transaction categorization
- ✅ AI-generated financial insights

### 🔔 Notifications & Alerts
- ✅ Budget threshold alerts
- ✅ Monthly financial summaries
- ✅ Email notifications
- ✅ Real-time transaction updates

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have:
- **Node.js** 20.x or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database (Supabase recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MUKESH-KHUSWAHA/Vaultly.git
   cd Vaultly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env` and fill in your credentials:
   ```bash
   cp .env.example .env
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Database (Supabase)
DATABASE_URL=postgresql://user:password@host:port/database
DIRECT_URL=postgresql://user:password@host:port/database

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Resend (Email)
RESEND_API_KEY=re_xxxxx

# ArcJet (Security)
ARCJET_KEY=ajkey_xxxxx

# Inngest (Optional - Background Jobs)
INNGEST_EVENT_KEY=your_event_key
INNGEST_SIGNING_KEY=your_signing_key
```

### 🔑 Get Your API Keys

| Service | Link | Free Tier |
|---------|------|-----------|
| **Supabase** | [supabase.com](https://supabase.com) | ✅ Yes |
| **Clerk** | [clerk.com](https://clerk.com) | ✅ Yes (10K MAU) |
| **Google Gemini** | [ai.google.dev](https://ai.google.dev) | ✅ Yes (with quota) |
| **Resend** | [resend.com](https://resend.com) | ✅ Yes (100/day) |
| **ArcJet** | [arcjet.com](https://arcjet.com) | ✅ Yes |
| **Inngest** | [inngest.com](https://inngest.com) | ✅ Yes (1K runs/month) |

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MUKESH-KHUSWAHA/Vaultly)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Important Post-Deployment Steps

- [ ] Add your production domain to Clerk allowed origins
- [ ] Update Clerk redirect URLs with your production URL
- [ ] Configure your database for production access
- [ ] Set up proper CORS policies in ArcJet
- [ ] Verify all environment variables are set in Vercel

---

## 📁 Project Structure

```
Vaultly/
├── 📂 app/                    # Next.js App Router
│   ├── 📂 (auth)/            # Authentication pages
│   ├── 📂 (main)/            # Protected application pages
│   │   ├── dashboard/        # Dashboard & analytics
│   │   ├── account/          # Account management
│   │   └── transaction/      # Transaction handling
│   ├── 📂 api/               # API routes
│   │   ├── inngest/          # Background job webhooks
│   │   └── seed/             # Database seeding
│   └── layout.js             # Root layout
├── 📂 actions/               # Server actions
│   ├── account.js            # Account CRUD operations
│   ├── budget.js             # Budget management
│   ├── transaction.js        # Transaction operations
│   └── send-email.js         # Email notifications
├── 📂 components/            # React components
│   ├── 📂 ui/               # Reusable UI components
│   ├── header.jsx            # Navigation header
│   └── hero.jsx              # Landing page hero
├── 📂 lib/                   # Utility functions
│   ├── prisma.js             # Prisma client
│   ├── arcjet.js             # Security configuration
│   └── 📂 inngest/          # Background job definitions
├── 📂 prisma/                # Database schema & migrations
│   ├── schema.prisma         # Database schema
│   └── 📂 migrations/       # Migration history
├── 📂 public/                # Static assets
│   ├── logo.png              # Brand logo
│   └── banner.jpeg           # Marketing images
├── 📂 emails/                # Email templates
└── 📂 data/                  # Static data & constants
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma db push` | Push schema changes to database |

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🐛 Known Issues

- [ ] Receipt scanning works best with clear, well-lit images
- [ ] Email notifications require Resend API key configuration
- [ ] Inngest background jobs are optional but recommended for production

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mukesh Kumar**

- GitHub: [@MUKESH-KHUSWAHA](https://github.com/MUKESH-KHUSWAHA)
- Project Link: [https://github.com/MUKESH-KHUSWAHA/Vaultly](https://github.com/MUKESH-KHUSWAHA/Vaultly)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Clerk](https://clerk.com/) - Authentication & User Management
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Deployment & Hosting Platform

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  
  ### Built with ❤️ by Mukesh Kumar
  
  **Vaultly** - Secure Your Financial Future 🔒
  
  [⬆ Back to Top](#vaultly)
  
</div>
