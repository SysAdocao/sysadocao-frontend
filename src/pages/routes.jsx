import { createBrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
import AppLayout from './_layouts/AppLayout';
import Home from './app/home';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Pets from './app/Pets';
import PetDetails from './app/PetDetails';
import AdoptionPage from './adoption'; 
=======
import AppLayout from './_layouts/AppLayout'
import Home from './app/home'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Pets from './app/Pets'
import Profile from './app/Profile'
>>>>>>> 820a92ce56117bf376b36030bab6e3fc9482c3ee

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/pets', element: <Pets /> },
<<<<<<< HEAD
      { path: '/pets/:id', element: <PetDetails /> },
      { path: '/adoption', element: <AdoptionPage /> }, // Adiciona a nova rota de adoção
=======
      { path: '/profile', element: <Profile /> },
>>>>>>> 820a92ce56117bf376b36030bab6e3fc9482c3ee
    ],
  },
]);