import type { Dictionary } from './es'

export const en: Dictionary = {
  meta: {
    title: 'Jorge Espinal · Portfolio',
    description:
      'Jorge Espinal: Systems Administrator, IT Support and Software Development in Honduras.',
  },
  common: {
    loadError: 'This section could not be loaded.',
    present: 'Present',
  },
  language: {
    switchTo: 'ES',
    switchLabel: 'Switch language to Spanish',
  },
  theme: {
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
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
      contact: 'Contact',
    },
  },
  hero: {
    rolesLabel: 'Professional roles',
    contactCta: 'Get in touch',
  },
  contact: {
    title: 'Contact',
    description:
      'Have a job opportunity or a project in mind? Let’s connect, I’ll get back to you as soon as possible.',
    linksLabel: 'Contact links',
    opensInNewTab: '(opens in a new tab)',
  },
  footer: {
    copyright: (year, name) => `© ${year} ${name}. All rights reserved.`,
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
