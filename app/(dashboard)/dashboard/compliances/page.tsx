import { ComplianceItem, ComplianceStatus } from "@/types";

async function getComplianceData(): Promise<ComplianceItem[]> {
  return [
    { name: "Data Protection", status: "compliant" },
    { name: "Security Audit", status: "compliant" },
    { name: "Annual Review", status: "pending" },
    { name: "Privacy Policy", status: "compliant" },
  ];
}

function getStatusColor(status: ComplianceStatus): string {
  switch (status) {
    case "compliant":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-700";
    case "non-compliant":
      return "bg-red-100 text-red-700";
  }
}

export default async function CompliancesPage() {
  const complianceItems = await getComplianceData();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Compliances & Verification
        </h1>
        <p className="text-gray-600 mt-2">
          Compliance tracking and verification processes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Compliance Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Compliance Status
          </h2>
          <div className="space-y-3">
            {complianceItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-900">
                  {item.name}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Verifications */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Verifications
          </h2>
          <div className="space-y-3">
            {[
              { text: "Identity verification completed", status: "completed" },
              { text: "Document validation passed", status: "completed" },
              { text: "Background check in progress", status: "pending" },
              { text: "Reference check scheduled", status: "pending" },
            ].map((verification, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-lg">
                  {verification.status === "completed" ? "✓" : "⏳"}
                </span>
                <span className="text-sm text-gray-700">
                  {verification.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm border md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Compliance Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600">
                {complianceItems.filter((i) => i.status === "compliant").length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Compliant</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center">
              <p className="text-3xl font-bold text-yellow-600">
                {complianceItems.filter((i) => i.status === "pending").length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Pending</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600">
                {complianceItems.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total Checks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
