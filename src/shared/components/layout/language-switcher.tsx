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
      // Área táctil de 40px en móvil; compacto en escritorio, donde se usa el puntero.
      className="h-10 px-3 md:h-8"
      aria-label={t.language.switchLabel}
      onClick={() => setLocale(nextLocale)}
    >
      <LanguagesIcon aria-hidden="true" />
      <span lang={nextLocale}>{t.language.switchTo}</span>
    </Button>
  )
}
