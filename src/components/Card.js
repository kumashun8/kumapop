import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  image: { height: 200 },
  detail: { marginTop: 8 },
}))

const MyCard = props => {
  const { project } = props
  const classes = useStyles()
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
        <Button>Github</Button>
        <Button>link</Button>
      </CardActions>
    </Card>
  )
}

MyCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    member: PropTypes.oneOf(['個人', 'チーム']),
    detail: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default MyCard
