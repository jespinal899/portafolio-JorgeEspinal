import type { Locale } from '@/core/entities'
import { container } from '@/infrastructure/di/container'
import { useLocalizedAsync } from '@/shared/i18n/use-localized-async'

const fetchSkillGroups = (locale: Locale) => container.getSkillGroups.execute(locale)

export const useSkillGroups = () => useLocalizedAsync(fetchSkillGroups)
