import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import theme from 'lib/theme'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'sections/About'
import { BrowserRouter } from 'react-router-dom'
import Projects from 'sections/Projects'
import Writing from 'sections/Writing'

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header {...{ isMobile }} />
        <Hero {...{ isMobile }} />
        <About {...{ isMobile }} />
        <Projects {...{ isMobile }} />
        <Writing {...{ isMobile }} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
