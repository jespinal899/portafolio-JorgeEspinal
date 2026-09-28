import { container } from '@/infrastructure/di/container'
import { useAsync } from '@/shared/hooks/use-async'

const fetchSkillGroups = () => container.getSkillGroups.execute()

export const useSkillGroups = () => useAsync(fetchSkillGroups)
