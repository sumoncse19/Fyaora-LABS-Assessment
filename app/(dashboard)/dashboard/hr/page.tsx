import { StatCard } from "@/components/ui/stat-card";
import { HRMetrics } from "@/types";

async function getHRMetrics(): Promise<HRMetrics> {
  return {
    totalEmployees: 142,
    newHires: 8,
    openPositions: 5,
  };
}

export default async function HumanResourcesPage() {
  const metrics = await getHRMetrics();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Human Resources</h1>
        <p className="text-gray-600 mt-2">
          Employee management and HR operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Employees"
          value={metrics.totalEmployees}
          description="Active team members"
          valueColor="text-purple-600"
          bgColor="bg-purple-50"
        />
        <StatCard
          title="New Hires (Month)"
          value={metrics.newHires}
          description="Recent additions"
          valueColor="text-yellow-600"
          bgColor="bg-yellow-50"
        />
        <StatCard
          title="Open Positions"
          value={metrics.openPositions}
          description="Currently hiring"
          valueColor="text-indigo-600"
          bgColor="bg-indigo-50"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Department Distribution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Engineering", count: 45, color: "bg-blue-500" },
            { name: "Sales & Marketing", count: 32, color: "bg-green-500" },
            { name: "Operations", count: 28, color: "bg-yellow-500" },
            { name: "Support", count: 22, color: "bg-purple-500" },
            { name: "HR & Admin", count: 15, color: "bg-pink-500" },
          ].map((dept, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${dept.color}`} />
                <span className="font-medium text-gray-900">{dept.name}</span>
              </div>
              <span className="text-gray-600 font-semibold">{dept.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
