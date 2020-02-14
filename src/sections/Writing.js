import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid } from '@material-ui/core'
import Headline from 'components/Headline'
import Article from 'components/Article'
import { fetchQiitaArticles } from 'lib/api'
import { Fade } from 'react-reveal'

const useStyles = makeStyles(theme => ({
  articles: { marginTop: 16 },
}))

const Writing = props => {
  const { isMobile } = props
  const classes = useStyles()
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleGetArticles = response => {
      setArticles(response)
      setIsLoading(false)
    }
    fetchQiitaArticles({ handleGetArticles })
  }, [isMobile])

  return (
    <Container>
      <div id="writing" />
      <Headline>Writing</Headline>
      <Fade bottom delay={1000}>
        <Typography>
          Qiitaの投稿記事一覧です。{'\n'}
          そのうちリッチな内容の記事描きたいなぁ...。
        </Typography>
      </Fade>
      {!isLoading && (
        <Grid
          container
          className={classes.articles}
          direction={isMobile ? 'column' : 'row'}
          justify="space-between"
          alignItems="center"
          alignContent="center"
          spacing={5}
        >
          {articles.map((article, i) => (
            <Grid item key={i} xs={12}>
              <Article {...{ i, article }} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

Writing.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Writing
