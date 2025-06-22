import { ContactCard } from '@/components/contact-card'
import { Call02Icon, Mail02Icon } from '@hugeicons/core-free-icons'
import { GithubIcon } from '../components/github-icon'
import { HugeiconsIcon } from '@hugeicons/react'
import { LinkedinIcon } from '@/components/linkedin-icon'

export function Contact() {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto px-20 py-8">
      <h1 className="text-3xl text-center pb-15">Contato</h1>
      <div className="flex flex-col gap-10 lg:flex-row items-center  justify-between text-primary dark:text-foreground">
        <ContactCard
          name="E-mail"
          icon={<HugeiconsIcon icon={Mail02Icon} size={36} />}
          contact="contato.nicolycunha@gmail.com"
          link="mailto:contato.nicolycunha@gmail.com"
        />
        <ContactCard
          name="Telefone"
          icon={<HugeiconsIcon icon={Call02Icon} size={36} />}
          contact="(11) 94665-5558"
          link="https://wa.me/5511946655558?text=Olá%20Nicoly%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
        />
        <ContactCard
          name="LinkedIn"
          icon={<LinkedinIcon />}
          contact="@nicolycunha"
          link="https://www.linkedin.com/in/nicolycunha/"
        />
        <ContactCard
          name="GitHub"
          icon={<GithubIcon />}
          contact="@nicolycunha"
          link="https://github.com/nicolycunha"
        />
      </div>
    </div>
  )
}
