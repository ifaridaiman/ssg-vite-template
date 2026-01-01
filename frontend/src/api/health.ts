import { useQuery } from '@tanstack/react-query'
import type { ApiSuccessResponse } from '../types/api-response'

type HealthStatus = {
  status: string
  timestamp: string
  uptime: {
    ms: number
    seconds: number
    minutes: number
    hours: number
    formatted: string
  }
  environment: string
  version: string
}

const fetchHealth = async (): Promise<HealthStatus> => {
  const response = await fetch('/api/health')
  if (!response.ok) {
    throw new Error('Failed to fetch health status')
  }
  const json: ApiSuccessResponse<HealthStatus> = await response.json()
  return json.data // Unwrap the data field from backend response
}

export const useHealthQuery = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // Consider data stale after 10 seconds
    retry: 3,
  })
}
