import React from 'react'
import PropTypes from 'prop-types'
import {
  Slide,
  useScrollTrigger,
  AppBar,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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

const sections = [
  { id: '#about', title: 'About' },
  { id: '#projects', title: 'Projects' },
  { id: '#writing', title: 'Writing' },
]

const useStyles = makeStyles(theme => ({
  root: { padding: 16 },
  link: { textDecoration: 'none' },
  linkWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Header = props => {
  const { isMobile } = props
  const classes = useStyles()

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={3}>
              <AnchorLink href="#top" className={classes.link}>
                <Typography variant="h2">H.O</Typography>
              </AnchorLink>
              {/* <HashLink smooth to="/#" className={classes.link}>
                <Typography variant="h2">H.O</Typography>
              </HashLink> */}
            </Grid>
            <Grid item xs={9}>
              <Grid
                container
                justify={isMobile ? 'space-around' : 'flex-end'}
                alignItems="center"
                spacing={2}
              >
                {sections.map((s, i) => (
                  <Grid item xs={2} key={i}>
                    <div className={classes.linkWrapper}>
                      <AnchorLink href={s.id} className={classes.link}>
                        <Typography variant="h3">{s.title}</Typography>
                      </AnchorLink>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Header
