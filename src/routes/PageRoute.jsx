import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import Home from "../pages/Home";
import CoinPage from "../pages/CoinPage";
import Error from "../pages/Error";
import LoginPage from "../pages/LoginPage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import About from "../pages/About";
import Contact from "../pages/Contact";

const PageRoute = () => {
  const {isAuth} = useContext(AuthContext)
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />} />
      {
        isAuth && <Route path="/coin/:pid" element={<CoinPage />} />
      }
      {
        !isAuth && <Route path="/coin/:pid" element={<LoginPage />} />
      }
      
      <Route path={route.ABOUT} element={<About />} />
      <Route path={route.CONTACT_US} element={<Contact />} />
      <Route path={route.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PageRoute;
