import { LanguagesIcon } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { useI18n } from '@/shared/i18n/use-i18n'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const nextLocale = locale === 'es' ? 'en' : 'es'

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t.language.switchLabel}
      onClick={() => setLocale(nextLocale)}
    >
      <LanguagesIcon aria-hidden="true" />
      <span lang={nextLocale}>{t.language.switchTo}</span>
    </Button>
  )
}
