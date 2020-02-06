import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/styles'
import { BarChart, Bar, Cell } from 'recharts'
import { Typography, Slider } from '@material-ui/core'
import { useInterval } from 'lib/hook'

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
  },
  slider: {
    width: '50vw',
    height: '16px',
    '& thumb': {
      height: 24,
    },
  },
}))

const PrettoSlider = withStyles({
  root: {
    color: '#bcaaa4',
    height: 8,
    width: '50vw',
    margin: '8px 0',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fafafa',
    border: '4px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const newData = () =>
  new Array(10).fill(0).map(i => ({ id: i, score: getRandomInt(8) }))

export default () => {
  const classes = useStyles()
  const [data, setData] = useState(newData())
  const [span, setSpan] = useState(900)

  useInterval(() => setData(newData), span)

  const handleChangeSpeed = (event, newVaule) => {
    setSpan(2000 - newVaule)
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h1">Hayato Okuma</Typography>
        <PrettoSlider
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
          {console.log(span)}
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
