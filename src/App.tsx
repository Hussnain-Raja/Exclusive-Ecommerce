import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
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
import PracticeTask from "./Components/PracticeTask";
import About from "./Components/About";
import Model from "./Components/Model";
import Contactpage from "./Components/Contactpage";
import ContactpageScreen from "./screens/ContactpageScreen";
// import Contactpage from "./Components/Contactpage";
// Layout-aware App
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIslogin] = useState<boolean>(() => {
    // read from localStorage when app loads
    return localStorage.getItem("isLogin") === "true";
  });
  console.log('localstorage ::', typeof localStorage.getItem("isLogin"))
  console.log('isLogin::', typeof isLogin)
  useEffect(() => {
    generateToken();
    const loginState = localStorage.getItem("isLogin");
    // console.log("Login State:: ", loginState);
    // if (loginState === "true") {
    //   setIslogin(true);
    // }
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
  // hide header/footer on sign page
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
        {/* Home route */}
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate to="/sign" />}
        />
        {/* Signup route */}
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
        <Route path="/task" element={<PracticeTask />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactpage" element={<ContactpageScreen />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}
// Main wrapper
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
