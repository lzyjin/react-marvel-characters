import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Error from './routes/Error';
import Details from './routes/Details';
import './styles/reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/character/:id',
    element: <Details />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
