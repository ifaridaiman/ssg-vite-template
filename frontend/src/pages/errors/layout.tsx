import { Outlet } from 'react-router-dom'

export default function ErrorLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <Outlet />
      </div>
    </div>
  )
}
