import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid } from '@material-ui/core'
import Headline from 'components/Headline'

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    boxShadow: `8px 8px ${theme.palette.secondary.dark}`,
  },
}))

const Projects = props => {
  const { isMobile } = props
  const classes = useStyles()
  return (
    <Container>
      <div id="projects" />
      <Headline>Projects</Headline>
      <Grid
        container
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        alignItems="center"
        alignContent="center"
        spacing={5}
      ></Grid>
    </Container>
  )
}

Projects.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Projects
