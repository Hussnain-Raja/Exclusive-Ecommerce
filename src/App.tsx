import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Commonstyles.css";
import "remixicon/fonts/remixicon.css";
import Hero from "./Components/Hero";
import Herosec from "./Components/Herosec";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { email, password } from "./utils/Config";
import { generateTokenService } from "./services/GlobalServise";
import AddToCart from "./Components/AddToCart";
import SignupScreen from "./screens/SignupScreen";
import About from "./Components/About";
import ContactpageScreen from "./screens/ContactpageScreen";
import TodoAppScreen from "./screens/TodoAppScreen";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIslogin] = useState(false);
  useEffect(() => {
    generateToken();
    // const loginState = localStorage.getItem("isLogin");
  }, []);
  const generateToken = async () => {
    try {
      let data = { email, password };
      let response: any = await generateTokenService(data);
      console.warn("this one");
      if (response.result) {
        global.authToken = response.result;
      } else {
        // handle initialization fail
      }
    } catch (error) {
      console.warn("Generate Token Error", error);
    }
  };
  const hideLayout = location.pathname === "/sign";
  return (
    <>
      {!hideLayout && (
        <>
          <Hero />
          <Herosec setIslogin={setIslogin} />
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate to="/sign" />}
        />
        <Route
          path="/sign"
          element={
            isLogin ? (
              <Navigate to="/" />
            ) : (
              <SignupScreen setIslogin={setIslogin} />
            )
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addCart" element={<AddToCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactpage" element={<ContactpageScreen />} />
        <Route path="/todo" element={<TodoAppScreen />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}
export default App;

