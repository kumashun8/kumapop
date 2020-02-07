import { createMuiTheme } from '@material-ui/core/styles'
import { jaJP } from '@material-ui/core/locale'

const palette = {
  primary: { main: '#00796B' },
  secondary: { main: '#bcaaa4' },
  error: { main: '#ef5350' },
  warning: { main: '#cddc39' },
  info: { main: '#004d40' },
  success: { main: '#26c6da' },
}

const themeName = 'Hayato OKUMA Katagami annotation tool theme'

const theme = createMuiTheme(
  {
    palette,
    themeName,
  },
  jaJP
)
const htmlFontSize = 16
const coef = fontSize => fontSize / 14

theme.typography = {
  h1: {
    fontFamily: 'Audiowide',
    fontSize: 80,
    whiteSpace: 'pre-line',
    color: palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 64,
    },
  },
  h2: {
    fontFamily: 'Audiowide',
    fontSize: 32,
    color: '#fafafa',
  },
  h3: {
    fontFamily: 'Audiowide',
    fontSize: 18,
    color: '#fafafa',
    '&:visited': {
      color: '#fafafa',
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  h4: {
    fontFamily: 'Koruri',
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  h5: {
    fontFamily: 'Koruri',
    fontSize: 20,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  h6: {
    fontFamily: 'Audiowide',
    fontSize: 40,
    whiteSpace: 'pre-line',
    color: '#e0e0e0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  subtitle1: {
    fontFamily: 'Audiowide',
    fontSize: 48,
    fontWeight: 700,
    marginBottom: 16,
    color: palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  body1: {
    fontFamily: 'Koruri, Arial',
    whiteSpace: 'pre-line',
    fontSize: 16,
    lineHeight: '32px',
    color: '#030303',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '28px',
    },
  },
  body2: {
    fontSize: 16,
    color: '#030303',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  button: {
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'Koruri, Arial',
    color: '#e0e0e0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  caption: {
    fontSize: 12,
    marginBottom: 8,
    color: palette.secondary.main,
  },
  pxToRem: size => `${(size / htmlFontSize) * coef(size)}rem`,
}

export default theme
