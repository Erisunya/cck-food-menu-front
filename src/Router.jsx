import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header";
import Places from "./components/pages/Places";
import Stalls from "./components/pages/Stalls";
import Menu from "./components/pages/Menu";
import Feedback from "./components/pages/Feedback";
import ErrorPage from "./components/pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Places />,
        },
        {
          path: "/:placename",
          element: <Stalls />,
        },
        {
          path: "/:placename/:stallname",
          element: <Menu />,
        },
        {
          path: "/feedback",
          element: <Feedback />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
