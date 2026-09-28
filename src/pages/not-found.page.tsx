import { Link } from 'react-router-dom'
import { Section } from '@/shared/components/common/section'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/config/routes'

export function NotFoundPage() {
  return (
    <Section title="Página no encontrada">
      <Button asChild>
        <Link to={ROUTES.home}>Volver al inicio</Link>
      </Button>
    </Section>
  )
}
