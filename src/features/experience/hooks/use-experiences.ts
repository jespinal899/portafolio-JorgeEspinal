import type { Locale } from '@/core/entities'
import { container } from '@/infrastructure/di/container'
import { useLocalizedAsync } from '@/shared/i18n/use-localized-async'

const fetchExperiences = (locale: Locale) => container.getExperiences.execute(locale)

export const useExperiences = () => useLocalizedAsync(fetchExperiences)
