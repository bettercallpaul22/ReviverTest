import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter } from "react-router-dom";
import DrawerAppBar from "./components/Navbar/AppBar";
import SearchAppBar from "./components/Navbar/AppBar";
import Project from "./pages/project/Project";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <SearchAppBar />
        <Home />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/project",
          element: <Project/>
        },
      ],
    },

    // {
    //   path: "/project",
    //   element: <Project/>
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
