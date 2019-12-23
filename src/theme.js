import { red } from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '2.2rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold'
      },
      body1: {
        fontSize: '1.5rem'
      }
    }
  },
});

export default theme;