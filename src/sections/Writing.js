import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid } from '@material-ui/core'
import Headline from 'components/Headline'
import SmallCard from 'components/SmallCard'

const useStyles = makeStyles(theme => ({
  articles: { marginTop: 16 },
}))

const Writing = props => {
  const { isMobile } = props
  const classes = useStyles()

  return (
    <Container>
      <div id="writing" />
      <Headline>Writing</Headline>
      <Typography>
        Qiitaの投稿記事一覧です。{'\n'}
        そのうちリッチな内容の記事描きたいなぁ...。
      </Typography>
      <Grid
        container
        className={classes.articles}
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        alignItems="center"
        alignContent="center"
        spacing={5}
      >
        {new Array(2).fill(1).map((item, i) => (
          <Grid item key={i} xs={12}>
            <SmallCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Writing.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Writing
