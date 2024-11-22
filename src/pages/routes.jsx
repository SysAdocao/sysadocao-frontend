import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './_layouts/app'
import Home from './app/home'
import SignIn from './auth/sign-in'
import SignUp from './auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> }
    ],
  },
])