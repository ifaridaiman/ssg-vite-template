import ServerStatus from '../components/ServerStatus'

const Home = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">Welcome to React Vite Custom</h1>
        <p className="mt-2 text-gray-600">
          A modern monorepo with React frontend and NestJS backend
        </p>
      </div>

      <ServerStatus />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="font-semibold">React Documentation</h3>
            <p className="mt-1 text-sm text-gray-600">Learn about React features</p>
          </a>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="font-semibold">Vite Documentation</h3>
            <p className="mt-1 text-sm text-gray-600">Explore Vite configuration</p>
          </a>
          <a
            href="https://nestjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="font-semibold">NestJS Documentation</h3>
            <p className="mt-1 text-sm text-gray-600">Backend framework docs</p>
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <h3 className="font-semibold">Tailwind CSS</h3>
            <p className="mt-1 text-sm text-gray-600">Utility-first CSS framework</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home