import React from 'react'
import PropTypes from 'prop-types'
import { GitHub, Launch } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Tooltip,
} from '@material-ui/core'
import { Zoom } from 'react-reveal'

const useStyles = makeStyles(theme => ({
  image: { height: 200 },
  detail: { marginTop: 8 },
}))

const Project = props => {
  const { i, project, isMobile } = props
  const classes = useStyles()

  const delay = i => {
    switch (i) {
      case 0:
        return 2500
      case 1:
        return isMobile ? 0 : 2500
      default:
        return 0
    }
  }

  const handleOpenGithub = () => {
    window.open(project.github, '_blank')
  }
  const handleOpenPublic = () => {
    window.open(project.public, '_blank')
  }

  return (
    <Zoom delay={delay(i)} duration={2000}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={project.image}
            title={project.name}
          />
          <CardContent>
            <Typography variant="h4">{project.name}</Typography>
            <Typography variant="caption">{`${project.member} / ${project.year}`}</Typography>
            <Typography variant="body2" className={classes.detail}>
              {project.detail}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Tooltip placement="bottom" title="Githubリポジトリ">
            <IconButton onClick={handleOpenGithub}>
              <GitHub fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="公開中のサイト">
            <IconButton onClick={handleOpenPublic}>
              <Launch fontSize="small" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Zoom>
  )
}

Project.propTypes = {
  i: PropTypes.number.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    member: PropTypes.oneOf(['個人', 'チーム']),
    detail: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    public: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default Project
