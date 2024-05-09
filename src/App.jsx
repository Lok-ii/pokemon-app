import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import FrontPage from "./Components/Home/FrontPage";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Compare from "./Components/Compare/Compare";
import Layout from "./Components/Extras/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
    {
      path: "/compare",
      element: <Compare />,
    },
    {
      path: "/details/:name",
      element: <Details />,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
