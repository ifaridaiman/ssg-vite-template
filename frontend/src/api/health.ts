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

export const fetchHealth = async (): Promise<HealthStatus> => {
  const response = await fetch('/api/health')
  if (!response.ok) {
    throw new Error('Failed to fetch health status')
  }
  return response.json()
}

