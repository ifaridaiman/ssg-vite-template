import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import type { ComponentType } from 'react'
import AppLayout from './layouts/AppLayout'
import ErrorLayout from '../src/pages/errors/layout'

type PageModule = {
  default: ComponentType
}

const pages = import.meta.glob<PageModule>('./pages/**/*.tsx')

function pathFromFile(file: string): string | null {
  if (file.includes('/errors/')) return null

  return file
    .replace('./pages', '')
    .replace('/index.tsx', '/')
    .replace('.tsx', '')
    .replace(/\[([^\]]+)\]/g, ':$1')
}

function errorPath(file: string): string | null {
  if (!file.includes('/errors/')) return null
  if (file.endsWith('/404.tsx')) return '*'
  if (file.endsWith('/500.tsx')) return '/500'
  return null
}

function createLazy(loader: () => Promise<PageModule>) {
  return lazy(async () => {
    const mod = await loader()
    return { default: mod.default }
  })
}

const appRoutes: RouteObject[] = []
const errorRoutes: RouteObject[] = []

for (const [file, loader] of Object.entries(pages)) {
  const PageComponent = createLazy(loader)

  const path = pathFromFile(file)
  if (path) {
    appRoutes.push({
      path,
      element: <PageComponent />,
    })
  }

  const error = errorPath(file)
  if (error) {
    errorRoutes.push({
      path: error,
      element: <PageComponent />,
    })
  }
}

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: appRoutes,
  },
  {
    element: <ErrorLayout />,
    children: errorRoutes,
  },
]
