## 📁 Project Structure Visualization

```
gler/
│
├── 📂 app/
│   ├── 📂 (dashboard)/                    ← Route Group (URL: /dashboard/*)
│   │   ├── 📄 layout.tsx                  ← Dashboard Layout (shared)
│   │   │                                      • Navigation Tabs
│   │   │                                      • User Header
│   │   │                                      • Persistent across pages
│   │   │
│   │   └── 📂 dashboard/
│   │       ├── 📄 page.tsx                ← /dashboard (Service Dashboard)
│   │       ├── 📂 finance/
│   │       │   └── 📄 page.tsx            ← /dashboard/finance
│   │       ├── 📂 hr/
│   │       │   └── 📄 page.tsx            ← /dashboard/hr
│   │       ├── 📂 users/
│   │       │   └── 📄 page.tsx            ← /dashboard/users
│   │       └── 📂 compliances/
│   │           └── 📄 page.tsx            ← /dashboard/compliances
│   │
│   ├── 📄 layout.tsx                      ← Root Layout
│   ├── 📄 page.tsx                        ← / (redirects to /dashboard)
│   └── 📄 globals.css                     ← Global styles
│
├── 📂 components/
│   ├── 📂 layout/                         ← Layout Components
│   │   ├── 📄 dashboard-header.tsx        • User info
│   │   │                                      • Notifications
│   │   │                                      • Messages
│   │   │
│   │   └── 📄 dashboard-nav.tsx           • Tab navigation
│   │                                          • Active state
│   │                                          • Link management
│   │
│   └── 📂 ui/                             ← Reusable UI Components
│       └── 📄 stat-card.tsx               • Statistics display
│                                              • Metrics visualization
│
├── 📂 lib/
│   ├── 📄 constants.ts                    ← Configuration
│   │                                          • Tab definitions
│   │                                          • User data
│   │
│   └── 📄 utils.ts                        ← Utility functions
│
├── 📂 types/
│   └── 📄 index.ts                        ← TypeScript Types
│                                              • User interface
│                                              • Metrics types
│                                              • Compliance types
│
├── 📄 next.config.ts                      ← Next.js configuration
├── 📄 tsconfig.json                       ← TypeScript configuration
└── 📄 package.json                        ← Dependencies

```

## 🔄 Data Flow

```
User Clicks Tab
      ↓
Next.js Router navigates to URL
      ↓
Dashboard Layout renders (persistent)
      ↓
Page Component loads (Server Component)
      ↓
Async data fetching function executes
      ↓
Data passed to UI Components
      ↓
Page renders with data
```

## 🎯 Component Hierarchy

```
Root Layout
  └── Dashboard Layout                  (app/(dashboard)/layout.tsx)
      ├── DashboardNav                  (components/layout/dashboard-nav.tsx)
      │   └── Tab Links (5 tabs)
      ├── DashboardHeader               (components/layout/dashboard-header.tsx)
      │   ├── Notification Button
      │   ├── Message Button
      │   └── User Profile
      └── Page Content                  (varies by route)
          └── StatCard Components       (components/ui/stat-card.tsx)
```

## 🛣️ Routing Structure

```
/                              → Redirect to /dashboard
/dashboard                     → Service Dashboard Page
/dashboard/finance             → Finance Forecast Page
/dashboard/hr                  → Human Resources Page
/dashboard/users               → Users Management Page
/dashboard/compliances         → Compliances Page
```

## 🧩 Key Architectural Decisions

### 1. Route Groups `(dashboard)`

**Why?** Allows shared layout without affecting URLs

- ✅ Clean URLs
- ✅ Shared navigation
- ✅ Easy to extend

### 2. Separate Layout Files

**Why?** Better separation of concerns

- ✅ Dashboard layout isolated
- ✅ Can add other sections (admin, settings)
- ✅ Reusable across routes

### 3. Component Organization

**Why?** Maintainability and reusability

- ✅ `layout/`: Structural components
- ✅ `ui/`: Reusable UI elements
- ✅ Easy to find and update

### 4. TypeScript Types

**Why?** Type safety and documentation

- ✅ Catch errors at compile time
- ✅ Better IDE support
- ✅ Self-documenting code

### 5. Constants File

**Why?** Single source of truth

- ✅ Easy to update tab labels
- ✅ Consistent across app
- ✅ Type-safe constants

## 📊 Comparison: Old vs New Architecture

### ❌ Old Approach (Anti-pattern)

```typescript
// All in one component
function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("service");

  return (
    <div>
      {/* Inline navigation */}
      {/* Inline content */}
      {activeTab === "service" && <ServiceContent />}
      {activeTab === "finance" && <FinanceContent />}
      {/* More conditional rendering... */}
    </div>
  );
}
```

**Problems:**

- 🔴 No proper routing
- 🔴 No browser history
- 🔴 Hard to maintain
- 🔴 Poor SEO
- 🔴 Everything in one file

### ✅ New Approach (Best Practice)

```
app/(dashboard)/layout.tsx        ← Layout
app/(dashboard)/dashboard/*.tsx   ← Routes
components/layout/*               ← Navigation
components/ui/*                   ← Reusable UI
types/*                           ← Type definitions
```

**Benefits:**

- ✅ Proper routing with URLs
- ✅ Browser history works
- ✅ Easy to maintain
- ✅ Better SEO
- ✅ Modular structure
- ✅ Type-safe
- ✅ Server Components by default
