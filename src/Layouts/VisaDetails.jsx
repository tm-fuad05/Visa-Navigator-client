import React from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const VisaDetails = () => {
  const visa = useLoaderData();
  const {
    _id,
    image,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const date = form.date.value;
    const fee = form.fee.value;
    const userInfo = { email, firstName, lastName, date, fee };

    fetch("https://assignment-10-server-five-rose.vercel.app/visa_user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          document.getElementById("my_modal_1").close();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added Visa",
            showConfirmButton: false,
            timer: 1500,
          });

          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="relative bg-[#f3f4f6]">
        <div className="text-center h-80 flex pt-16 justify-center bg-indigo-200 mb-[800px] md:mb-[850px]">
          <h1 class="text-4xl lg:text-5xl font-bold text-[#1f2937]  ">
            Visa Details
          </h1>
        </div>
        <div className=" w-11/12 md:w-9/12 lg:w-7/12 shadow-xl absolute  left-1/2 transform -translate-x-1/2 top-1/2  border border-gray-200  rounded-xl  transition-transform  text-[#1f2937] flex flex-col gap-2 p-5">
          <figure className="h-52 md:h-80 lg:h-96">
            <img
              src={image}
              alt={`${countryName} Visa`}
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
          <h2 className="text-xl font-bold mt-3">{countryName}</h2>
          <div className="w-fit">
            <p className="text-gray-800 text-sm mb-3 px-2 py-1 rounded-full bg-green-100 font-medium">
              {visaType}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold lg:text-lg">Processing Time:</span>{" "}
              {processingTime} Days
            </p>
            <p>
              <span className="font-semibold lg:text-lg">Age Restriction:</span>{" "}
              {ageRestriction || "None"}
            </p>
            <p>
              <span className="font-semibold lg:text-lg">Fee:</span> ${fee}
            </p>
            <p>
              <span className="font-semibold lg:text-lg">Validity:</span>{" "}
              {validity}
            </p>
            <p>
              <span className="font-semibold lg:text-lg">
                Application Method:
              </span>{" "}
              {applicationMethod}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Required Documents:</h3>
            <ul className="list-disc list-inside">
              {requiredDocuments.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="my-2">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="mb-10 w-fit mx-auto border-2 border-blue-400 rounded-lg p-1 hover:scale-105">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500  text-white"
        >
          Apply for the visa
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2  gap-y-1 gap-x-5"
            >
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered cla"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <DatePicker
                  name="date"
                  showIcon
                  icon=""
                  className="input w-full border border-gray-300"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                ></DatePicker>
                <MdDateRange className="absolute bottom-4 left-2 text-gray-500" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Fee</span>
                </label>
                <input
                  type="text"
                  placeholder="Fee"
                  name="fee"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6 col-span-2">
                <button className=" btn bg-gradient-to-r from-blue-500 to-indigo-400 text-white  hover:bg-gradient-to-r hover:from-indigo-400 hover:to-blue-500 hover:scale-105">
                  Apply
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default VisaDetails;
