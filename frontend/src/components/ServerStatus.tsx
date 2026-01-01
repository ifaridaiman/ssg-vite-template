import { useHealthQuery } from '../api/health'

// Type definition (similar to backend contracts)
type HealthData = {
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

// Private render methods (similar to backend private methods)
const renderLoadingState = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
      <p className="text-sm text-gray-600">Checking server connection...</p>
    </div>
  )
}

const renderErrorState = (error: unknown) => {
  const errorMessage = error instanceof Error ? error.message : 'Cannot connect to backend server'
  
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500"></span>
        <p className="text-sm font-medium text-red-800">Backend Offline</p>
      </div>
      <p className="mt-1 text-xs text-red-600">{errorMessage}</p>
      <p className="mt-2 text-xs text-red-600">
        Make sure the server is running: <code className="rounded bg-red-100 px-1 py-0.5">pnpm dev:server</code>
      </p>
    </div>
  )
}

const renderConnectedState = (health: HealthData) => {
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

// Main component (similar to backend controller)
const ServerStatus = () => {
  const { data: health, isLoading, isError, error } = useHealthQuery()

  if (isLoading) {
    return renderLoadingState()
  }

  if (isError) {
    return renderErrorState(error)
  }

  if (!health) {
    return null
  }

  return renderConnectedState(health)
}

export default ServerStatus

