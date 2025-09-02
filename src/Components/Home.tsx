import React from "react";
import VoucherScreen from "../screens/VoucherScreen";
import FlashScreen from "../screens/FlashScreen";
import Browse from "./Browse";
import Bestselling from "./Bestselling";
import Experience from "./Experience";
import Ourproduct from "./Ourproduct";
import Newarrival from "./Newarrival";
import Coustomer from "./Coustomer";



const Home = () => {
  return (
    <div>
      <VoucherScreen />
      <FlashScreen/>
      <Browse />
      <Bestselling />
      <Experience />
      <Ourproduct />
      <Newarrival />
      <Coustomer />
    </div>
  );
};

export default Home;
