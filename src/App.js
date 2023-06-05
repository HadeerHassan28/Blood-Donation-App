import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Notfound from "./Components/Notfound/Notfound";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Volunteers from "./Components/Volunteers/Volunteers";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
function App() {
  let routes = createBrowserRouter([
    {
      path: "",

      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "blogs",
          element: (
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          ),
        },
        {
          path: "volunteers",
          element: (
            <ProtectedRoute>
              <Volunteers />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
