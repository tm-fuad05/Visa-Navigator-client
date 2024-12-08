import Lottie from "lottie-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import empty from "../assets/empty.json";
import VisaApplicationCard from "../Components/VisaApplicationCard";
const MyVisaApplication = () => {
  const appliedVisas = useLoaderData();
  const [myAppliedVisas, setMyAppliedVisas] = useState(appliedVisas);

  return (
    <div className="bg-[#f3f4f6] border border-b-[#f3f4f6]">
      <div className="text-center h-32 lg:h-44 flex items-center justify-center bg-blue-100 mb-20">
        <h1 class="text-3xl  w-ful lg:text-5xl font-bold   ">
          {"<< My Visa Application >>"}
        </h1>
      </div>
      {appliedVisas.length === 0 ? (
        <div>
          <figure className="w-5/12 mx-auto">
            <Lottie classID="w-full" animationData={empty} />
          </figure>
          <h3 className="text-xl lg:text-4xl font-bold mb-20 w-7/12 mx-auto text-gray-500 mt-5 text-center">
            You haven't added any visa yet
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mb-20">
          {appliedVisas.map((appliedVisaCard) => (
            <VisaApplicationCard
              key={appliedVisaCard._id}
              appliedVisaCard={appliedVisaCard}
              myAppliedVisas={myAppliedVisas}
              setMyAppliedVisas={setMyAppliedVisas}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisaApplication;
