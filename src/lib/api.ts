import Cookies from "js-cookie";
import { cachedApiCall, generateCacheKey } from "./cache";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface ApiCallOptions {
  cache?: RequestCache;
  revalidate?: number;
  useCache?: boolean;
  cacheTTL?: number;
}

export interface ApiCallOptions {
  cache?: RequestCache;
  revalidate?: number;
  useCache?: boolean;
  cacheTTL?: number;
}

async function apiCall(
  endpoint: string,
  method: string,
  body?: any,
  options?: ApiCallOptions
) {
  try {
    const headers: HeadersInit = {
      Accept: "*/*",
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      credentials: "include", // 👈 include cookies in every request
    };

    if (method !== "GET" && method !== "HEAD" && body) {
      if (body instanceof FormData) {
        fetchOptions.body = body;
      } else {
        headers["Content-Type"] = "application/json";
        fetchOptions.body = JSON.stringify(body);
      }
    }

    if (method === "GET") {
      if (options?.cache) fetchOptions.cache = options.cache;
      if (options?.revalidate !== undefined) {
        fetchOptions.next = { revalidate: options.revalidate };
      }
    }

    const response = await fetch(`${apiUrl}${endpoint}`, fetchOptions);

    if (response.status === 401) {
      // 🔒 Unauthorized: redirect user back to login
      if (typeof window !== "undefined") {
        window.location.href = "/admin";
      }
      throw new Error("Unauthorized");
    }

    const data = await response.json();

    if (!response.ok) throw new Error(data?.message || "Request failed");

    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Something went wrong");
  }
}

// Cached API call wrapper
async function cachedApiCallWrapper<T>(
  endpoint: string,
  params: Record<string, any> = {},
  options?: ApiCallOptions
): Promise<T> {
  const cacheKey = generateCacheKey(endpoint, params);

  if (options?.useCache !== false) {
    return cachedApiCall(
      cacheKey,
      () => apiCall(endpoint, "GET", undefined),
      options?.cacheTTL
    );
  }

  return apiCall(endpoint, "GET", undefined);
}

export interface adminLoginType {
  email_address: string;
  password: string;
}

export async function adminLogin(adminLogin: adminLoginType) {
  return apiCall("/admin/login", "POST", adminLogin);
}

export interface DriverRecordParams {
  page?: number;
  size?: number;
}

export interface PaginatedDriverResponse {
  drivers: any[];
  current_page: number;
  total_pages: number;
  total_driver: number;
  page_size: number;
}

export async function getAllDrivers(
  params: DriverRecordParams = {}
): Promise<PaginatedDriverResponse> {
  const queryParams = new URLSearchParams();

  if (params.page) queryParams.append("page", params.page.toString());
  if (params.size) queryParams.append("limit", params.size.toString());
  const query = queryParams.toString() ? `?${queryParams.toString()}` : "";
  const endpoint = `/get-all-drivers${query}`;

  // 👇 Ensure cachedApiCallWrapper returns the expected type
  return cachedApiCallWrapper<PaginatedDriverResponse>(endpoint, params, {
    useCache: true,
    cacheTTL: 2 * 60 * 1000,
  });
}
