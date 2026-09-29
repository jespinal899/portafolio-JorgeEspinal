import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionProps extends ComponentProps<'section'> {
  title?: string
}

export function Section({ title, className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'mx-auto w-full max-w-5xl scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 lg:py-20',
        className,
      )}
      {...props}
    >
      {title && (
        <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight sm:mb-8 sm:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
