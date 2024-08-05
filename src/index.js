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
// redux & redux persist
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
// routes
import { routes } from "routes/routes";
// main
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(routes);
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
