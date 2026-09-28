import type { Experience } from '@/core/entities'

/**
 * Fechas en formato ISO 8601 (`YYYY-MM-DD`). Sin `endDate` = puesto actual.
 * Cuando solo se conoce el mes, se usa el día 01.
 */
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
  {
    id: 'grupo-elcatex-auxiliar-contable',
    company: 'Grupo Elcatex',
    role: 'Auxiliar Contable',
    startDate: '2022-11-01',
    endDate: '2024-04-01',
    description:
      'Registro, análisis y validación de transacciones y facturas en SAP. ' +
      'Apoyo en cuentas por pagar y por cobrar, y en auditorías internas mediante la preparación ' +
      'y custodia de documentación financiera, asegurando el cumplimiento de la normativa contable y tributaria.',
    technologies: ['SAP', 'Cuentas por pagar', 'Cuentas por cobrar', 'Auditoría interna'],
  },
]
