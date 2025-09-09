import React, { useState, useEffect } from "react";
import Bestselling from "../Components/Bestselling";
import { baseUrl } from "../services/NetworkService";
import { ApiNames } from "../constants/ApiNames";

const BestSellingScreen = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}${ApiNames.products}`);
        const result = await res.json();
        setDatas(result);
      } catch (error) {
        console.log("Error fetching best selling products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResponse();
  }, []);
  return (
    <>
      <Bestselling datas={datas} loading={loading} />
    </>
  );
};

export default BestSellingScreen;
