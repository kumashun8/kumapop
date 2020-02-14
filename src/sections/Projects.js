import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid } from '@material-ui/core'
import Headline from 'components/Headline'
import Project from 'components/Project'
import projects from 'data/projects'
import { Fade } from 'react-reveal'

const useStyles = makeStyles(theme => ({
  projects: { marginTop: 16 },
}))

const Projects = props => {
  const { isMobile } = props
  const classes = useStyles()
  return (
    <Container>
      <div id="projects" />
      <Headline>Projects</Headline>
      <Fade bottom delay={2000}>
        <Typography>
          公表可能なレベルの成果物はこんな感じです。{'\n'}メインはRails, React,
          Gatsbyを扱っています。
        </Typography>
      </Fade>
      <Grid
        container
        className={classes.projects}
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        alignItems="center"
        alignContent="center"
        spacing={5}
      >
        {projects.map((project, i) => (
          <Grid item key={i} xs={isMobile ? 12 : 6}>
            <Project {...{ i, project, isMobile }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Projects.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Projects
