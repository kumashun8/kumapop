import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { BarChart, Bar, Cell } from 'recharts'
import { Typography } from '@material-ui/core'
import { useInterval } from 'lib/hook'
import Slider from 'components/Slider'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    position: 'absolute',
    zIndex: 5,
    top: '35vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      top: '30vh',
    },
  },
}))

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const newData = isMobile =>
  new Array(isMobile ? 6 : 8)
    .fill(0)
    .map(i => ({ id: i, score: getRandomInt(8) }))

const Hero = props => {
  const { isMobile } = props
  const classes = useStyles()
  const [data, setData] = useState(newData(isMobile))
  const [span, setSpan] = useState(900)

  useInterval(() => setData(newData(isMobile)), span)

  const handleChangeSpeed = (event, newVaule) => {
    setSpan(2000 - newVaule)
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h1">Hayato{isMobile ? '\n' : ' '}Okuma</Typography>
        <Slider
          max={1800}
          defaultValue={900}
          step={10}
          onChange={handleChangeSpeed}
        />
        <Typography>
          こつこつハック
          <span role="img" aria-label="kuma">
            👨‍💻
          </span>
          ゆるっとファッション
          <span role="img" aria-label="kuma">
            🎩
          </span>
        </Typography>
      </div>
      {span < 2000 && (
        <BarChart
          height={800}
          width={window.outerWidth}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          data={data}
          barGap={0}
          barSize={1200}
        >
          <Bar dataKey="score" animationDuration={span}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.score === 0 ? '#bcaaa4' : '#e0e0e0'}
              />
            ))}
          </Bar>
        </BarChart>
      )}
    </div>
  )
}

Hero.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Hero
