# 🚀 Quick Start Guide

## Overview

Enterprise-grade dashboard application built with Next.js 15, TypeScript, and Tailwind CSS following senior-level architectural patterns.

## 📦 Installation

```bash
# Navigate to project
cd /home/sumon7866/Projects/assessment/gler

# Install dependencies (if not already done)
pnpm install
```

## 🏃 Running the Application

```bash
# Development mode
pnpm dev

# Production build
pnpm build
pnpm start
```

Visit: **http://localhost:3000** (automatically redirects to `/dashboard`)

## 🗺️ Available Routes

| URL                      | Page              | Description                          |
| ------------------------ | ----------------- | ------------------------------------ |
| `/`                      | Root              | Redirects to `/dashboard`            |
| `/dashboard`             | Service Dashboard | Main dashboard with service metrics  |
| `/dashboard/finance`     | Finance Forecast  | Financial metrics and projections    |
| `/dashboard/hr`          | Human Resources   | HR metrics and employee stats        |
| `/dashboard/users`       | Users             | User management interface            |
| `/dashboard/compliances` | Compliances       | Compliance tracking and verification |

## 📁 Project Structure

```
app/
├── (dashboard)/              # Dashboard route group
│   ├── layout.tsx           # Shared dashboard layout
│   └── dashboard/           # Dashboard pages
│       ├── page.tsx         # Service Dashboard
│       ├── finance/page.tsx
│       ├── hr/page.tsx
│       ├── users/page.tsx
│       └── compliances/page.tsx
components/
├── layout/                   # Layout components
│   ├── dashboard-header.tsx # User header
│   └── dashboard-nav.tsx    # Tab navigation
└── ui/                       # Reusable components
    └── stat-card.tsx        # Statistics card
lib/
├── constants.ts             # App constants
└── utils.ts                 # Utilities
types/
└── index.ts                 # TypeScript types
```

## 🎯 Key Features

### ✅ Tab Navigation

- Click any tab to navigate between dashboard sections
- Active tab indicated with blue underline
- Smooth transitions
- Browser back/forward support

### ✅ Responsive Design

- Mobile-friendly navigation
- Tablet and desktop optimized
- Grid layouts adapt to screen size

### ✅ Performance

- Server Components for faster initial load
- Code splitting per route
- Optimized images with Next.js Image

### ✅ Type Safety

- Full TypeScript coverage
- Type-safe components and props
- IDE autocomplete support

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 🧩 Component Usage

### Using StatCard

```typescript
import { StatCard } from "@/components/ui/stat-card";

<StatCard
  title="Active Services"
  value={24}
  description="Running smoothly"
  valueColor="text-blue-600"
/>;
```

### Creating a New Dashboard Page

1. Create file: `app/(dashboard)/dashboard/[name]/page.tsx`
2. Add route to `lib/constants.ts`:

```typescript
export const DASHBOARD_TABS = [
  // ... existing tabs
  { id: "new-page", label: "New Page", href: "/dashboard/new-page" },
];
```

3. Navigation automatically updates!

## 📚 Documentation

- **Architecture Guide**: `ARCHITECTURE_GUIDE.md`
- **Dashboard Architecture**: `DASHBOARD_ARCHITECTURE.md`
- **Refactoring Summary**: `REFACTORING_SUMMARY.md`

## 🔧 Customization

### Updating User Info

Edit `lib/constants.ts`:

```typescript
export const CURRENT_USER = {
  id: "1",
  name: "Your Name",
  email: "your.email@example.com",
  location: "Your Location",
  avatar: "https://...",
};
```

### Changing Colors

Tailwind classes in components use:

- Primary: `blue-600`
- Success: `green-600`
- Warning: `orange-600`
- Info: `purple-600`

### Adding New Components

Place in appropriate directory:

- UI components → `components/ui/`
- Layout components → `components/layout/`

## 🧪 Testing (Future)

```bash
# Unit tests (when added)
pnpm test

# E2E tests (when added)
pnpm test:e2e
```

## 📈 Performance Tips

1. **Images**: Use Next.js Image component
2. **Server Components**: Default for all pages
3. **Client Components**: Only for interactivity
4. **Code Splitting**: Automatic per route
5. **Lazy Loading**: Use `next/dynamic` when needed

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

### Port Already in Use

```bash
# Use different port
pnpm dev -- -p 3001
```

### Type Errors

```bash
# Check TypeScript
pnpm tsc --noEmit
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy automatically via Vercel
```

### Other Platforms

```bash
# Build
pnpm build

# Start
pnpm start
```

## 📝 Best Practices

1. ✅ Keep components small and focused
2. ✅ Use TypeScript for all new files
3. ✅ Follow existing naming conventions
4. ✅ Add types for all data structures
5. ✅ Use Server Components by default
6. ✅ Add "use client" only when needed
7. ✅ Keep constants centralized
8. ✅ Write semantic HTML

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📞 Support

For questions or issues, check:

- `DASHBOARD_ARCHITECTURE.md` - Architecture details
- `REFACTORING_SUMMARY.md` - Design decisions
- `ARCHITECTURE_GUIDE.md` - Visual guides

---

Built with ❤️ following enterprise-grade best practices
