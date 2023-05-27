import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>hello world</p>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
