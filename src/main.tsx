import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main.tsx'
import { CssBaseline } from '@mui/material'
import Error from './pages/Error.tsx'
import Bedroom from './pages/Bedroom.tsx'
import Kitchen from './pages/Kitchen.tsx'
import Bathroom from './pages/Bathroom.tsx'
import Office from './pages/Office.tsx'
import Other from './pages/Other.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'habitacion',
        element: <Bedroom/>,
      },
      {
        path: 'cocina',
        element: <Kitchen/>,
      },
      {
        path: 'baño',
        element: <Bathroom/>,
      },
      {
        path: 'oficina',
        element: <Office/>,
      },
      {
        path: 'otro',
        element: <Other/>,
      },
      {
        path: '*',
        element: <Error/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <CssBaseline />
    <RouterProvider router={routes} />
  </>
)
