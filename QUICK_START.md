# Quick Reference Guide

## 🚀 Getting Started

```bash
# Clone and setup
git clone <repo-url>
cd react-vite-custom
pnpm setup

# Start development
pnpm dev
```

## 📡 URLs

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/api/health

## 🛠️ Common Commands

```bash
# Development
pnpm dev              # Start both servers
pnpm dev:frontend     # Frontend only
pnpm dev:server       # Backend only
./dev.sh              # With pre-checks

# Building
pnpm build            # Build everything
pnpm build:frontend   # Frontend only
pnpm build:server     # Backend only

# Quality
pnpm lint             # Lint all
pnpm test             # Test all

# Dependencies
pnpm --filter frontend add <package>
pnpm --filter server add <package>
pnpm add -D -w <package>  # Root level
```

## 📁 Project Structure

```
react-vite-custom/
├── frontend/
│   ├── src/
│   │   ├── api/              # API client functions
│   │   ├── components/       # React components
│   │   ├── pages/            # File-based routes
│   │   ├── layouts/          # Layout components
│   │   ├── assets/           # Static assets
│   │   └── router.tsx        # Route configuration
│   ├── .env.example
│   └── vite.config.ts        # Vite + proxy config
│
├── server/
│   ├── src/
│   │   ├── app.controller.ts # Health endpoint
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   └── main.ts           # CORS + prefix
│   ├── .env.example
│   └── nest-cli.json
│
├── .vscode/
│   ├── settings.json         # Workspace settings
│   └── extensions.json       # Recommended extensions
│
├── dev.sh                    # Quick start script
├── pnpm-workspace.yaml       # Workspace config
└── package.json              # Root scripts
```

## 🔌 API Integration

### Backend (NestJS)

```typescript
// app.controller.ts
@Get('health')
getHealth() {
  return {
    status: 'ok',
    uptime: { /* ... */ },
    // ...
  }
}
```

### Frontend (React)

```typescript
// api/health.ts
export const fetchHealth = async () => {
  const response = await fetch('/api/health')
  return response.json()
}

// components/ServerStatus.tsx
const [health, setHealth] = useState(null)
useEffect(() => {
  fetchHealth().then(setHealth)
}, [])
```

## 🎯 Key Features

✅ **Health Check** - Real-time backend status on homepage  
✅ **API Proxy** - `/api/*` proxied to backend (no CORS issues)  
✅ **Hot Reload** - Frontend HMR + backend watch mode  
✅ **TypeScript** - Full type safety across stack  
✅ **Monorepo** - Unified dependency management  
✅ **VSCode** - Optimized workspace settings  

## 🐛 Troubleshooting

### Backend won't connect
```bash
# Check if server is running
curl http://localhost:3000/api/health

# Restart server
pnpm dev:server
```

### Port already in use
```bash
# Frontend (5173)
lsof -ti:5173 | xargs kill -9

# Backend (3000)
lsof -ti:3000 | xargs kill -9
```

### Dependencies out of sync
```bash
pnpm clean
pnpm install
```

## 📚 Documentation

- [README.md](./README.md) - Full documentation
- [DEV_EXPERIENCE.md](./DEV_EXPERIENCE.md) - Developer experience guide
- [frontend/README.md](./frontend/README.md) - Frontend setup guide

