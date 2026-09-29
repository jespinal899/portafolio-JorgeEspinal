import { AsyncContent } from '@/shared/components/common/async-content'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useI18n } from '@/shared/i18n/use-i18n'
import { useEducation } from '../hooks/use-education'
import { CertificationCard } from './certification-card'
import { EducationCard } from './education-card'

export function EducationSection() {
  const { t } = useI18n()
  const state = useEducation()

  return (
    <Section id={SECTION_IDS.education} title={t.education.title}>
      <AsyncContent state={state} fallback={<Skeleton className="h-40 w-full" />}>
        {({ degrees, certifications }) => (
          <div className="flex flex-col gap-10">
            <ul aria-label={t.education.degreesLabel} className="grid gap-4 md:grid-cols-2">
              {degrees.map((education) => (
                <li key={education.id}>
                  <EducationCard education={education} />
                </li>
              ))}
            </ul>

            {certifications.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {t.education.certifications}
                </h3>
                <ul
                  aria-label={t.education.certifications}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {certifications.map((certification) => (
                    <li key={certification.id}>
                      <CertificationCard certification={certification} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </AsyncContent>
    </Section>
  )
}
