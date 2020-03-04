import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Container from 'components/Container'
import { Typography, Grid } from '@material-ui/core'
import Headline from 'components/Headline'
import myImage from 'images/me.jpg'
import { Fade } from 'react-reveal'

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    boxShadow: `8px 8px ${theme.palette.secondary.dark}`,
  },
}))

const About = props => {
  const { isMobile } = props
  const classes = useStyles()
  return (
    <Container>
      <div id="about" />
      <Headline>About</Headline>
      <Grid
        container
        direction={isMobile ? 'column' : 'row'}
        justify="space-between"
        alignItems="center"
        alignContent="center"
        spacing={5}
      >
        <Grid item xs={isMobile ? 12 : 8}>
          <Fade bottom delay={isMobile ? 1000 : 2000}>
            <Typography>
              大隈 隼 (おおくま はやと) 平成9年生まれの福岡出身。{'\n'}
              大学3年の時にチームでアプリ開発をしたことをきっかけにWeb業界に興味を持ち、2020年4月から東京でWebエンジニアとして働くことになりました。
              {'\n'}
              {'\n'}
              趣味は映画鑑賞で、休日は専らNetflixを嗜んでいます。洋服やスニーカーなどファッションも大好きで、ゆるすぎず品のある着こなしに憧れます。
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={isMobile ? 10 : 4}>
          <Fade right delay={isMobile ? 1500 : 3000}>
            <img src={myImage} className={classes.image} alt="myImage" />
          </Fade>
        </Grid>
      </Grid>
    </Container>
  )
}

About.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default About
