import type { Locale } from '@/core/entities'
import { container } from '@/infrastructure/di/container'
import { useLocalizedAsync } from '@/shared/i18n/use-localized-async'

const fetchProfile = (locale: Locale) => container.getProfile.execute(locale)

export const useProfile = () => useLocalizedAsync(fetchProfile)
