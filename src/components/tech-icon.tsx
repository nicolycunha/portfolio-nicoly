interface TechIconProps {
  icon: string
  name: string
}

export function TechIcon({ icon, name }: TechIconProps) {
  return (
    <div className="group flex flex-col items-center transition-all duration-300">
      <i
        className={`devicon-${icon}-plain text-5xl md:text-6xl text-primary group-hover:translate-y-[-6px] opacity-60 group-hover:opacity-100 group-hover:cursor-pointer transition-all duration-300`}
      />

      <span className="text-sm text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
        {name}
      </span>
    </div>
  )
}
