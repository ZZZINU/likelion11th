import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from './App';
import Post from '../pages/Post';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: "post",
          element: <Post />,
          children: [
            {
              path: ":postId",
              element: <Post />,
            },
          ],

        },
      ],
    },
  ]);

export default router;