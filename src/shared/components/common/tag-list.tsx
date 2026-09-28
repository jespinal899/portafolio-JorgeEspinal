import { Badge } from '@/shared/components/ui/badge'

interface TagListProps {
  items: readonly string[]
  label: string
}

export function TagList({ items, label }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Badge variant="secondary">{item}</Badge>
        </li>
      ))}
    </ul>
  )
}
