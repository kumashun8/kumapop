import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { BarChart, Bar, Cell } from 'recharts'
import { Typography } from '@material-ui/core'

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const newData = () =>
  new Array(10).fill(0).map(i => ({ id: i, score: getRandomInt(8) }))

const useStyles = makeStyles(theme => ({
  root: {
    height: '80vh',
    display: 'flex',
    position: 'relative',
  },
  title: {
    position: 'absolute',
    zIndex: 5,
    top: '45vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

const Hero = () => {
  const classes = useStyles()
  const [data, setData] = useState(newData())
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const startMove = () => setInterval(() => setData(newData()), 1000)
    startMove()
  }, [isScrolled])

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h1">Hayato Okuma</Typography>
        <Typography>ポートフォリオです。よろしく。</Typography>
      </div>

      <BarChart
        height={800}
        width={window.outerWidth}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        data={data}
        barGap={0}
        barSize={1200}
      >
        <Bar dataKey="score" animationDuration={1000}>
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.score === 0 ? '#9ea7aa' : '#cfd8dc'}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  )
}

Hero.propTypes = {
  name: PropTypes.string,
}

Hero.defaultProps = {
  name: 'hoge',
}

export default Hero
