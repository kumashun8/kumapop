import React, { Fragment, Suspense } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { useMediaQuery, CircularProgress } from '@material-ui/core'
import theme from 'lib/theme'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'sections/About'
import { BrowserRouter, Route } from 'react-router-dom'
import Projects from 'sections/Projects'
import WritingContainer from 'container/WritingContainer'
import Footer from 'components/Footer'
import { ClientContextProvider } from 'react-fetching-library'
import { Client } from 'api/Client'

const Main = () => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <ClientContextProvider client={Client}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<CircularProgress style={{ margin: '50%' }} />}>
          <Fragment>
            <Header {...{ isMobile }} />
            <Hero {...{ isMobile }} />
            <About {...{ isMobile }} />
            <Projects {...{ isMobile }} />
            <WritingContainer />
            <Footer {...{ isMobile }} />
          </Fragment>
        </Suspense>
      </ThemeProvider>
    </ClientContextProvider>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  )
}

export default App
