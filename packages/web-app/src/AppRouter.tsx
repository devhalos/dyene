import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { CategoriesPage } from './category';

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
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
