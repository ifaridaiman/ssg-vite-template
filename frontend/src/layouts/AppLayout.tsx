import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b p-4 font-semibold">
        My App
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
