import type { SkillCategory } from '@/core/entities'

/**
 * Textos de la interfaz en español. Es el diccionario de referencia: su forma define el tipo
 * `Dictionary`, así que cualquier otro idioma debe tener exactamente las mismas claves.
 */
export const es = {
  meta: {
    title: 'Jorge Espinal · Portafolio',
    description:
      'Portafolio de Jorge Espinal: Administrador de Sistemas y estudiante de Ingeniería en Informática.',
  },
  common: {
    loadError: 'No se pudo cargar esta sección.',
    present: 'Actualidad',
  },
  language: {
    /** Texto visible del botón: el idioma al que se cambiará. */
    switchTo: 'EN',
    switchLabel: 'Cambiar idioma a inglés',
  },
  theme: {
    toDark: 'Activar tema oscuro',
    toLight: 'Activar tema claro',
  },
  nav: {
    main: 'Principal',
    mobile: 'Menú móvil',
    openMenu: 'Abrir menú',
    menuDescription: 'Navegación entre las secciones',
    sections: {
      hero: 'Inicio',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
    },
  },
  experience: {
    title: 'Experiencia',
    timelineLabel: 'Trayectoria laboral',
    technologiesAt: (company: string) => `Tecnologías en ${company}`,
  },
  education: {
    title: 'Educación',
    degreesLabel: 'Formación académica',
    certifications: 'Certificaciones',
    inProgress: 'En curso',
    viewCredential: 'Ver credencial',
  },
  skills: {
    title: 'Habilidades',
    skillsIn: (category: string) => `Habilidades de ${category}`,
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Móvil',
      database: 'Bases de datos',
      infrastructure: 'Infraestructura',
      analytics: 'Análisis de datos',
    } satisfies Record<SkillCategory, string>,
  },
  notFound: {
    title: 'Página no encontrada',
    backHome: 'Volver al inicio',
  },
}

export type Dictionary = typeof es
