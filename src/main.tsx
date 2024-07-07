import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './pages/Main.tsx'
import { CssBaseline } from '@mui/material'
import Error from './pages/Error.tsx'

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
        path: 'contacto',
        element: <></>,
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
