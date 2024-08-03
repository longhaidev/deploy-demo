import logo from "./logo.svg";
import "./App.css";
import Header from "components/Header/Header";
import Footer from "shared/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
