import { AsyncContent } from '@/shared/components/common/async-content'
import { Section } from '@/shared/components/common/section'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useProfile } from '../hooks/use-profile'
import { HeroContent } from './hero-content'

function HeroSkeleton() {
  return (
    <Section className="flex flex-col gap-4 py-24" aria-busy="true">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-12 w-80 max-w-full" />
      <Skeleton className="h-6 w-96 max-w-full" />
    </Section>
  )
}

export function HeroSection() {
  const state = useProfile()

  return (
    <AsyncContent state={state} fallback={<HeroSkeleton />}>
      {(profile) => <HeroContent profile={profile} />}
    </AsyncContent>
  )
}
