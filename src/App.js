import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { Outlet } from "react-router-dom";
import RestroDetail from "./component/RestroDetailPage";

const Grocery = lazy(() => import("./component/Grocery"));
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
      { path: "/restaurants/:resId", element: <RestroDetail /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loding..........</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={approuter} />);
