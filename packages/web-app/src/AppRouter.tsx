import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { CategoriesPage } from './category';
import { NameGeneratorPage } from './name';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigate
        replace
        to='/categories'
      />
    ),
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/name/generate',
    element: <NameGeneratorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
