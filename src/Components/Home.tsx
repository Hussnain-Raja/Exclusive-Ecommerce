import React from "react";
import VoucherScreen from "../screens/VoucherScreen";
import FlashScreen from "../screens/FlashScreen";
import Browse from "./Browse";
import Experience from "./Experience";
import Ourproduct from "./Ourproduct";
import Newarrival from "./Newarrival";
import BestSellingScreen from "../screens/BestSellingScreen";
import CoustomerScreen from "../screens/CoustomerScreen";
import OurproductScreen from "../screens/OurproductScreen";

const Home = () => {
  return (
    <div>
      <VoucherScreen />
      <FlashScreen />
      <Browse />
      <BestSellingScreen />
      <Experience />
      <OurproductScreen />
      <Newarrival />
      <CoustomerScreen />
    </div>
  );
};

export default Home;
