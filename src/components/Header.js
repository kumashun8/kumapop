import React from 'react'
import PropTypes from 'prop-types'
import {
  Slide,
  useScrollTrigger,
  CssBaseline,
  AppBar,
  Typography,
  makeStyles,
} from '@material-ui/core'

const HideOnScroll = props => {
  const { children } = props

  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: { padding: 16 },
}))

const Header = props => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Typography variant="h2">H.O</Typography>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export default Header
