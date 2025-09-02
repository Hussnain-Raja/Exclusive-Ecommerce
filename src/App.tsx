import React from "react";

import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Commonstyles.css";
import "remixicon/fonts/remixicon.css";
import Hero from "./Components/Hero";
import Herosec from "./Components/Herosec";
import Footer from "./Components/Footer";
import { Signup } from "./Components/Signup";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { email, password } from "./utils/Config";
import { generateTokenService } from "./services/GlobalServise";

function App() {

  const generateToken = async ()=>{
    try {
      let data ={
        email,
        password,
      };
      let response :any = await generateTokenService(data);
      console.warn("this onne")
      if (response.result) {
        global.authToken = response.result;
      }else{
        // console.log(AppMessage.initializationFaild)
      }
    } catch (error) {
      console.warn("Generate Token Error",error)
    }
  };
  return (
    <>
      <BrowserRouter>
        <Hero />
        <Herosec />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
