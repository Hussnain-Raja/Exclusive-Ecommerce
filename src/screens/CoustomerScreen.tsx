import React, { useState, useEffect } from "react";
import Coustomer from "../Components/Coustomer";
import { baseUrl } from "../services/NetworkService";
import { ApiNames } from "../constants/ApiNames";
import { getUserService } from "../services/GlobalServise";

const CoustomerScreen = () => {
  const [user, setUser] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      let response = await getUserService();
      if (response) {
        setUser(response);
      }
    } catch (error) {
      console.log("There is an error", error);
    }
  }
  return (
    <>
      <Coustomer user={user} isLoading={isLoading} />
    </>
  );
};

export default CoustomerScreen;
