import { App } from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import { createHashRouter } from 'react-router-dom';
import StuffPage from './Pages/StuffPage.jsx';

export const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
            path:"/stuff",
            element: <StuffPage />
        }
      ],
    },
  ]);