import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root";
import AllPosts from './../../pages/AllPosts/AllPosts';
import Article from './../../pages/Article/Article';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AllPosts />,
      },
      {
        path: "/article",
        element: <Article />,
      },
    ],
  },
]);
routes;

export default routes;
