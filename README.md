# Frank Denish Omondi - Portfolio Website

A modern, production-grade portfolio showcasing impactful digital systems and engineering projects across Africa.

## 🚀 Overview

This portfolio demonstrates expertise in:
- **Civic Technology**: National-scale safety platforms
- **Healthcare AI**: Offline-first medical decision support
- **Automation**: Production-ready workflow optimization
- **IoT Systems**: Full-stack embedded solutions

Built with performance, accessibility, and visual excellence in mind.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (customized)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter
- **Deployment**: Vercel (recommended)

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets
│   └── images/         # Project images and headshot
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── projects/   # Individual project pages
│   │   ├── about/      # About page
│   │   ├── skills/     # Skills page
│   │   └── contact/    # Contact page
│   ├── components/     # React components
│   │   ├── layout/     # Header, Footer, Navigation
│   │   ├── home/       # Home page components
│   │   ├── projects/   # Project components
│   │   └── ui/         # UI primitives
│   ├── lib/            # Utilities and data
│   └── styles/         # Global styles
└── configuration files
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/denishomondi00-create/frank-omondi.git
cd frank-omondi

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors

- **Primary Blue**: #2563EB (Professional)
- **Secondary Green**: #10B981 (Impact/Success)
- **Accent Orange**: #F59E0B (CTAs)
- **Dark Gray**: #1F2937 (Text)
- **Light Gray**: #F9FAFB (Background)

### Typography

- **Display**: Space Grotesk (headings)
- **Body**: Inter (content)
- **Mono**: JetBrains Mono (code)

## 📄 Pages

### Home (`/`)
- Hero section with value proposition
- Featured projects grid
- Skills snapshot
- Call-to-action

### Projects (`/projects`)
- Filterable project grid
- Individual project detail pages:
  - SafeWatch Kenya
  - Afya-OS
  - Automation Workflows
  - IoT Monitoring System

### About (`/about`)
- Professional journey
- Philosophy and values
- Background and expertise

### Skills (`/skills`)
- Technical capabilities by category
- AI/ML, Full Stack, DevOps, IoT, Automation

### Contact (`/contact`)
- Multiple contact methods
- Email, GitHub, LinkedIn, Telegram, WhatsApp
- Collaboration interests

## 🔧 Customization

### Adding a New Project

1. Update `/src/lib/projects.ts` with project data
2. Create a new page in `/src/app/projects/[slug]/page.tsx`
3. Add project image to `/public/images/projects/`

### Updating Contact Information

Edit `/src/components/layout/Footer.tsx` and `/src/app/contact/page.tsx`

### Styling Changes

Modify `/tailwind.config.ts` for design tokens
Update `/src/styles/globals.css` for global styles

## 📊 Performance

Target Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Optimizations:
- Next.js Image optimization
- Code splitting
- Lazy loading
- Font subsetting
- Efficient caching

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### Other Platforms

Works with any Node.js hosting:
- Netlify
- Railway
- Render
- AWS Amplify

## 📱 Responsive Design

Fully responsive across:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)
- Wide (> 1280px)

## 🎯 SEO

- Semantic HTML
- Open Graph tags
- Meta descriptions
- Structured data
- Sitemap generation

## 📧 Contact

**Frank Denish Omondi**
- Email: denishomondi00@gmail.com
- GitHub: [@denishomondi00-create](https://github.com/denishomondi00-create)
- LinkedIn: [frank-omondi-954731216](https://www.linkedin.com/in/frank-omondi-954731216)
- Location: Nairobi, Kenya 🇰🇪

## 📄 License

This portfolio is open source for learning purposes. Feel free to learn from the code structure and design patterns.

---

**Built with ❤️ in Nairobi, Kenya**