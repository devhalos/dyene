import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { CategoryGridPage } from './category';

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
    element: <CategoryGridPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
