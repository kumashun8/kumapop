import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: { padding: 8 },
  tags: { marginTop: 8 },
}))

const Article = props => {
  const { article } = props
  const classes = useStyles()

  const handleOpenArticle = () => {
    window.open(article.url, '_blank')
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpenArticle}>
        <CardContent>
          <Typography variant="h4">{article.title}</Typography>
          <Typography variant="caption">{article.createdAt}</Typography>
          <Typography variant="body2" className={classes.tags}>
            {article.tags.join(' ')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

Article.defaultProps = {
  article: {
    title: 'hogehoge',
    createdAt: '2020-02-06',
    url: 'https://github.com/8810KMKM/triole',
    tags: ['Rails', 'React'],
  },
}

export default Article
