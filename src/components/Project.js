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

const useStyles = makeStyles(theme => ({
  image: { height: 200 },
  detail: { marginTop: 8 },
}))

const Project = props => {
  const { project } = props
  const classes = useStyles()

  const handleOpenGithub = () => {
    window.open(project.github, '_blank')
  }
  const handleOpenPublic = () => {
    window.open(project.public, '_blank')
  }

  return (
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
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    member: PropTypes.oneOf(['個人', 'チーム']),
    detail: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    public: PropTypes.string.isRequired,
  }).isRequired,
}

export default Project
