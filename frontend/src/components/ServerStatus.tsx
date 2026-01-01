import { useEffect, useState } from 'react'
import { fetchHealth } from '../api/health'

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

const ServerStatus = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await fetchHealth()
        setHealth(data)
        setError(null)
      } catch {
        setError('Cannot connect to backend server')
      } finally {
        setLoading(false)
      }
    }

    checkHealth()
    const interval = setInterval(checkHealth, 30000) // Update every 30 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (loading) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p className="text-sm text-gray-600">Checking server connection...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          <p className="text-sm font-medium text-red-800">Backend Offline</p>
        </div>
        <p className="mt-1 text-xs text-red-600">{error}</p>
        <p className="mt-2 text-xs text-red-600">
          Make sure the server is running: <code className="rounded bg-red-100 px-1 py-0.5">pnpm dev:server</code>
        </p>
      </div>
    )
  }

  if (!health) {
    return null
  }

  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
        <p className="text-sm font-medium text-green-800">Backend Connected</p>
      </div>
      <div className="mt-2 space-y-1 text-xs text-green-700">
        <p>Uptime: {health.uptime.formatted}</p>
        <p>Environment: {health.environment}</p>
        <p>Version: {health.version}</p>
      </div>
    </div>
  )
}

export default ServerStatus

