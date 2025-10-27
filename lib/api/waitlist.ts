import { ServiceProvider } from "@/types";
import waitlistData from "@/data/waitlist.json";

/**
 * Simulates an API call to fetch service providers
 * In production, this would be: fetch('/api/waitlist/providers')
 */
export async function getServiceProviders(): Promise<ServiceProvider[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return waitlistData.serviceProviders as ServiceProvider[];
}

/**
 * Simulates an API call to fetch customers
 * In production, this would be: fetch('/api/waitlist/customers')
 */
export async function getCustomers(): Promise<ServiceProvider[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return waitlistData.customers as ServiceProvider[];
}

/**
 * Simulates an API call to fetch all waitlist data
 */
export async function getAllWaitlistData() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    serviceProviders: waitlistData.serviceProviders as ServiceProvider[],
    customers: waitlistData.customers as ServiceProvider[],
  };
}

/**
 * Simulates an API call to update user status
 * In production, this would be: fetch('/api/waitlist/update-status', { method: 'PUT', body: ... })
 */
export async function updateUserStatus(
  userId: string,
  newStatus: "onboarded" | "rejected" | "pending"
): Promise<ServiceProvider> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In production, this would update the database
  // For now, we'll just simulate the response
  const allUsers = [
    ...waitlistData.serviceProviders,
    ...waitlistData.customers,
  ] as ServiceProvider[];

  const user = allUsers.find((u) => u.id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  // Return the updated user
  return {
    ...user,
    status: newStatus,
  };
}
