import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel'
import { ProjectCard } from '../components/project-card'
import projects from '@/data/projects.json'

export function Projects() {
  return (
    <div className="relative py-10 overflow-x-hidden" id="projects">
      <h1 className="text-3xl text-center pb-10">Projetos</h1>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full max-w-[300px] md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full  lg:basis-1/2  xl:basis-1/3"
            >
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
