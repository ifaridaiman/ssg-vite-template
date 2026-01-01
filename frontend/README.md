# React + TypeScript + Vite

A modern React application built with TypeScript, Vite, React Router, and Tailwind CSS, featuring a file-based routing system.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite (Rolldown)** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework

## Features

- ⚡️ **File-based Routing** - Automatic route generation from file structure
- 🎨 **Tailwind CSS v4** - Modern styling with the latest Tailwind
- 📁 **Layout System** - Nested layouts support
- 🚨 **Error Pages** - Custom 404 and 500 error pages
- 🔥 **Hot Module Replacement** - Fast refresh during development
- 📦 **TypeScript** - Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start dev server
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Type check and build for production
pnpm build

# Preview production build
pnpm preview
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## Project Structure

```
src/
├── pages/           # File-based routes
│   ├── index.tsx    # Home page (/)
│   ├── about/       # About pages (/about)
│   └── errors/      # Error pages
│       ├── layout.tsx  # Error layout wrapper
│       ├── 404.tsx     # Not found page
│       └── 500.tsx     # Server error page
├── layouts/         # Layout components
│   └── AppLayout.tsx
├── assets/          # Static assets
├── router.tsx       # Route configuration
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

## File-based Routing

Routes are automatically generated from the file structure in `src/pages/`:

- `pages/index.tsx` → `/`
- `pages/about/index.tsx` → `/about`
- `pages/users/[id].tsx` → `/users/:id` (dynamic route)
- `pages/errors/404.tsx` → Catch-all 404 page

### Creating a New Page

1. Create a new `.tsx` file in `src/pages/`
2. Export a default component
3. The route will be automatically generated

Example:

```typescript
// src/pages/contact.tsx
export default function Contact() {
  return <h1>Contact Page</h1>
}
```

This automatically creates the `/contact` route.

## Error Pages

Error pages are located in `src/pages/errors/`:

- **404.tsx** - Shown for non-existent routes
- **500.tsx** - Custom server error page (accessible at `/500`)
- **layout.tsx** - Shared layout for error pages

## Layouts

Layouts wrap page components and provide shared UI elements:

- **AppLayout** - Main application layout
- **ErrorLayout** - Layout for error pages

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## License

MIT
