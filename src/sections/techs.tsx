import { TechIcon } from '@/components/tech-icon'
import techs from '../data/techs.json'

export function Technologies() {
  return (
    <div id="techs" className="max-w-screen-xl mx-auto px-20 py-8">
      <h1 className="text-3xl text-center pb-15">Tecnologias</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
        {techs.map((tech, index) => (
          <TechIcon key={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  )
}
