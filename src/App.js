import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import theme from 'lib/theme'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'sections/About'
import { BrowserRouter, Route } from 'react-router-dom'
import Projects from 'sections/Projects'
import Writing from 'sections/Writing'
import Footer from 'components/Footer'
import client from 'lib/client'
import { ClientContextProvider } from 'react-fetching-library'

const Main = () => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <ThemeProvider theme={theme}>
      <Header {...{ isMobile }} />
      <Hero {...{ isMobile }} />
      <About {...{ isMobile }} />
      <Projects {...{ isMobile }} />
      <Writing {...{ isMobile }} />
      <Footer {...{ isMobile }} />
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <ClientContextProvider client={client}>
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    </ClientContextProvider>
  )
}

export default App
