import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid, useMediaQuery } from '@material-ui/core'
import Headline from 'components/Headline'
import Article from 'components/Article'
import { Fade } from 'react-reveal'

const useStyles = makeStyles(theme => ({
  articles: { marginTop: 16 },
}))

const Writing = props => {
  const { articles, error } = props
  const isMobile = useMediaQuery('(max-width:600px)')
  const classes = useStyles()

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
      {error && <span>データの取得に失敗しました。</span>}
      {articles && (
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
              <Article {...{ i, article, isMobile }} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

Writing.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
}

export default Writing
