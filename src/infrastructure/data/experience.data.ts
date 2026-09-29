import type { Experience } from '@/core/entities'
import type { Translatable } from '@/infrastructure/i18n/localize'

/**
 * Fechas en formato ISO 8601 (`YYYY-MM-DD`). Sin `endDate` = puesto actual.
 * Cuando solo se conoce el mes, se usa el día 01.
 */
export const experienceData: Translatable<readonly Experience[]> = [
  {
    id: 'finos-textiles-sysadmin',
    company: 'Finos Textiles de Centroamérica',
    role: { es: 'Administrador de Sistemas', en: 'Systems Administrator' },
    startDate: '2025-07-17',
    description: {
      es:
        'Soporte IT y administración de servidores Windows Server y Ubuntu Server. ' +
        'Administración de bases de datos SQL Server y elaboración de reportes con Power BI. ' +
        'Participación en la automatización de procesos mediante el desarrollo de aplicaciones web y móviles.',
      en:
        'IT support and administration of Windows Server and Ubuntu Server environments. ' +
        'SQL Server database administration and Power BI reporting. ' +
        'Contributing to process automation by building web and mobile applications.',
    },
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
    role: { es: 'Auxiliar Contable', en: 'Accounting Assistant' },
    startDate: '2022-11-01',
    endDate: '2024-04-01',
    description: {
      es:
        'Registro, análisis y validación de transacciones y facturas en SAP. ' +
        'Apoyo en cuentas por pagar y por cobrar, y en auditorías internas mediante la preparación ' +
        'y custodia de documentación financiera, asegurando el cumplimiento de la normativa contable y tributaria.',
      en:
        'Recorded, analyzed and validated transactions and invoices in SAP. ' +
        'Supported accounts payable and receivable, as well as internal audits by preparing and ' +
        'safeguarding financial records, ensuring compliance with accounting and tax regulations.',
    },
    technologies: [
      'SAP',
      { es: 'Cuentas por pagar', en: 'Accounts payable' },
      { es: 'Cuentas por cobrar', en: 'Accounts receivable' },
      { es: 'Auditoría interna', en: 'Internal audit' },
    ],
  },
]
