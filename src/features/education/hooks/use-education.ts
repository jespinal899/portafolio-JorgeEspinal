import type { Locale } from '@/core/entities'
import { container } from '@/infrastructure/di/container'
import { useLocalizedAsync } from '@/shared/i18n/use-localized-async'

const fetchEducation = async (locale: Locale) => {
  const [degrees, certifications] = await Promise.all([
    container.getEducation.execute(locale),
    container.getCertifications.execute(locale),
  ])
  return { degrees, certifications }
}

export const useEducation = () => useLocalizedAsync(fetchEducation)
