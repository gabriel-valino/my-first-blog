import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Information about me',
}

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col items-center gap-8">
        <div className="flex min-w-48 max-w-48 flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage
              src="https://github.com/gabriel-valino.png"
              alt={siteConfig.author}
            />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
          <h2 className="break-words text-center text-2xl font-bold">
            {siteConfig.author}
          </h2>
          <p className="break-words text-center text-muted-foreground">
            Software Developer
          </p>
        </div>

        <p className="py-4 text-lg text-muted-foreground">
          Desenvolvedor Front-End focado em React, Next.js e Tailwind CSS. Há 1
          ano e meio venho construindo aplicações modernas por meio de projetos
          pessoais, cursos intensivos e desafios práticos. Optei por uma
          formação alternativa, priorizando o aprendizado técnico contínuo e
          voltado ao mercado. Busco minha primeira oportunidade profissional
          para aplicar meus conhecimentos em um ambiente de produção.
        </p>
      </div>
    </div>
  )
}
