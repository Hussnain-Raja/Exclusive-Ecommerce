import React, { useState, useEffect } from "react";
import Coustomer from "../Components/Coustomer";
import { baseUrl } from "../services/NetworkService";
import { ApiNames } from "../constants/ApiNames";

const CoustomerScreen = () => {
  const [user, setUser] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchRes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${ApiNames.users}`);
        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.log("Error fetching customers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRes();
  }, []);

  return (
    <>
      <Coustomer user={user} isLoading={isLoading} />
    </>
  );
};

export default CoustomerScreen;
