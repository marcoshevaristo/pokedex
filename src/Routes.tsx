import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonList from './pages/PokemonList/PokemonList';

function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PokemonList />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
