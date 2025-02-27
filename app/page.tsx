import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn, sortPosts } from '@/lib/utils'
import Link from 'next/link'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import { Icons } from '@/components/icons'

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:mt-10 md:pb-12 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-balance text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
            Hello, I&apos;m Gabriel
          </h1>
          <p className="mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl">
            Welcome to my blog template. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-fit',
              )}
            >
              GitHub &nbsp;
              <Icons.gitHub className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="container mt-60 flex max-w-4xl flex-col space-y-6 py-6 lg:py-10">
        <h2 className="text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
