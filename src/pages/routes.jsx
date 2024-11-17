import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './_layouts/app'
import RegisterLayout from './_layouts/register'
import Home from './app/home'
import SignIn from './auth/sign-in'
import SignUp from './auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },

  {
    path: '/',
    element: <RegisterLayout />,
    children: [
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-in', element: <SignIn /> }
    ],
  },
])