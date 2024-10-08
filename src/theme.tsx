import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
        default: '#644b36'
    },
    primary: {
      main: '#6c6c6c',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {
          textTransform: 'none'
        }
      },
      styleOverrides: {
        
      }
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
})
