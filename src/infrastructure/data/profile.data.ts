import type { Profile } from '@/core/entities'

export const profileData: Profile = {
  fullName: 'Jorge Espinal',
  headline: 'Administrador de Sistemas · Estudiante de Ingeniería en Informática',
  summary:
    'Desde hace más de 5 años me apasiona resolver problemas mediante la tecnología. ' +
    'Actualmente me desempeño como administrador de sistemas en Finos Textiles de Centroamérica, ' +
    'una empresa de manufactura.',
  location: 'Choloma, Cortés, Honduras',
  socialLinks: [
    { platform: 'github', label: 'GitHub', url: 'https://github.com/jespinal899' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jorgeespinal/' },
  ],
}
