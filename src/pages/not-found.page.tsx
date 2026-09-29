import { Link } from 'react-router-dom'
import { Section } from '@/shared/components/common/section'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/config/routes'
import { useI18n } from '@/shared/i18n/use-i18n'

export function NotFoundPage() {
  const { t } = useI18n()

  return (
    <Section title={t.notFound.title}>
      <Button asChild>
        <Link to={ROUTES.home}>{t.notFound.backHome}</Link>
      </Button>
    </Section>
  )
}
