import type { Profile } from '@/core/entities'

export const profileData: Profile = {
  fullName: 'Jorge Espinal',
  headline: 'Administrador de Sistemas · Estudiante de Ingeniería en Informática',
  summary:
    'Me apasiona resolver problemas y crear soluciones mediante la tecnología. Actualmente me desempeño ' +
    'como Administrador de Sistemas en Finos Textiles de Centroamérica, donde trabajo con ' +
    'infraestructura, soporte TI, servidores, redes, automatización y desarrollo de soluciones ' +
    'para optimizar procesos.',
  location: 'Choloma, Cortés, Honduras',
  socialLinks: [
    { platform: 'github', label: 'GitHub', url: 'https://github.com/jespinal899' },
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jorgeespinal/' },
  ],
}
