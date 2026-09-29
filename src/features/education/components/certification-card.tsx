import { AwardIcon, ExternalLinkIcon } from 'lucide-react'
import type { Certification } from '@/core/entities'
import { Button } from '@/shared/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useDateFormat } from '@/shared/i18n/use-date-format'
import { useI18n } from '@/shared/i18n/use-i18n'

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { t } = useI18n()
  const formatDate = useDateFormat()
  const details = [
    certification.issuer,
    certification.issueDate && formatDate.monthYear(certification.issueDate),
  ].filter(Boolean)

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[0.9375rem] sm:text-base">
          <AwardIcon aria-hidden="true" className="size-4 shrink-0 text-primary" />
          <h4>{certification.name}</h4>
        </CardTitle>
        {details.length > 0 && (
          <CardDescription className="text-sm">{details.join(' · ')}</CardDescription>
        )}
        {certification.credentialUrl && (
          <Button variant="link" size="sm" className="h-auto justify-start px-0" asChild>
            <a href={certification.credentialUrl} target="_blank" rel="noreferrer">
              {t.education.viewCredential}
              <ExternalLinkIcon aria-hidden="true" />
            </a>
          </Button>
        )}
      </CardHeader>
    </Card>
  )
}
