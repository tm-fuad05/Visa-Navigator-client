import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useAllVisa = () => {
  const [allVisaData, setAllVisaData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchAllVIsaData = async () => {
      const { data } = await axios.get(
        `https://assignment-10-server-five-rose.vercel.app/visa?filter=${filter}`
      );
      setAllVisaData(data);
      setLoader(false);
    };
    fetchAllVIsaData();
  }, [filter]);

  return { allVisaData, loader, setFilter };
};

export default useAllVisa;
