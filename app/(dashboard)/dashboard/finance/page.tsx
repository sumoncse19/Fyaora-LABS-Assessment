import { FinanceMetrics } from "@/types";

async function getFinanceMetrics(): Promise<FinanceMetrics> {
  return {
    q4Revenue: "$2.4M",
    projectedGrowth: "+18%",
  };
}

export default async function FinanceForecastPage() {
  const metrics = await getFinanceMetrics();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Finance Forecast</h1>
        <p className="text-gray-600 mt-2">
          Financial forecasting and analysis tools
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">
              Q4 Revenue
            </h4>
            <p className="text-3xl font-bold text-blue-600">
              {metrics.q4Revenue}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Projected for this quarter
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">
              Projected Growth
            </h4>
            <p className="text-3xl font-bold text-green-600">
              {metrics.projectedGrowth}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Year over year increase
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Breakdown
          </h3>
          <div className="space-y-3">
            {[
              { category: "Product Sales", amount: "$1.2M", percentage: 50 },
              { category: "Services", amount: "$800K", percentage: 33 },
              { category: "Subscriptions", amount: "$400K", percentage: 17 },
            ].map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">
                    {item.category}
                  </span>
                  <span className="text-gray-600">{item.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
