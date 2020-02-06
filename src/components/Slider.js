import { withStyles } from '@material-ui/styles'
import { Slider } from '@material-ui/core'
import theme from 'lib/theme'

const MySlider = withStyles({
  root: {
    color: '#bcaaa4',
    height: 8,
    width: '70vw',
    margin: '8px 0',
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
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

export default MySlider
