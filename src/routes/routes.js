// pages
import Layout from "Layout";
import Home from "pages/Home/Home";
import Product from "pages/Menu/Product";
import AllProduct from "pages/Menu/AllProduct";
import ErrorRoute from "pages/PageNotFound/ErrorRoute";
import ProductDetail from "pages/Order/ProductDetail";
import Cart from "pages/Cart/Cart";
import Checkout from "pages/Checkout/Checkout";
import Login from "pages/Auth/User/Login";
import SignUp from "pages/Auth/User/SignUp";
import ForgotPassword from "pages/Auth/User/ForgotPassword";
import AboutUs from "pages/AboutUs/AboutUs";
import Policy from "pages/Policy/Policy";
import Contact from "pages/Contact/Contact";
import ProtectedRoutes from "routes/ProtectedRoutes";
import UserProfile from "pages/Auth/UserAccount/UserProfile";
import UserOrders from "pages/Auth/UserAccount/UserOrders";
import UserLayout from "pages/Auth/UserAccount/UserLayout";
import UserFavorite from "pages/Auth/UserAccount/UserFavorite";
import ChangePassword from "pages/Auth/UserAccount/ChangePassword";
import UserAddress from "pages/Auth/UserAccount/UserAddress";

export const routes = [
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
        path: "/user",
        element: <ProtectedRoutes isAuth={true}></ProtectedRoutes>,
        children: [
          {
            path: "",
            element: <UserLayout></UserLayout>,
            children: [
              {
                path: "account/profile",
                element: <UserProfile></UserProfile>,
              },
              {
                path: "account/favorite",
                element: <UserFavorite></UserFavorite>,
              },
              {
                path: "account/change-password",
                element: <ChangePassword></ChangePassword>,
              },
              {
                path: "account/address",
                element: <UserAddress></UserAddress>,
              },
              {
                path: "order/:status",
                element: <UserOrders></UserOrders>,
              },
            ],
          },
        ],
      },
    ],
  },
];
