import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      {/* TODO: <Header /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* TODO: <Footer /> */}
    </div>
  )
}
