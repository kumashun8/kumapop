import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    color: '030303',
    padding: '40px 40px 64px 40px',
    margin: '200px auto',
    width: 1000,
    [theme.breakpoints.down('md')]: {
      width: '90vw',
      padding: 16,
    },
  },
}))

export default props => {
  const classes = useStyles()
  return <Container className={classes.container}>{props.children}</Container>
}
