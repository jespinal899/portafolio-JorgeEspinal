import { container } from '@/infrastructure/di/container'
import { useAsync } from '@/shared/hooks/use-async'

const fetchExperiences = () => container.getExperiences.execute()

export const useExperiences = () => useAsync(fetchExperiences)
