import { createMuiTheme } from '@material-ui/core/styles'
import { jaJP } from '@material-ui/core/locale'
import KoruriTtf from 'fonts/Koruri-Regular.ttf'
import AudiowideTtf from 'fonts/Audiowide-Regular.ttf'

const palette = {
  primary: { main: '#00796B' },
  secondary: { main: '#bcaaa4' },
  error: { main: '#ef5350' },
  warning: { main: '#cddc39' },
  info: { main: '#004d40' },
  success: { main: '#26c6da' },
}

const koruri = {
  fontFamily: 'Koruri',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Koruri'),
    local('Koruri-Regular'),
    url(${KoruriTtf}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const audiowide = {
  fontFamily: 'Audiowide',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Audiowide'),
    local('Audiowide-Regular'),
    url(${AudiowideTtf}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const themeName = 'Hayato OKUMA Katagami annotation tool theme'

const theme = createMuiTheme(
  {
    palette,
    themeName,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [koruri, audiowide],
        },
      },
    },
  },
  jaJP
)
const htmlFontSize = 16
const coef = fontSize => fontSize / 14

theme.typography = {
  h1: {
    fontFamily: 'Audiowide',
    fontSize: 80,
    fontWeight: 700,
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
  },
  h4: {
    fontFamily: 'Koruri',
    fontSize: 24,
    fontWeight: 700,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
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
    fontFamily: 'Koruri, Arial',
    color: '#fafafa',
  },
  caption: {
    fontSize: 12,
    marginBottom: 8,
    color: palette.secondary.main,
  },
  pxToRem: size => `${(size / htmlFontSize) * coef(size)}rem`,
}

export default theme
