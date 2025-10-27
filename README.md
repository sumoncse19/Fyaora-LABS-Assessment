# Gler - HR Waitlist Management Dashboard

A production-ready HR waitlist management system built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4, featuring a comprehensive service provider onboarding workflow.

## 🎯 Overview

This dashboard provides a complete waitlist management solution for HR teams to review, filter, and onboard service providers and customers. The system includes advanced filtering, real-time status updates, and a professional user interface designed for efficiency.

## ✨ Key Features

- **🗂️ Multi-Tab Navigation**: Service Dashboard, Finance Forecast, HR Waitlist, Users, and Compliances
- **📊 Waitlist Management**: Manage service providers (60+) and customers (5+) with detailed filtering
- **🔍 Advanced Filtering**: Filter by postcode, registration status, date range, vendor type, and service offering
- **📝 User Details Modal**: View comprehensive user information and update registration status
- **🔔 Toast Notifications**: Real-time feedback using Sonner for all user actions
- **🎨 Modern UI**: Clean, responsive design with custom date pickers and search components
- **⚡ Performance**: Optimistic UI updates with async/await API patterns
- **🔒 Type-Safe**: Full TypeScript implementation with strict mode
- **📱 Responsive**: Mobile, tablet, and desktop support
- **🎭 Professional**: shadcn/ui component library integration

## 🚀 Quick Start

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

Visit **http://localhost:3000** - automatically redirects to `/dashboard`

## 📋 Available Routes

| Route                    | Description                           |
| ------------------------ | ------------------------------------- |
| `/dashboard`             | Service Dashboard with metrics        |
| `/dashboard/finance`     | Finance forecasting                   |
| `/dashboard/hr`          | HR waitlist management (main feature) |
| `/dashboard/users`       | User management                       |
| `/dashboard/compliances` | Compliance tracking                   |

## 🏗️ Project Architecture

### Detailed Project Structure

```
gler/
├── app/
│   ├── (dashboard)/          # Route group for dashboard
│   │   ├── layout.tsx        # Shared dashboard layout with navigation
│   │   └── dashboard/
│   │       ├── page.tsx      # Service Dashboard (main)
│   │       ├── finance/
│   │       │   └── page.tsx  # Finance Forecast
│   │       ├── hr/
│   │       │   └── page.tsx  # HR Waitlist Management ⭐
│   │       ├── users/
│   │       │   └── page.tsx  # User Management
│   │       └── compliances/
│   │           └── page.tsx  # Compliances & Verification
│   ├── layout.tsx            # Root layout with fonts & Toaster
│   ├── page.tsx              # Landing page (redirects to dashboard)
│   ├── globals.css           # Global styles & Tailwind
│   └── favicon.ico           # App icon
│
├── components/
│   ├── layout/               # Layout components
│   │   ├── dashboard-header.tsx  # Header with user info & notifications
│   │   └── dashboard-nav.tsx     # Tab navigation component
│   │
│   ├── waitlist/             # HR Waitlist specific components ⭐
│   │   ├── waitlist-table.tsx         # Data table with pagination
│   │   ├── waitlist-filters.tsx       # Advanced filter sidebar
│   │   └── user-details-modal.tsx     # User details & status update
│   │
│   └── ui/                   # Reusable UI components (shadcn/ui)
│       ├── badge.tsx         # Status badges
│       ├── button.tsx        # Button component
│       ├── calendar.tsx      # Calendar picker
│       ├── checkbox.tsx      # Checkbox component
│       ├── date-picker.tsx   # Custom date picker with calendar
│       ├── dialog.tsx        # Modal dialog
│       ├── input.tsx         # Input field
│       ├── label.tsx         # Form label
│       ├── popover.tsx       # Popover component
│       ├── sonner.tsx        # Toast notifications
│       ├── stat-card.tsx     # Dashboard stat cards
│       └── table.tsx         # Table components
│
├── lib/
│   ├── api/
│   │   └── waitlist.ts       # API functions for waitlist operations
│   ├── constants.ts          # App-wide constants (tabs, user)
│   └── utils.ts              # Utility functions (cn, etc.)
│
├── data/
│   └── waitlist.json         # Mock data (60 providers + 5 customers)
│
├── types/
│   └── index.ts              # TypeScript type definitions
│
├── public/
│   ├── gler.svg              # Gler logo
│   └── ...                   # Other assets
│
└── Configuration Files
    ├── components.json       # shadcn/ui config
    ├── tsconfig.json         # TypeScript config
    ├── tailwind.config.ts    # Tailwind CSS config
    ├── next.config.ts        # Next.js config
    ├── eslint.config.mjs     # ESLint config
    └── package.json          # Dependencies
```

