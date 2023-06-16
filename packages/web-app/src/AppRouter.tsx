import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { CategoryListPage } from './category';

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
    element: <CategoryListPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
