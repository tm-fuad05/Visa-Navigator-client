import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useMyAppliedVisa = () => {
  const { user } = useContext(AuthContext);
  const [myAppliedVisas, setMyAppliedVisas] = useState([]);
  const [search, setSearch] = useState("");

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchMyAppliedVisas = async () => {
      const { data } = await axios.get(
        `https://assignment-10-server-five-rose.vercel.app/applied-visas?email=${user.email}&search=${search}`
      );
      setMyAppliedVisas(data);
      setLoader(false);
    };
    fetchMyAppliedVisas();
  }, [user.email, search]);
  return { myAppliedVisas, loader, setSearch, setMyAppliedVisas };
};

export default useMyAppliedVisa;
