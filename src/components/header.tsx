import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex h-16 justify-between items-center py-2 px-8">
        <p className="font-name font-bold text-2xl text-primary">
          nicolycunha<span className="font-name text-foreground">.dev</span>
        </p>

        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-15">
            <li className="hover:border-b-amber-900">
              <a href="#" className="">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#">Experiências</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>

        <ThemeToggle />
      </div>
    </div>
  )
}
