import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  )
}
