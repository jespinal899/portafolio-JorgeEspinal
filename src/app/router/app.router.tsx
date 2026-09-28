import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/home.page'
import { NotFoundPage } from '@/pages/not-found.page'
import { MainLayout } from '@/shared/components/layout/main-layout'
import { ROUTES } from './routes'

export const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
