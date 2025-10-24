# Dashboard Architecture Documentation

## 🏗️ Project Structure

This dashboard follows **enterprise-grade architectural patterns** with proper separation of concerns:

```
app/
├── (dashboard)/              # Route group for dashboard pages
│   ├── layout.tsx           # Dashboard layout wrapper
│   └── dashboard/           # Dashboard routes
│       ├── page.tsx         # Service Dashboard
│       ├── finance/         # Finance Forecast
│       ├── hr/              # Human Resources
│       ├── users/           # User Management
│       └── compliances/     # Compliances & Verification
├── layout.tsx               # Root layout
└── page.tsx                 # Root page (redirects to dashboard)

components/
├── layout/                  # Layout components
│   ├── dashboard-header.tsx # Top header with user info
│   └── dashboard-nav.tsx    # Navigation tabs
└── ui/                      # Reusable UI components
    └── stat-card.tsx        # Statistics card component

lib/
├── constants.ts             # App-wide constants
└── utils.ts                 # Utility functions

types/
└── index.ts                 # TypeScript type definitions
```

## 🎯 Architectural Patterns Used

### 1. **Route Groups** (`(dashboard)`)

- Groups related routes without affecting URL structure
- Allows shared layout for dashboard pages
- Clean URL structure: `/dashboard`, `/dashboard/finance`, etc.

### 2. **Layouts**

- **Root Layout**: Base layout for entire app
- **Dashboard Layout**: Shared layout for all dashboard pages
  - Contains navigation and header
  - Sticky header for better UX
  - Centered content with max-width

### 3. **Component Organization**

- **Layout Components**: Structural components (header, nav)
- **UI Components**: Reusable, presentational components
- **Page Components**: Route-specific components

### 4. **Type Safety**

- Centralized type definitions in `types/` directory
- Interfaces for all data structures
- Type-safe props and returns

### 5. **Constants Management**

- Configuration in `lib/constants.ts`
- Single source of truth for tabs, user info
- Easy to maintain and update

### 6. **Server Components by Default**

- Pages are async Server Components
- Data fetching at component level
- Better performance and SEO

## 🚀 Features

### Navigation

- **Tab-based routing** using Next.js App Router
- Active state indication with blue underline
- Smooth transitions between pages
- Special styling for "Human Resources" tab (blue text)

### Layout Benefits

- **Persistent header**: Stays visible across all pages
- **Responsive design**: Mobile-friendly navigation
- **Centered content**: Max-width container for better readability
- **Consistent spacing**: Unified padding and margins

### Data Flow

```
Page Component (Server)
    ↓
Fetch Data (async function)
    ↓
Pass to UI Components
    ↓
Render with Types
```

## 📊 Pages Overview

### 1. Service Dashboard (`/dashboard`)

- Overview statistics (Active Services, Pending, Completed)
- Recent activity feed
- Reusable `StatCard` components

### 2. Finance Forecast (`/dashboard/finance`)

- Q4 Revenue and Growth metrics
- Revenue breakdown with progress bars
- Financial visualization

### 3. Human Resources (`/dashboard/hr`)

- Employee statistics
- Department distribution
- Color-coded metrics

### 4. Users (`/dashboard/users`)

- User list with avatars
- Status badges (Active/Inactive)
- Role display
- Action buttons

### 5. Compliances (`/dashboard/compliances`)

- Compliance status tracking
- Recent verifications
- Overview statistics
- Color-coded status indicators

## 🎨 Design System

### Colors

- **Primary**: Blue (`blue-600`)
- **Success**: Green (`green-600`)
- **Warning**: Orange/Yellow (`orange-600`, `yellow-600`)
- **Info**: Purple/Indigo (`purple-600`, `indigo-600`)

### Typography

- **Headings**: `font-bold` with appropriate sizes
- **Body**: Default weight with `text-gray-600/900`
- **Small text**: `text-sm` for secondary info

### Spacing

- Consistent padding: `p-6` for cards
- Gap spacing: `gap-4/6` for grids
- Margin bottom: `mb-6` for sections

## 🔧 How to Extend

### Adding a New Tab

1. Add route in `lib/constants.ts`
2. Create page in `app/(dashboard)/dashboard/[new-tab]/page.tsx`
3. Navigation automatically updates

### Creating New Components

1. Place in appropriate directory (`ui/` or `layout/`)
2. Define TypeScript interfaces
3. Export and import where needed

### Adding Data Fetching

```typescript
async function getData(): Promise<DataType> {
  // Fetch from API
  return data;
}

export default async function Page() {
  const data = await getData();
  return <Component data={data} />;
}
```

## ✅ Best Practices Followed

1. ✅ **Separation of Concerns**: Logic, UI, and types are separated
2. ✅ **Type Safety**: TypeScript throughout
3. ✅ **Reusability**: Shared components and utilities
4. ✅ **Performance**: Server Components for better load times
5. ✅ **Maintainability**: Clear structure and naming
6. ✅ **Scalability**: Easy to add new features
7. ✅ **Code Quality**: Consistent formatting and linting
8. ✅ **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Running the Application

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` - it will redirect to `/dashboard`

## 📝 Notes

- All pages use Next.js 15 App Router
- Server Components are used for optimal performance
- Client Components only where needed (interactive elements)
- Responsive design works on mobile, tablet, and desktop
- Images optimized with Next.js Image component
- External images configured in `next.config.ts`
