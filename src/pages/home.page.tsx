import { HeroSection, useProfile } from '@/features/hero'

export function HomePage() {
  const profileState = useProfile()

  if (profileState.status === 'loading') return null
  if (profileState.status === 'error') return <p role="alert">No se pudo cargar el perfil.</p>

  return (
    <>
      <HeroSection profile={profileState.data} />
      {/* TODO: <AboutSection />, <ExperienceSection />, <ProjectsSection />, <SkillsSection />, <ContactSection /> */}
    </>
  )
}
