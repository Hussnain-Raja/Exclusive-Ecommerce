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

function App() {
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
