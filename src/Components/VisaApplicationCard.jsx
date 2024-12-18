import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const VisaApplicationCard = ({
  appliedVisaCard,
  myAppliedVisas,
  setMyAppliedVisas,
}) => {
  const {
    _id,
    email,
    firstName,
    lastName,
    date,
    fee,
    image,
    countryName,
    visaType,
    processingTime,
    validity,
    applicationMethod,
  } = appliedVisaCard;

  const handleCancelVisa = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-five-rose.vercel.app/applied-visas/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Canceled!",
                text: "Your visa application has been canceled.",
                icon: "success",
              });
              const remaining = myAppliedVisas.filter(
                (data) => data._id !== id
              );
              setMyAppliedVisas(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className=" rounded-lg shadow-md p-5 bg-white  mx-auto ">
        <div className="flex items-center mb-4 h-64 lg:h-52">
          <img
            src={image}
            alt={`${countryName} flag`}
            className="w-full h-full  object-cover rounded-lg "
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold mb-4">{countryName}</h2>
          <p>
            <span className="font-medium">Visa Type:</span> {visaType}
          </p>
          <p>
            <span className="font-medium">Processing Time:</span>{" "}
            {processingTime}
          </p>
          <p>
            <span className="font-medium">Fee:</span> ${fee}
          </p>
          <p>
            <span className="font-medium">Validity:</span> {validity}
          </p>
          <p>
            <span className="font-medium">Application Method:</span>{" "}
            {applicationMethod}
          </p>
          <p>
            <span className="font-medium">Applied Date:</span> {date}
          </p>
          <p>
            <span className="font-medium">Applicant Name:</span> {firstName}{" "}
            {lastName}
          </p>
          <p>
            <span className="font-medium">Applicant Email:</span> {email}
          </p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={() => handleCancelVisa(_id)}
            className="btn bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            <AiOutlineClose className="text-lg" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaApplicationCard;
