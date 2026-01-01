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

### Install Dependencies

```bash
pnpm install
```

This will install dependencies for all workspaces.

### Development

Run both frontend and server in development mode:

```bash
pnpm dev
```

Or run them individually:

```bash
# Frontend only
pnpm dev:frontend

# Server only
pnpm dev:server
```

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

### Server

- **Location**: `server/`
- **Tech Stack**: NestJS, TypeScript
- **Port**: 3000 (default)

## Scripts

- `pnpm dev` - Run both frontend and server in development mode
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
