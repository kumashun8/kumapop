import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid } from '@material-ui/core'
import Headline from 'components/Headline'
import Card from 'components/Card'
import projects from 'data/projects'

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
      <Typography>
        公表可能なレベルの成果物はこんな感じです。{'\n'}メインはRails, React,
        Gatsbyです。
      </Typography>
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
            <Card project={project} />
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
