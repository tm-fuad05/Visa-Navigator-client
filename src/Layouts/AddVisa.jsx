import React, { useContext, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { AuthContext } from "../Provider/AuthProvider";
const Form2 = () => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  const visaTypes = ["Tourist Visa", "Student Visa", "Official Visa"];
  const documentOptions = [
    "Valid passport",
    "Visa application form",
    "Recent passport-sized photograph",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        requiredDocuments: checked
          ? [...prev.requiredDocuments, value]
          : prev.requiredDocuments.filter((doc) => doc !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const requiredDocuments = formData.requiredDocuments;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    setError("");
    if (requiredDocuments.length === 0) {
      setError("Please select at least one required document.");
      return;
    }

    const visaData = {
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
      email,
    };

    fetch("https://assignment-10-server-five-rose.vercel.app/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
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
    <div className="min-h-screen md:bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white md:shadow-lg p-8 w-full max-w-3xl md:my-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
          Add Visa
        </h1>
        <form onSubmit={handleAddVisa} className="space-y-4">
          <div className="form-control">
            <label className=" text-sm font-medium mb-1">
              Country Image URL:
            </label>
            <input
              type="text"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="input input-bordered rounded-none focus:outline-none "
              required
            />
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">Country Name:</label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
              placeholder="Enter country name"
              className="input input-bordered rounded-none focus:outline-none "
              required
            />
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">Visa Type:</label>
            <select
              name="visaType"
              onChange={handleChange}
              className="w-full p-3 border rounded-none focus:outline-none "
              required
            >
              <option selected disabled>
                Select Visa Type
              </option>
              {visaTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">
              Processing Time:
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              placeholder="Enter processing time"
              className="input input-bordered rounded-none focus:outline-none "
              required
            />
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">
              Required Documents:
            </label>
            {documentOptions.map((doc, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value={doc}
                  checked={formData.requiredDocuments.includes(doc)}
                  onChange={handleChange}
                />
                <span>{doc}</span>
              </div>
            ))}
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="input input-bordered rounded-none focus:outline-none h-24 "
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">
              Age Restriction:
            </label>
            <input
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              placeholder="Enter age restriction"
              className="input input-bordered rounded-none focus:outline-none "
            />
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">Fee:</label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              placeholder="Enter fee"
              className="input input-bordered rounded-none focus:outline-none "
              required
            />
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">Validity:</label>
            <input
              type="text"
              name="validity"
              value={formData.validity}
              onChange={handleChange}
              placeholder="Enter validity period"
              className="input input-bordered rounded-none focus:outline-none "
              required
            />
          </div>

          <div className="form-control">
            <label className=" text-sm font-medium mb-1">
              Application Method:
            </label>
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              placeholder="Enter application method"
              className="input input-bordered rounded-none focus:outline-none "
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 hover:scale-105 duration-500 text-white focus:outline-none rounded-none"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
