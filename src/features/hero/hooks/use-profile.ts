import { container } from '@/infrastructure/di/container'
import { useAsync } from '@/shared/hooks/use-async'

const fetchProfile = () => container.getProfile.execute()

export const useProfile = () => useAsync(fetchProfile)
