import { ExperienceSection } from '@/features/experience'
import { HeroSection } from '@/features/hero'
import { SkillsSection } from '@/features/skills'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      {/* TODO: <ProjectsSection />, <ContactSection /> */}
    </>
  )
}
