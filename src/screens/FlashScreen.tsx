import React, { useState, useEffect } from "react";
import Flash from "../Components/Flash";
import { baseUrl } from "../services/NetworkService";
import { ApiNames } from "../constants/ApiNames";

const FlashScreen = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}${ApiNames.products}`);
        const result = await response.json();
        console.log(response);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Flash data={data} loading={loading} />
    </>
  );
};

export default FlashScreen;
