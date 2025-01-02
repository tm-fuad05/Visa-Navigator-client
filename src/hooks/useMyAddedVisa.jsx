import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [myVisaData, setMyVisaData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://assignment-10-server-five-rose.vercel.app/my-added-visas?email=${email}`
      )
      .then((res) => {
        setMyVisaData(res.data);
        setLoader(false);
      });
  }, [email]);

  return { myVisaData, loader, setMyVisaData };
};

export default useMyAddedVisa;
