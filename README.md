# React Vite Custom Monorepo

A monorepo containing a React + Vite frontend and NestJS backend.

## Structure

```
react-vite-custom/
├── frontend/          # React + Vite application
├── server/            # NestJS backend
└── package.json       # Root package configuration
```

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Getting Started

### Quick Start

The fastest way to get started:

```bash
# Install dependencies and setup env files
pnpm setup

# Start both frontend and backend
pnpm dev
```

Or use the convenience script:

```bash
chmod +x dev.sh
./dev.sh
```

### Manual Setup

```bash
# Install dependencies
pnpm install

# Copy environment files
cp frontend/.env.example frontend/.env
cp server/.env.example server/.env

# Start development
pnpm dev
```

### Development

Run both frontend and server in development mode:

```bash
pnpm dev
```

Or run them individually:

```bash
# Frontend only (http://localhost:5173)
pnpm dev:frontend

# Server only (http://localhost:3000)
pnpm dev:server
```

### Verify Connection

Once both servers are running:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/api/health

The frontend homepage displays a real-time backend connection status indicator.

### Build

Build all packages:

```bash
pnpm build
```

Or build individually:

```bash
# Frontend only
pnpm build:frontend

# Server only
pnpm build:server
```

### Linting

```bash
pnpm lint
```

### Testing

```bash
pnpm test
```

## Workspaces

### Frontend

- **Location**: `frontend/`
- **Tech Stack**: React 19, Vite, TypeScript, Tailwind CSS
- **Port**: 5173 (default)
- **API Proxy**: Requests to `/api/*` are proxied to the backend

### Server

- **Location**: `server/`
- **Tech Stack**: NestJS, TypeScript
- **Port**: 3000 (default)
- **API Prefix**: All routes are prefixed with `/api`

## Features

### 🏥 Health Check System
- **Endpoint**: `GET /api/health`
- Returns server status, uptime, environment, and version
- Frontend component displays real-time connection status
- Auto-refreshes every 30 seconds

### 🔌 API Proxy
- Vite dev server proxies `/api/*` to backend
- No CORS issues in development
- Simplified API calls from frontend

### 🚀 Developer Experience
- Concurrently runs both servers with colored output
- Hot Module Replacement (HMR) for instant frontend updates
- Auto-restart for backend changes
- VSCode workspace settings and extensions
- Environment file templates

## Scripts

- `pnpm setup` - Install dependencies and create .env files
- `pnpm dev` - Run both frontend and server with colored output
- `pnpm dev:frontend` - Run frontend only
- `pnpm dev:server` - Run server only
- `pnpm build` - Build all packages
- `pnpm build:frontend` - Build frontend only
- `pnpm build:server` - Build server only
- `pnpm lint` - Lint all packages
- `pnpm test` - Run tests in all packages
- `pnpm clean` - Remove all node_modules

## Adding Dependencies

To add a dependency to a specific workspace:

```bash
# Frontend
pnpm --filter frontend add <package-name>

# Server
pnpm --filter server add <package-name>

# Root (for shared dev dependencies)
pnpm add -D -w <package-name>
```

## Environment Variables

### Frontend (`frontend/.env`)
```bash
# Optional, defaults to proxy in vite.config.ts
VITE_API_URL=http://localhost:3000
```

### Backend (`server/.env`)
```bash
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## API Documentation

See [DEV_EXPERIENCE.md](./DEV_EXPERIENCE.md) for detailed information about:
- Health check system
- API proxy configuration
- VSCode integration
- Development workflow
- Future enhancements
