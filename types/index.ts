export interface User {
  id: string;
  name: string;
  email: string;
  location: string;
  avatar: string;
}

export interface DashboardStats {
  label: string;
  value: string | number;
  description: string;
  trend?: "up" | "down" | "neutral";
}

export interface ServiceMetrics {
  activeServices: number;
  pendingRequests: number;
  completedToday: number;
}

export interface FinanceMetrics {
  q4Revenue: string;
  projectedGrowth: string;
}

export interface HRMetrics {
  totalEmployees: number;
  newHires: number;
  openPositions: number;
}

export type ComplianceStatus = "compliant" | "pending" | "non-compliant";

export interface ComplianceItem {
  name: string;
  status: ComplianceStatus;
}
