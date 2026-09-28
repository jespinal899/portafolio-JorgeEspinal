import type { Profile } from '@/core/entities'

// TODO: reemplazar con tu información real.
export const profileData: Profile = {
  fullName: 'Tu Nombre',
  headline: 'Software Developer',
  summary: 'Breve descripción sobre ti, tu experiencia y lo que te apasiona construir.',
  location: 'Ciudad, País',
  socialLinks: [
    { platform: 'github', label: 'GitHub', url: 'https://github.com/' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
}
