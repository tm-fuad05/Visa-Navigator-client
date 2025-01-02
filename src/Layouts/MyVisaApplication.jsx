import Lottie from "lottie-react";

import empty from "../assets/empty.json";
import VisaApplicationCard from "../Components/VisaApplicationCard";

import useMyAppliedVisa from "../hooks/useMyAppliedVisa";
const MyVisaApplication = () => {
  const { myAppliedVisas, loader, setSearch, setMyAppliedVisas } =
    useMyAppliedVisa();

  if (loader) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#f3f4f6] border border-b-[#f3f4f6]">
      <div className="text-center h-24 lg:h-28 flex items-center justify-center bg-blue-100 mb-10">
        <h2 class="text-3xl font-bold">My Visa Application</h2>
      </div>
      <label className="input input-bordered flex items-center gap-2 mb-16 w-8/12 md:w-5/12 lg:w-4/12 mx-auto">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      {myAppliedVisas.length === 0 ? (
        <div>
          <figure className="w-5/12 mx-auto">
            <Lottie classID="w-full" animationData={empty} />
          </figure>
          <h3 className="text-xl lg:text-4xl font-bold mb-20 w-7/12 mx-auto text-gray-500 mt-5 text-center">
            No Data Found
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mb-20">
          {myAppliedVisas.map((appliedVisaCard) => (
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
