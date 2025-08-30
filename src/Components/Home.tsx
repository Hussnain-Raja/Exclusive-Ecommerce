import React from "react";
import Voucher from "./Voucher";
import Flash from "./Flash";
import Browse from "./Browse";
import Bestselling from "./Bestselling";
import Experience from "./Experience";
import Ourproduct from "./Ourproduct";
import Newarrival from "./Newarrival";
import Coustomer from "./Coustomer";

const Home = () => {
  return (
    <div>
      <Voucher />
      <Flash />
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
