import { siteConfig } from '@/shared/config/site.config'
import { useI18n } from '@/shared/i18n/use-i18n'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground sm:px-6 sm:py-8">
        <p>{t.footer.copyright(year, siteConfig.title)}</p>
      </div>
    </footer>
  )
}
