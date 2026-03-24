# Iście Kwieciście - Portfolio & E-commerce

Modern Next.js 14 website for garden design, floristry, and plant arrangement services in Warsaw and surrounding areas.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **Google Analytics 4** integration for tracking
- ✅ **Contact Form** with Resend email service
- ✅ **Portfolio Gallery** with filtering and detailed project pages
- ✅ **Multiple Images** per project with full descriptions
- ✅ **Local SEO** optimized for Warsaw and 30km radius
- ✅ **SEO Articles** with expandable sections
- ✅ **Schema.org Markup** for local business
- ✅ **Responsive Design** - mobile-first approach
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript** for type safety
- ✅ **Accessibility** features (ARIA labels, semantic HTML)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Database:** Neon PostgreSQL (ready for integration)
- **Analytics:** Google Analytics 4 + Vercel Analytics
- **Deployment:** Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://user:password@host/database

# Resend Email API
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Contact Email
CONTACT_EMAIL=admin@isciekwieciscie.pl
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
isciekwieciscie/
├── app/
│   ├── layout.tsx          # Root layout with GA & navigation
│   ├── page.tsx            # Home page
│   ├── portfolio/          # Portfolio gallery page
│   ├── uslugi/             # Services page
│   ├── o-nas/              # About page
│   ├── kontakt/            # Contact page with form
│   └── api/
│       └── contact/        # Contact form API endpoint
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── GoogleAnalytics.tsx # GA4 integration
├── data/
│   └── projects.ts         # Mock project data
└── public/                 # Static assets
```

## Pages

- **Home (/)** - Hero section, services overview, portfolio teaser
- **Portfolio (/portfolio)** - Filterable project gallery
- **Services (/uslugi)** - Detailed service descriptions
- **About (/o-nas)** - Company information
- **Contact (/kontakt)** - Contact form with validation

## Contact Form

The contact form includes:
- Name, email, phone validation
- Service type dropdown
- Message field
- Server-side validation with Zod
- Email sending via Resend API
- Success/error feedback

## Google Analytics

GA4 is integrated and tracks:
- Page views
- Contact form submissions
- Portfolio interactions

## Database Integration

The project is ready for Neon PostgreSQL integration. Schema for projects:

```sql
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  images TEXT[],
  before_after_images JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
npm run build
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `primary` - Green tones for gardens
- `accent` - Purple/pink tones for floristry

### Content

- Update mock data in `data/projects.ts`
- Replace placeholder images in `/public`
- Modify text content in page components

## TODO

- [ ] Add real images to portfolio
- [ ] Connect Neon PostgreSQL database
- [ ] Add admin panel for managing projects
- [ ] Implement image upload functionality
- [ ] Add testimonials section
- [ ] Create blog section
- [ ] Add e-commerce functionality (optional)

## Support

For issues or questions, contact: kontakt@isciekwieciscie.pl

Instagram: [@isciekwieciscie](https://www.instagram.com/isciekwieciscie/)
