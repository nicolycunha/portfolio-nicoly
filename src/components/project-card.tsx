import { CursorInWindowIcon, SourceCodeIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubUrl: string
  year: number
  techs: string[]
  liveUrl: string
}

export function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  year,
  techs,
  liveUrl
}: ProjectCardProps) {
  function getImageUrl(fileName: string) {
    return new URL(`/src/assets/images/${fileName}`, import.meta.url).href
  }

  return (
    <div className="flex flex-col rounded-xl shadow-lg bg-accent p-6 space-y-4 min-h-[500px] opacity-90 hover:opacity-100 hover:scale-101 transition duration-300 ease-in-out">
      <img
        onClick={() => window.open(liveUrl, '_blank')}
        src={getImageUrl(image)}
        alt={`Preview do projeto ${title}`}
        className="rounded-lg hover:cursor-pointer"
      />

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{year}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {techs.map(tech => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-ring text-white rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-2 justify-between mt-auto">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex gap-2 hover:text-accent-foreground transition-colors"
        >
          <HugeiconsIcon icon={SourceCodeIcon} />
          Repositório
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary flex gap-2 hover:text-accent-foreground transition-colors"
          >
            <HugeiconsIcon icon={CursorInWindowIcon} />
            Ver projeto
          </a>
        )}
      </div>
    </div>
  )
}
