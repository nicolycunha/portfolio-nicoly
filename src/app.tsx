import { Header } from './components/header'
import { Home } from './components/home'
import { Projects } from './components/projects'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Projects />
    </ThemeProvider>
  )
}
