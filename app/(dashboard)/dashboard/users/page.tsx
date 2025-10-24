import Image from "next/image";

interface UserItem {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  role: string;
  avatar: string;
}

async function getUsers(): Promise<UserItem[]> {
  // Different Unsplash profile images
  const avatars = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  ];

  return [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "active",
      role: "Admin",
      avatar: avatars[0],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "active",
      role: "Manager",
      avatar: avatars[1],
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@example.com",
      status: "active",
      role: "Developer",
      avatar: avatars[2],
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      status: "active",
      role: "Designer",
      avatar: avatars[3],
    },
    {
      id: 5,
      name: "Tom Brown",
      email: "tom.brown@example.com",
      status: "active",
      role: "Developer",
      avatar: avatars[4],
    },
  ];
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600 mt-2">
            User management and access control
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">All Users</h2>
            <span className="text-sm text-gray-500">
              {users.length} total users
            </span>
          </div>

          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 relative overflow-hidden shrink-0">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{user.name}</h4>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
                <div className="text-sm text-gray-600 hidden md:block">
                  {user.role}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${
                    user.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
