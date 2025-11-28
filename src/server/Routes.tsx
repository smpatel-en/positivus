import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import CommonLayout from "../components/layouts/Common";
import { createBrowserRouter, RouterProvider } from "react-router";

export default function Routes() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <CommonLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about-us", element: <AboutUs /> },
        ],
      },
    ],
    { basename: "/positivus" },
  );
  return <RouterProvider router={router} />;
}
