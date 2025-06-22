import { BubbleChatIcon, Download04Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import meImage from '../assets/images/me.svg'
import { Button } from '../components/ui/button'

export function Home() {
  return (
    <div id="#about" className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] justify-between gap-10 py-10 md:py-20 px-8 lg:px-20">
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start lg:pt-20 gap-8">
          <h1 className="text-4xl md:text-5xl">
            Oi, sou a <span className="font-name">Nicoly Cunha</span>
          </h1>

          <p className="text-lg max-w-prose">
            Sou{' '}
            <strong className="text-primary">desenvolvedora full stack</strong>,
            especializada em desenvolvimento web responsivo, além de ser
            apaixonada por criar boas experiências ao usuário.
          </p>

          <div className="flex flex-col md:flex-row items-center  justify-center mt-6 gap-6">
            <Button
              asChild
              size="lg"
              className="flex items-center gap-2 px-8 py-3 hover:cursor-pointer"
            >
              <a href="mailto:contato.nicolycunha@gmail.com">
                <HugeiconsIcon icon={BubbleChatIcon} className="w-6 h-6" />
                Vamos conversar
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex items-center gap-2 px-8 py-3 hover:cursor-pointer"
            >
              <a
                href="../../public/curriculo-full-stack_nicoly-cunha.pdf"
                download
              >
                <HugeiconsIcon icon={Download04Icon} className="w-6 h-6" />
                Baixe meu currículo
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex items-start justify-center">
          <img
            className="rounded-4xl max-w-[300px] md:max-w-full"
            src={meImage}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
