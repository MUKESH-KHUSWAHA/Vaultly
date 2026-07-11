# Vaultly - AI Personal Finance Platform 💰

An AI-powered personal finance platform built with Next.js 15, featuring intelligent expense tracking, receipt scanning, budget management, and financial insights.

![Vaultly Platform](https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432)

## ✨ Features

- 🤖 **AI-Powered Receipt Scanning** - Automatically extract transaction data from receipts using Google Gemini AI
- 📊 **Advanced Analytics** - Visualize spending patterns with interactive charts and graphs
- 💳 **Multi-Account Support** - Manage multiple bank accounts and credit cards in one place
- 🎯 **Smart Budget Planning** - Set budgets with intelligent recommendations and alerts
- 📧 **Email Notifications** - Automated financial reports and budget alerts via Resend
- 🔒 **Enterprise Security** - Protected by ArcJet security and Clerk authentication
- ⚡ **Background Jobs** - Powered by Inngest for reliable email and data processing
- 🌐 **Multi-Currency Support** - Track expenses in multiple currencies
- 📱 **Responsive Design** - Beautiful UI built with Tailwind CSS and Shadcn UI

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk
- **AI:** Google Gemini API
- **Email:** Resend
- **Security:** ArcJet
- **Background Jobs:** Inngest
- **Styling:** Tailwind CSS + Shadcn UI
- **Charts:** Recharts
- **Deployment:** Vercel

## 📋 Prerequisites

- Node.js 20.x or higher
- PostgreSQL database (Supabase recommended)
- Clerk account
- Google Gemini API key
- Resend API key
- ArcJet account
- Inngest account (optional)

## 🛠️ Installation

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

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
# Database Configuration (Supabase or any PostgreSQL)
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI (for receipt scanning)
GEMINI_API_KEY=your_gemini_api_key

# Resend (for email notifications)
RESEND_API_KEY=your_resend_api_key

# ArcJet (for security and bot protection)
ARCJET_KEY=your_arcjet_key

# Inngest (for background jobs - optional)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
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

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment to Vercel

1. **Push to GitHub** (already done!)
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your `Vaultly` repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - In Vercel project settings, add all environment variables from your `.env` file
   - **Important:** Add all the variables listed in `.env.example`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - The `.npmrc` file ensures peer dependencies are handled correctly

5. **Set up Clerk redirect URLs**
   - In your Clerk dashboard, add your Vercel domain to allowed redirect URLs
   - Update: `https://your-domain.vercel.app/dashboard`

## 📝 Environment Variables Guide

### Required Services Setup:

1. **Database (Supabase)**
   - Create a project at [supabase.com](https://supabase.com)
   - Get connection strings from Settings > Database
   - Use "Transaction Pooler" URL for `DATABASE_URL`
   - Use "Session Pooler" URL for `DIRECT_URL`

2. **Clerk Authentication**
   - Create an application at [clerk.com](https://clerk.com)
   - Get API keys from "API Keys" section
   - Configure OAuth providers if needed

3. **Google Gemini AI**
   - Get API key from [ai.google.dev](https://ai.google.dev)
   - Enable Gemini API

4. **Resend (Email)**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Verify your domain (optional)

5. **ArcJet (Security)**
   - Create account at [arcjet.com](https://arcjet.com)
   - Get your site key

6. **Inngest (Background Jobs)**
   - Sign up at [inngest.com](https://inngest.com)
   - Create an app and get keys

## 🏗️ Project Structure

```
Vaultly/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   ├── api/               # API routes
│   └── layout.js          # Root layout
├── actions/               # Server actions
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema
├── public/                # Static assets
└── emails/                # Email templates
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Mukesh Kumar**

## 🙏 Acknowledgments

- Built with inspiration from modern fintech applications
- UI components from [Shadcn UI](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

**Vaultly** - Secure Your Financial Future 🔒
