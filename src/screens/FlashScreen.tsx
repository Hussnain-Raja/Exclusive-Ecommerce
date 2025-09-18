import React, { useState, useEffect } from "react";
import Flash from "../Components/Flash";
import { baseUrl } from "../services/NetworkService";
import { ApiNames } from "../constants/ApiNames";
import { getProductService } from "../services/GlobalServise";
import { Iproducts } from "../@types/ApiResponses";


const FlashScreen = () => {
  const [data, setData] = useState<Iproducts[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProucts()
  }, []);

  const getProucts = async () => {
    try {
      let response = await getProductService()
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log("Error",error)
    }
  }
  return (
    <>
      <Flash data={data} loading={loading} />
    </>
  );
};

export default FlashScreen;
