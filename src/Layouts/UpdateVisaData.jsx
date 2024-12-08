import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const UpdateVisaData = ({ data }) => {
  const [error, setError] = useState(null);
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

  const handleUpdateVisa = (e) => {
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

    const updatedVisaData = {
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
    };

    fetch(
      `https://assignment-10-server-five-rose.vercel.app/visa/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedVisaData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdateVisa} className="space-y-4">
        <div className="form-control">
          <label className=" text-sm font-medium mb-1">
            Country Image URL:
          </label>
          <input
            type="text"
            name="countryImage"
            // value={formData.countryImage}
            defaultValue={data.image}
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
            // value={formData.countryName}
            defaultValue={data.countryName}
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
            // value={formData.visaType}

            onChange={handleChange}
            className="w-full p-3 border rounded-none focus:outline-none "
            required
          >
            <option>{data.visaType}</option>
            {visaTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label className=" text-sm font-medium mb-1">Processing Time:</label>
          <input
            type="text"
            name="processingTime"
            // value={formData.processingTime}
            defaultValue={data.processingTime}
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
            // value={formData.description}
            defaultValue={data.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="input input-bordered rounded-none focus:outline-none "
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className=" text-sm font-medium mb-1">Age Restriction:</label>
          <input
            type="number"
            name="ageRestriction"
            // value={formData.ageRestriction}
            defaultValue={data.ageRestriction}
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
            // value={formData.fee}
            defaultValue={data.fee}
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
            // value={formData.validity}
            defaultValue={data.validity}
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
            // value={formData.applicationMethod}
            defaultValue={data.applicationMethod}
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateVisaData;
