import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  valueColor?: string;
  bgColor?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon,
  valueColor = "text-blue-600",
  bgColor = "bg-white",
}: StatCardProps) {
  return (
    <div
      className={`${bgColor} p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
          {description && (
            <p className="text-sm text-gray-500 mt-2">{description}</p>
          )}
        </div>
        {icon && <div className="ml-4">{icon}</div>}
      </div>
    </div>
  );
}
