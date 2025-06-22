import { Header } from './sections/header'
import { Home } from './sections/home'
import { Projects } from './sections/projects'
import { Technologies } from './sections/techs'
import { ThemeProvider } from './components/theme/theme-provider'
import { Contact } from './sections/contact'
import { Footer } from './sections/footer'

export function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
