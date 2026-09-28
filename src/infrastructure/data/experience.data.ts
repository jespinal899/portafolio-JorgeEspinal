import type { Experience } from '@/core/entities'

/** Fechas en formato ISO 8601 (`YYYY-MM-DD`). Sin `endDate` = puesto actual. */
export const experienceData: readonly Experience[] = [
  {
    id: 'finos-textiles-sysadmin',
    company: 'Finos Textiles de Centroamérica',
    role: 'Administrador de Sistemas',
    startDate: '2025-07-17',
    description:
      'Soporte IT y administración de servidores Windows Server y Ubuntu Server. ' +
      'Administración de bases de datos SQL Server y elaboración de reportes con Power BI. ' +
      'Participación en la automatización de procesos mediante el desarrollo de aplicaciones web y móviles.',
    technologies: [
      'Windows Server',
      'Ubuntu Server',
      'SQL Server',
      'Power BI',
      'React',
      'NestJS',
      'Node.js',
      'Flutter',
    ],
  },
]
