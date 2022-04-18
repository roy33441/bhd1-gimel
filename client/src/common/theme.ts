import createTheme from '@material-ui/core/styles/createTheme';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: ['Heebo'].join(',')
  },
  overrides: {
    MuiChip: {
      root: {
        direction: 'ltr'
      },
      outlined: {
        backgroundColor: `transparent !important`
      }
    }
  },
  palette: {
    primary: {
      light: '#FFCDAA',
      main: '#F24C00'
    },
    secondary: {
      light: '#E7E7E7',
      main: '#485696',
      dark: '#ADB2C9'
    },
    warning: {
      main: '#F9C784'
    },
    info: {
      light: '#C5CBE8',
      main: '#ADB2C9',
      dark: '#1976D2'
    },
    success: {
      light: '#C0DAC4',
      main: '#84DE92'
    },
    background: {
      default: '#E7E7E7'
    }
  }
});

export default theme;
