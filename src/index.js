import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
// redux
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
// pages
import Layout from "./Layout";
import Home from "pages/Home/Home";
import Product from "pages/Menu/Product";
import AllProduct from "pages/Menu/AllProduct";
import ErrorRoute from "pages/PageNotFound/ErrorRoute";
import ProductDetail from "pages/Menu/ProductDetail";
import Cart from "pages/Cart/Cart";
import Checkout from "pages/Checkout/Checkout";
import Login from "pages/Auth/Login";
import SignUp from "pages/Auth/SignUp";
import ForgotPassword from "pages/Auth/ForgotPassword";
import AboutUs from "pages/AboutUs/AboutUs";
import Policy from "pages/Policy/Policy";
import Contact from "pages/Contact/Contact";
import ProtectedRoutes from "untils/ProtectedRoutes";
import UserProfile from "pages/Auth/User/UserProfile";
import UserOrders from "pages/Auth/User/UserOrders";
import UserLayout from "pages/Auth/User/UserLayout";
import UserFavorite from "pages/Auth/User/UserFavorite";
import ChangePassword from "pages/Auth/User/ChangePassword";
import UserAddress from "pages/Auth/User/UserAddress";
// main
const root = ReactDOM.createRoot(document.getElementById("root"));
// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorRoute></ErrorRoute>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/menus/all",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/menus/:category",
        element: <Product></Product>,
      },
      {
        path: "/menus/:category/:productId",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgot",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/",
        element: <ProtectedRoutes></ProtectedRoutes>,
        children: [
          {
            path: "/user/",
            element: <UserLayout></UserLayout>,
            children: [
              {
                path: "/user/account/profile",
                element: <UserProfile></UserProfile>,
              },
              {
                path: "/user/account/favorite",
                element: <UserFavorite></UserFavorite>,
              },
              {
                path: "/user/account/change-password",
                element: <ChangePassword></ChangePassword>,
              },
              {
                path: "/user/account/address",
                element: <UserAddress></UserAddress>,
              },
              {
                path: "/user/order/:status",
                element: <UserOrders></UserOrders>,
              },
            ],
          },
        ],
      },
    ],
  },
]);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}></RouterProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();
