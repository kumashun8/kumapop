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
import { Zoom } from 'react-reveal'

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
  const { i, article, isMobile } = props
  const classes = useStyles()

  const handleOpenArticle = () => {
    window.open(article.url, '_blank')
  }

  return (
    // <Zoom delay={i < 2 && !isMobile ? 2000 : 1000}>
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
    // </Zoom>
  )
}

Article.propTypes = {
  i: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
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
    url: 'https://qiita.com/kumamuk/items/3f9a54c18b2845dc7e73',
    tags: [{ name: 'Rails' }, { name: 'React' }],
  },
}

export default Article
