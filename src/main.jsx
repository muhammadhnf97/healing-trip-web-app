import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import Login from './pages/Login.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Paket from './pages/Paket'
import Details from './pages/Details'
import Search from './pages/Search'
import Feedbacks from './pages/Feedbacks'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/paket",
    element: <Paket />,
    errorElement: <ErrorPage />
  },
  {
    path: "search/:id",
    element: <Search />,
    errorElement: <ErrorPage />
  },
  {
    path: "/feedbacks",
    element: <Feedbacks />,
    errorElement: <ErrorPage />
  },
  {
    path: "destination/:id",
    element: <Details />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
