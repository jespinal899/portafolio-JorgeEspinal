import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { useI18n } from '@/shared/i18n/use-i18n'
import { useTheme } from '@/shared/theme/use-theme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />}
    </Button>
  )
}
