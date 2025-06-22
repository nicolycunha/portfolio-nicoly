import { ReactNode } from 'react'

export interface ContactCardProps {
  name: string
  icon: ReactNode
  contact: string
  link: string
}

export function ContactCard({ name, icon, contact, link }: ContactCardProps) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="rounded-2xl bg-accent h-18 w-18 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold">{name}</p>
          <p className="text-muted-foreground">{contact}</p>
        </div>
      </div>
    </a>
  )
}
