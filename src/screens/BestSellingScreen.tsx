import React, { useState, useEffect } from "react";
import Bestselling from "../Components/Bestselling";
import { baseUrl } from "../services/NetworkService";
import { ApiNames } from "../constants/ApiNames";
import { getProductService } from "../services/GlobalServise";

const BestSellingScreen = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSellingRequest();
  }, []);

  const getSellingRequest = async () => {
    try {

      let response = await getProductService();
      if (response) {
        setDatas(response);

      }
    } catch (error) {
      console.log("There is an error", error);
    }
  }
  return (
    <>
      <Bestselling datas={datas} loading={loading} />
    </>
  );
};

export default BestSellingScreen;
