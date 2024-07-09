import './App.css'
import logo from './assets/bar-icon.svg'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button, ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

function App() {

  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
      <nav style={{ backgroundColor: theme.palette.background.default }}>
        <div id='banner'>
          <img src={logo} alt='logo WF' />
          
          <Typography style={{cursor: 'pointer'}} onClick={()=>navigate('')} component='h1' variant='h3' color={'primary.contrastText'} sx={{fontSize: {xs: 24, md: 40}}}>
            Muebles WF
          </Typography>
          
        </div>
        
      </nav>
      <main>
        <Outlet />
      </main>
      <WhatsappButton/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
