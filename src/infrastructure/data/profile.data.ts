import type { Profile } from '@/core/entities'
import type { Translatable } from '@/infrastructure/i18n/localize'

export const profileData: Translatable<Profile> = {
  fullName: 'Jorge Espinal',
  roles: [
    { es: 'Administrador de Sistemas', en: 'Systems Administrator' },
    { es: 'Soporte TI', en: 'IT Support' },
    { es: 'Desarrollo de Software', en: 'Software Development' },
  ],
  tagline: {
    es: 'Estudiante de Ingeniería en Informática',
    en: 'Computer Engineering Student',
  },
  summary: {
    es:
      'Me apasiona resolver problemas y crear soluciones mediante la tecnología. Actualmente me desempeño ' +
      'como Administrador de Sistemas en Finos Textiles de Centroamérica, donde trabajo con ' +
      'infraestructura, soporte TI, servidores, redes, automatización y desarrollo de soluciones ' +
      'para optimizar procesos.',
    en:
      "I'm passionate about solving problems and building solutions through technology. I currently " +
      'work as a Systems Administrator at Finos Textiles de Centroamérica, where I handle ' +
      'infrastructure, IT support, servers, networking, automation and the development of solutions ' +
      'that optimize business processes.',
  },
  location: 'Choloma, Cortés, Honduras',
  socialLinks: [
    { platform: 'github', label: 'GitHub', url: 'https://github.com/jespinal899' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jorgeespinal/' },
  ],
}
