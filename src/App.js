import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app-layout">
      <div className="header-container">
        <Header />
      </div>
      <div className="restro-body">
        <Outlet />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
root.render(<RouterProvider router={approuter} />);
