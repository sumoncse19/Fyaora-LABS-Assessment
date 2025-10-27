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
