import type { Dictionary } from './es'

export const en: Dictionary = {
  meta: {
    title: 'Jorge Espinal · Portfolio',
    description: 'Portfolio of Jorge Espinal: Systems Administrator and Computer Engineering student.',
  },
  common: {
    loadError: 'This section could not be loaded.',
    present: 'Present',
  },
  language: {
    switchTo: 'ES',
    switchLabel: 'Switch language to Spanish',
  },
  nav: {
    main: 'Main',
    mobile: 'Mobile menu',
    openMenu: 'Open menu',
    menuDescription: 'Navigate between sections',
    sections: {
      hero: 'Home',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
    },
  },
  experience: {
    title: 'Experience',
    timelineLabel: 'Career timeline',
    technologiesAt: (company) => `Technologies at ${company}`,
  },
  education: {
    title: 'Education',
    degreesLabel: 'Academic background',
    certifications: 'Certifications',
    inProgress: 'In progress',
    viewCredential: 'View credential',
  },
  skills: {
    title: 'Skills',
    skillsIn: (category) => `${category} skills`,
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      database: 'Databases',
      infrastructure: 'Infrastructure',
      analytics: 'Data analytics',
    },
  },
  notFound: {
    title: 'Page not found',
    backHome: 'Back to home',
  },
}
