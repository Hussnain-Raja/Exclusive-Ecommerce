import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
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


function App() {
  useEffect(() => {
    generateToken();

  }, [])



  const generateToken = async () => {
    try {
      let data = {
        email,
        password,
      };
      let response: any = await generateTokenService(data);
      console.warn("this onne")
      if (response.result) {
        global.authToken = response.result;
      } else {
        // console.log(AppMessage.initializationFaild)
      }
    } catch (error) {
      console.warn("Generate Token Error", error)
    }
  };
  return (
    <>
      <BrowserRouter>
        <Hero />
        <Herosec />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addCart" element={<AddToCart />} />
          <Route path="/sign" element={<SignupScreen />} />
          <Route path="/task" element={<PracticeTask />} />
          <Route path="/About" element={<About />} />
          <Route path="/logout" element={<Model />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