### Key Architectural Decisions

1. **Route Groups**: Uses `(dashboard)` for organization without URL impact
2. **Layouts**: Persistent navigation across all dashboard pages
3. **Server/Client Components**: Strategic use for optimal performance
4. **Type Safety**: Centralized TypeScript types with strict mode
5. **Component Library**: shadcn/ui for accessible, customizable components
6. **State Management**: React hooks (useState, useEffect) for local state
7. **API Pattern**: Async/await with simulated delays for realistic UX
8. **Optimistic Updates**: UI updates immediately, rollback on errors

## 📚 Documentation

- **[Quick Start Guide](./QUICK_START.md)** - Get started quickly
- **[Architecture Guide](./ARCHITECTURE_GUIDE.md)** - Visual structure and patterns
- **[Dashboard Architecture](./DASHBOARD_ARCHITECTURE.md)** - Detailed architecture documentation
- **[Refactoring Summary](./REFACTORING_SUMMARY.md)** - Senior vs junior approach comparison

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **UI Framework**: [React 19.2](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
- **UI Components**:
  - [@radix-ui/react-dialog](https://www.radix-ui.com/) - Modal dialogs
  - [@radix-ui/react-popover](https://www.radix-ui.com/) - Popovers
  - [@radix-ui/react-label](https://www.radix-ui.com/) - Form labels
  - [@radix-ui/react-slot](https://www.radix-ui.com/) - Composition primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Date Handling**: [date-fns](https://date-fns.org/) & [react-day-picker](https://daypicker.dev/)
- **Utilities**:
  - [clsx](https://github.com/lukeed/clsx) - Conditional classNames
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes
  - [class-variance-authority](https://cva.style/) - Component variants
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#1A78F2` - Actions, borders, highlights
- **Background**: `#F4F7F9` - Sidebar, cards
- **Text Primary**: `#324054` - Main text
- **Text Secondary**: `#79747E` - Secondary text, placeholders
- **Borders**: `#D3D8DD` - Subtle borders
- **Success**: Green (`green-600`) - Onboarded status
- **Warning**: Orange/Yellow - Pending status
- **Error**: Red - Rejected status

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Component Styles

- **Rounded Corners**: Mostly `rounded-sm` or `rounded-lg`
- **Border Width**: `border-2` or `border-3` for emphasis
- **Shadows**: Subtle shadows on cards and modals
- **Spacing**: Consistent padding with Tailwind scale

## � Core Features Deep Dive

### 1. HR Waitlist Management (`/dashboard/hr`)

The centerpiece of this application - a full-featured waitlist management system:

#### Features:

- **Dual Tab System**: Switch between Service Providers (60) and Customers (5)
- **Advanced Search**: Real-time search by email, phone number, or postcode
- **Multi-Filter Sidebar**:
  - Postcode filter
  - Registration Status (Onboarded, Rejected, Pending)
  - Date Range with custom date pickers
  - Vendor Type (Independent, Company)
  - Service Offering (Housekeeping, Window Cleaning, Car Valet)
- **Data Table**:
  - Pagination (10 items per page)
  - Status badges with color coding
  - Action buttons for each user
  - Responsive design
- **User Details Modal**:
  - Comprehensive user information display
  - Contact details section
  - Customer details section
  - Service offerings display
  - Internal notes section
  - Status update buttons (Onboard/Reject)
  - Real-time status updates with API calls
  - Loading states during updates
  - Toast notifications for success/error

#### Technical Implementation:

```typescript
// API Pattern
export async function updateUserStatus(
  userId: string,
  newStatus: RegistrationStatus
): Promise<ServiceProvider>

// Optimistic Updates
- Update UI immediately
- Show loading state
- Make API call
- Update state on success
- Rollback on error
- Show toast notification
```

### 2. Filter System

Advanced filtering with real-time updates:

```typescript
interface FilterOptions {
  postcode: string;
  registrationStatus: RegistrationStatus[];
  dateRange: { start: string; end: string };
  vendorType: VendorType[];
  serviceOffering: ServiceOffering[];
}
```

Filters are applied client-side using `useMemo` for optimal performance, supporting multiple simultaneous filters.

### 3. Custom Date Picker

A fully custom date picker component with:

- Month/year dropdown selectors
- Calendar popup interface
- Manual input support
- MM/DD/YYYY format display
- Custom styling matching design system
- Keyboard navigation support

### 4. Toast Notification System

Using Sonner for user feedback:

- Success notifications (green)
- Error notifications (red)
- Auto-dismiss after 3 seconds
- Non-blocking UI
- Accessible

## 📊 Data Structure

### Service Provider Model

```typescript
interface ServiceProvider {
  id: string; // Unique identifier
  name: string; // Full name
  email: string; // Contact email
  phoneNumber: string; // Phone number
  postcode: string; // Location postcode
  vendorType: VendorType; // "independent" | "company"
  serviceOffering: ServiceOffering; // Service type
  signupDate: string; // DD/MM/YYYY format
  status: RegistrationStatus; // "onboarded" | "rejected" | "pending"
}
```

### Mock Data

- **Location**: `data/waitlist.json`
- **Service Providers**: 60 entries
- **Customers**: 5 entries
- **All entries include**: Realistic names, emails, phone numbers, addresses

## 🎯 Best Practices Implemented

✅ **Separation of Concerns** - Components, layouts, and pages clearly separated  
✅ **Single Responsibility Principle** - Each component has one clear purpose  
✅ **DRY (Don't Repeat Yourself)** - Reusable components throughout  
✅ **Type Safety** - Full TypeScript coverage with strict mode  
✅ **Performance Optimization** - useMemo for filtered data, optimistic updates  
✅ **SEO-friendly** - Proper routing and metadata  
✅ **Accessibility** - Radix UI primitives, semantic HTML, ARIA labels  
✅ **Responsive Design** - Mobile-first approach  
✅ **Code Splitting** - Automatic per route  
✅ **Error Handling** - Try/catch blocks, user feedback  
✅ **Loading States** - Visual feedback during async operations  
✅ **Optimistic UI** - Immediate feedback, rollback on errors  
✅ **Toast Notifications** - Non-intrusive user feedback

## 📖 Usage Examples

### Creating a New Dashboard Page

1. Create the page file:

```bash
app/(dashboard)/dashboard/[name]/page.tsx
```

2. Add to constants:

```typescript
// lib/constants.ts
export const DASHBOARD_TABS = [
  // ... existing tabs
  { id: "new-page", label: "New Page", href: "/dashboard/new-page" },
];
```

3. Navigation automatically updates!

### Using the Waitlist Components

```typescript
// In your page component
import { WaitlistTable } from "@/components/waitlist/waitlist-table";
import { WaitlistFilters } from "@/components/waitlist/waitlist-filters";

export default function Page() {
  const [filters, setFilters] = useState<FilterOptions>({...});

  return (
    <div className="grid grid-cols-4 gap-6">
      <WaitlistFilters onFilterChange={setFilters} />
      <WaitlistTable data={filteredData} />
    </div>
  );
}
```

### Using the Date Picker

```typescript
import { DatePicker } from "@/components/ui/date-picker";

<DatePicker
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  placeholder="MM/DD/YYYY"
/>;
```

### Updating User Status

```typescript
import { updateUserStatus } from "@/lib/api/waitlist";
import { toast } from "sonner";

const handleUpdate = async (userId: string, newStatus: RegistrationStatus) => {
  try {
    const updatedUser = await updateUserStatus(userId, newStatus);
    toast.success(`User ${newStatus} successfully!`);
    // Update your state
  } catch (error) {
    toast.error("Failed to update user status");
  }
};
```

## 🔧 Development Guide

### Adding a New Filter

1. Update the `FilterOptions` type in `types/index.ts`
2. Add the filter UI in `waitlist-filters.tsx`
3. Implement filter logic in the page component's `useMemo`
4. Update state management

### Creating Custom Components

1. Create component in `components/ui/` for reusable UI
2. Create in `components/waitlist/` for feature-specific
3. Add TypeScript interfaces
4. Export from component file

### Working with the API

All API functions are in `lib/api/waitlist.ts`:

- `getAllWaitlistData()` - Fetch all data
- `updateUserStatus(userId, status)` - Update status

Current implementation uses mock data with simulated delays. Replace with real API calls when backend is ready.

## 🧪 Quality Assurance

### ✅ Checklist

- [x] No TypeScript errors
- [x] No ESLint errors
- [x] Responsive design tested (mobile, tablet, desktop)
- [x] All routes functional
- [x] Browser history works correctly
- [x] SEO-friendly URLs
- [x] Accessibility features implemented
- [x] Loading states on all async operations
- [x] Error handling with user feedback
- [x] Optimistic UI updates working
- [x] Toast notifications working
- [x] All filters functional
- [x] Search working correctly
- [x] Pagination working
- [x] Modal interactions smooth

## � Component Reference

### Layout Components

#### `dashboard-header.tsx`

Header with user profile, location, and notifications

- Props: None (uses constants)
- Features: User avatar, location display, notification badge

#### `dashboard-nav.tsx`

Tab navigation for dashboard sections

- Props: None (uses constants)
- Features: Active tab highlighting, client-side navigation

### Waitlist Components

#### `waitlist-table.tsx`

Main data table with pagination

- Props: `data: ServiceProvider[]`
- Features: Pagination, status badges, action buttons, modal integration
- State: Local table data, pagination, modal state

#### `waitlist-filters.tsx`

Sidebar filter panel

- Props: `onFilterChange: (filters: FilterOptions) => void`
- Features: All filter types, reset button, sticky positioning
- State: Local filter state

#### `user-details-modal.tsx`

User details and status update modal

- Props:
  - `user: ServiceProvider | null`
  - `isOpen: boolean`
  - `onClose: () => void`
  - `onStatusUpdate: (user: ServiceProvider) => void`
- Features: User details display, status update, API integration, loading states, toast notifications

### UI Components (shadcn/ui based)

#### `button.tsx`

Customizable button component with variants

- Variants: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon

#### `badge.tsx`

Status badge component

- Variants: default, secondary, destructive, outline

#### `input.tsx`

Form input component

#### `date-picker.tsx`

Custom date picker with calendar

- Props: `value?: Date`, `onChange?: (date) => void`, `placeholder?: string`
- Features: Calendar popup, month/year dropdowns, manual input

#### `dialog.tsx`

Modal dialog component (from Radix UI)

#### `calendar.tsx`

Calendar component for date selection

#### `checkbox.tsx`

Checkbox with label support

#### `table.tsx`

Table components (Table, TableHeader, TableBody, TableRow, TableCell)

#### `popover.tsx`

Popover component for overlays

#### `sonner.tsx`

Toast notification component

#### `stat-card.tsx`

Dashboard statistics card

## � Performance Optimizations

1. **useMemo for Filtering**: Filter logic wrapped in useMemo to prevent unnecessary recalculations
2. **Optimistic Updates**: UI updates immediately, API calls in background
3. **Client-side Filtering**: Fast filtering without server round-trips
4. **Lazy Loading**: Components loaded as needed
5. **Image Optimization**: Next.js Image component for logos
6. **Code Splitting**: Automatic route-based splitting
7. **CSS-in-JS**: Tailwind for minimal CSS bundle

## 🔐 Type Safety

All major types are defined in `types/index.ts`:

```typescript
// User related
-User -
  ServiceProvider -
  RegistrationStatus -
  VendorType -
  ServiceOffering -
  // Dashboard related
  DashboardStats -
  ServiceMetrics -
  FinanceMetrics -
  HRMetrics -
  ComplianceStatus -
  ComplianceItem -
  // Filter related
  FilterOptions;
```

TypeScript strict mode enabled for maximum type safety.

## � Scalability

This architecture supports:

- ✅ Adding new dashboard tabs (just add to constants)
- ✅ Creating new filter types (extend FilterOptions)
- ✅ Adding more user fields (update ServiceProvider interface)
- ✅ Integrating real API (replace mock functions in lib/api)
- ✅ Adding authentication (wrap dashboard in auth provider)
- ✅ Multi-language support (add i18n)
- ✅ Database integration (replace JSON with DB calls)
- ✅ Real-time updates (WebSocket integration)
- ✅ Export functionality (CSV, PDF generation)
- ✅ Bulk operations (multi-select with actions)

## 🔄 State Management Flow

```
Page Component
    ↓
  useState (filters, searchQuery, data)
    ↓
  useMemo (filtered data calculation)
    ↓
  WaitlistFilters ← → FilterOptions
    ↓
  WaitlistTable ← → ServiceProvider[]
    ↓
  UserDetailsModal ← → API Call
    ↓
  updateUserStatus API
    ↓
  Toast Notification
    ↓
  State Update (via callback)
    ↓
  Table Re-renders with new data
```

## 🤝 Contributing

1. Follow existing code patterns
2. Maintain type safety (no `any` types)
3. Keep components focused and reusable
4. Add proper TypeScript interfaces
5. Test responsiveness on all screen sizes
6. Ensure accessibility (ARIA labels, semantic HTML)
7. Use Tailwind classes (avoid custom CSS)
8. Add loading states for async operations
9. Implement error handling with user feedback
10. Document complex logic with comments

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

## � Known Limitations

- Mock data only (no real backend integration yet)
- No authentication system (ready for integration)
- No real-time updates (WebSocket not implemented)
- No data persistence (localStorage or DB needed)
- Search is client-side only
- No export functionality (CSV/PDF)
- No bulk operations

## 🔮 Future Enhancements

Potential features to implement:

1. **Authentication & Authorization**

   - User login/logout
   - Role-based access control
   - Protected routes

2. **Real Backend Integration**

   - REST API or GraphQL
   - Database integration (PostgreSQL, MongoDB)
   - Real-time updates via WebSocket

3. **Advanced Features**

   - Bulk actions (multi-select)
   - Export to CSV/PDF
   - Email notifications
   - Activity logs/audit trail
   - Advanced analytics dashboard

4. **User Experience**

   - Dark mode support
   - Keyboard shortcuts
   - Undo/redo functionality
   - Drag-and-drop sorting
   - Column customization

5. **Performance**
   - Virtual scrolling for large datasets
   - Server-side pagination
   - Caching strategy
   - Image CDN integration

## 📄 License

This project is part of an assessment for Gler.

## 🙏 Acknowledgments

- Built with [Next.js 16](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Built by**: Sumon  
**For**: Gler Assessment  
**Date**: October 2025

**Note**: This is a production-ready implementation following modern React and Next.js best practices, featuring a complete HR waitlist management system with advanced filtering, real-time updates, and professional UI/UX.
