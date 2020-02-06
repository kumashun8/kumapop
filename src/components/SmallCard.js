import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Chip,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: { padding: 8 },
  tags: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 16,
    flexWrap: 'wrap',
    '& > *': {
      margin: '0 8px 8px 0',
    },
  },
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
          <Typography variant="h5">{article.title}</Typography>
          <Typography variant="caption">
            {article.created_at.slice(0, 10)}
          </Typography>
          <div className={classes.tags}>
            {article.tags.map((t, i) => (
              <Chip key={i} label={t.name} />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

Article.defaultProps = {
  article: {
    title: 'hogehoge',
    created_at: '2020-02-06',
    url: 'https://github.com/8810KMKM/triole',
    tags: ['Rails', 'React'],
  },
}

export default Article
