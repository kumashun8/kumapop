import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { BarChart, Bar, Cell } from 'recharts'
import { Typography, useMediaQuery } from '@material-ui/core'
import { useInterval } from 'lib/hook'
import Slider from 'components/Slider'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
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

const newData = isModile =>
  new Array(isModile ? 6 : 10)
    .fill(0)
    .map(i => ({ id: i, score: getRandomInt(8) }))

export default () => {
  const classes = useStyles()
  const isModile = useMediaQuery('(max-width:600px)')
  const [data, setData] = useState(newData(isModile))
  const [span, setSpan] = useState(900)

  useInterval(() => setData(newData(isModile)), span)

  const handleChangeSpeed = (event, newVaule) => {
    setSpan(2000 - newVaule)
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h1">Hayato{isModile ? '\n' : ' '}Okuma</Typography>
        <Slider
          max={1800}
          defaultValue={900}
          step={10}
          onChange={handleChangeSpeed}
        />
        <Typography>
          映画と洋服がゆる〜く好きな20卒エンジニアです
          <span role="img" aria-label="kuma">
            🐻
          </span>{' '}
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
                fill={entry.score === 0 ? '#bcaaa4' : '#cfd8dc'}
              />
            ))}
          </Bar>
        </BarChart>
      )}
    </div>
  )
}
