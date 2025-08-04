import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import Bookmarked from './pages/Bookmarked/index.jsx'
import Home from './pages/Home/index.jsx'
import Details from './pages/Details/index.jsx'
import GlobalState from './context/index.jsx'
import SearchResult from './pages/SearchResult/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/pages/recipe-item/:id',
        element: <Details/>
      },
      {
        path: '/pages/bookmarked',
        element: <Bookmarked/>
      },
      {
        path: '/pages/searchresult',
        element: <SearchResult/>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
     <RouterProvider router={router}/> 
    </GlobalState>
  </StrictMode>,
)
