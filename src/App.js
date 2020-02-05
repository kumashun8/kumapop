import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import theme from 'lib/theme'
import Header from 'components/Header'
import Hero from 'components/Hero'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
    </ThemeProvider>
  )
}

App.propTypes = {
  name: PropTypes.string,
}

export default App
