import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import { useMediaQuery } from '@material-ui/core'
import theme from 'lib/theme'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'sections/About'

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero {...{ isMobile }} />
      <About {...{ isMobile }} />
    </ThemeProvider>
  )
}

export default App
