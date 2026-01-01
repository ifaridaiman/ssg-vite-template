# React + TypeScript + Vite

A modern React application built with TypeScript, Vite, React Router, and Tailwind CSS, featuring a file-based routing system.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite (Rolldown)** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework

## 🚀 Starting a New App - Quick Setup Checklist

When forking or using this template for a new project, update these files:

### 1. **Package Configuration**
- [ ] `package.json` - Update `name`, `description`, `version`, `author`

### 2. **Branding & Meta**
- [ ] `index.html` - Update `<title>`, meta tags, favicon reference
- [ ] `public/vite.svg` - Replace with your app's favicon/logo
- [ ] `src/assets/react.svg` - Replace or remove default React logo

### 3. **Application Content**
- [ ] `src/pages/index.tsx` - Update home page content
- [ ] `src/App.tsx` - Update root component if needed
- [ ] `src/layouts/AppLayout.tsx` - Customize app layout (header, footer, nav)

### 4. **Error Pages**
- [ ] `src/pages/errors/404.tsx` - Customize 404 page messaging
- [ ] `src/pages/errors/500.tsx` - Customize 500 page messaging
- [ ] `src/pages/errors/layout.tsx` - Update error page layout branding

### 5. **Styling**
- [ ] `src/index.css` - Update global styles and CSS variables
- [ ] `tailwind.config.ts` - Add custom theme colors, fonts, etc.

### 6. **Configuration (Optional)**
- [ ] `vite.config.ts` - Add environment variables, API proxies, plugins
- [ ] `tsconfig.json` - Adjust TypeScript settings if needed
- [ ] `README.md` - Update this file with your project details

### 7. **Clean Up**
- [ ] Remove example pages in `src/pages/about/` (if not needed)
- [ ] Remove unused assets in `src/assets/`
- [ ] Update or remove `README.md` template content

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

## Common Customizations

### Adding Environment Variables

Create a `.env` file in the root:

```bash
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

Access in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### Adding a Custom Font

1. Update `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

### Setting Up API Proxy

Update `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
```

### Customizing Theme Colors

Update `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
          900: '#0c4a6e',
        },
      },
    },
  },
}
```

## License

MIT
