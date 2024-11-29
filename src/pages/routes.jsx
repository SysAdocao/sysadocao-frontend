import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './_layouts/AppLayout';
import Home from './app/home';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Pets from './app/Pets';
import PetDetails from './app/PetDetails';
import AdoptionPage from './adoption'; 
import Profile from './app/Profile'
import Favorites from './app/Favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/pets', element: <Pets /> },
      { path: '/pets/:id', element: <PetDetails /> },
      { path: '/adoption', element: <AdoptionPage /> },
      { path: '/profile', element: <Profile /> },
      { path: '/favorites', element: <Favorites /> },
    ],
  },
]);