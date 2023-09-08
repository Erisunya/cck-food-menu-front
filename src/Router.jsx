import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Places from "./components/pages/Places";
import Stalls from "./components/pages/Stalls";
import Menu from "./components/pages/Menu";
import Feedback from "./components/pages/Feedback";
import ErrorPage from "./components/pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Places />,
      errorElement: <ErrorPage />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
