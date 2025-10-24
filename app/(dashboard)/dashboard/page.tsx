import { StatCard } from "@/components/ui/stat-card";
import { ServiceMetrics } from "@/types";

// This would typically come from an API or database
async function getServiceMetrics(): Promise<ServiceMetrics> {
  return {
    activeServices: 24,
    pendingRequests: 7,
    completedToday: 15,
  };
}

export default async function ServiceDashboardPage() {
  const metrics = await getServiceMetrics();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Service Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Overview of your services and operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Active Services"
          value={metrics.activeServices}
          description="Running smoothly"
          valueColor="text-blue-600"
        />
        <StatCard
          title="Pending Requests"
          value={metrics.pendingRequests}
          description="Awaiting approval"
          valueColor="text-orange-600"
        />
        <StatCard
          title="Completed Today"
          value={metrics.completedToday}
          description="Successfully processed"
          valueColor="text-green-600"
        />
      </div>

      {/* Additional content sections can go here */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[
            {
              service: "Payment Processing",
              status: "Active",
              time: "2 mins ago",
            },
            {
              service: "User Authentication",
              status: "Active",
              time: "5 mins ago",
            },
            {
              service: "Data Backup",
              status: "Completed",
              time: "10 mins ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{activity.service}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
