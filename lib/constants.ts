export const DASHBOARD_TABS = [
  { id: "service-dashboard", label: "Service Dashboard", href: "/dashboard" },
  {
    id: "finance-forecast",
    label: "Finance Forecast",
    href: "/dashboard/finance",
  },
  { id: "human-resources", label: "Human Resources", href: "/dashboard/hr" },
  { id: "users", label: "Users", href: "/dashboard/users" },
  {
    id: "compliances",
    label: "Compliances & Verification",
    href: "/dashboard/compliances",
  },
] as const;

export const CURRENT_USER = {
  id: "1",
  name: "Max Smith",
  email: "max.smith@example.com",
  location: "London, UK",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
};
