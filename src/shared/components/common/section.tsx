import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionProps extends ComponentProps<'section'> {
  title?: string
}

export function Section({ title, className, children, ...props }: SectionProps) {
  return (
    <section className={cn('mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-16', className)} {...props}>
      {title && <h2 className="mb-8 font-heading text-3xl font-semibold tracking-tight">{title}</h2>}
      {children}
    </section>
  )
}
