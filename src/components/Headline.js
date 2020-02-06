import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Headline = props => {
  const { children } = props
  return <Typography variant="subtitle1">{children}</Typography>
}

Headline.propTypes = {
  children: PropTypes.string,
}

export default Headline
