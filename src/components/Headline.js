import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Fade } from 'react-reveal'

const Headline = props => {
  const { children } = props
  return (
    <Fade left delay={500}>
      <Typography variant="subtitle1">{children}</Typography>
    </Fade>
  )
}

Headline.propTypes = {
  children: PropTypes.string,
}

export default Headline
