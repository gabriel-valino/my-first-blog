import Link from 'next/link'

import { slug } from 'github-slugger'
import { badgeVariants } from './ui/badge'

export interface TagProps {
  tag: string
  current?: boolean
  count?: number
}

export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'rounded-md no-underline',
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  )
}
