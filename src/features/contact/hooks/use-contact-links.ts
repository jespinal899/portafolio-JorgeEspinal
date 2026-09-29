import type { Locale } from '@/core/entities'
import { container } from '@/infrastructure/di/container'
import { useLocalizedAsync } from '@/shared/i18n/use-localized-async'

const fetchContactLinks = async (locale: Locale) =>
  (await container.getProfile.execute(locale)).socialLinks

export const useContactLinks = () => useLocalizedAsync(fetchContactLinks)
