import { ContactSection } from '@/features/contact'
import { EducationSection } from '@/features/education'
import { ExperienceSection } from '@/features/experience'
import { HeroSection } from '@/features/hero'
import { SkillsSection } from '@/features/skills'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      {/* TODO: <ProjectsSection /> */}
      <ContactSection />
    </>
  )
}
