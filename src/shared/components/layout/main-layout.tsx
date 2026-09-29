import { Outlet } from 'react-router-dom'
import { Footer } from './footer'
import { Header } from './header'

export function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
