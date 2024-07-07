import './App.css'
import logo from './assets/icon.svg'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button, ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'
import Footer from './components/Footer'

function App() {

  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
      <nav style={{ backgroundColor: theme.palette.background.default }}>
        <div id='banner'>
          <img src={logo} alt='logo WF' />
          
          <Typography style={{cursor: 'pointer'}} onClick={()=>navigate('')} component='h1' variant='h4' color={'primary.contrastText'}>
            Mobiliario WF
          </Typography>
          
        </div>
        
        <div id='controls'>
          <Link to={''}>
            <Button>Catálogo</Button>
          </Link>
          <Link to={'otro'}>
            <Button>Contacto</Button>
          </Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
