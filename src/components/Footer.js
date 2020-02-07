import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { GitHub, Facebook, MailOutline } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    height: 240,
    padding: 16,
    backgroundColor: theme.palette.primary.dark,
  },
  wrapper: { height: '100%' },
  name: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 16,
    },
  },
  icon: { color: '#e0e0e0' },
}))

const Footer = props => {
  const { isMobile } = props
  const iconSize = isMobile ? 'small' : 'default'
  const classes = useStyles()

  const accounts = [
    {
      Icon: <GitHub fontSize={iconSize} />,
      name: '8810KMKM',
      url: 'https://github.com/8810KMKM',
    },
    {
      Icon: <Facebook fontSize={iconSize} />,
      name: 'ohayato9',
      url: 'https://www.facebook.com/ohayato9',
    },
    {
      Icon: <MailOutline fontSize={iconSize} />,
      name: 'tiwo3wa4@gmail.com',
      url: 'mailto:tiwo3wa4@gmail.com',
    },
  ]

  const handleOpenAccount = account => {
    if (account.url.match(/mailto/)) {
      window.location.href = account.url
    } else {
      window.open(account.url, '_blanck')
    }
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        spacing={2}
        className={classes.wrapper}
      >
        <Grid item xs={isMobile ? 12 : 6}>
          <Typography variant="h6" className={classes.name}>
            Hayato Okuma
          </Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 5}>
          <List>
            {accounts.map((account, i) => (
              <ListItem
                key={i}
                button
                onClick={() => handleOpenAccount(account)}
              >
                <ListItemIcon className={classes.icon}>
                  {account.Icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="button">{account.name}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Footer
