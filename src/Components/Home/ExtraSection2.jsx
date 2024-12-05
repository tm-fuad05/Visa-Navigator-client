import React, { useEffect, useState } from "react";
import { RxBorderSolid } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ExtraSection2 = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch("../reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto mb-10 mt- md:mt-0">
      <div className="flex flex-col items-center w-10/12  lg:w-7/12 mx-auto text-center mb-5">
        <p className="text-[8px]">CLIENTS TESTIMONIALS</p>
        <h2 className="text-2xl lg:text-4xl font-bold">
          What Customers Saying About Visarzo
        </h2>
        <RxBorderSolid className="text-5xl text-blue-600" />
      </div>
      <div className="w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((review, idx) => (
          <div key={idx}>
            <div className="border p-5 h-72 md:h-72 lg:h-48 flex  flex-col lg:flex-row  items-center gap-5 hover:scale-105 duration-500">
              <div className="flex flex-col  items-center lg:w-1/3">
                <figure className="w-12 h-12 ">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={review.image}
                    alt="img"
                  />
                </figure>
                <h6 className="font-semibold text-center">{review.name}</h6>
                <p className="text-[12px]">{review.location}</p>
              </div>
              <div className="flex flex-col text-center lg:text-left md:mt-0 lg:w-2/3 space-y-2">
                <div>
                  <h6 className="font-semibold text-blue-600">
                    {review.title}
                  </h6>
                  <Rating
                    readonly
                    initialRating={review.rating}
                    emptySymbol={
                      <FaRegStar className="text-xs  text-yellow-500" />
                    }
                    fullSymbol={<FaStar className="text-xs  text-yellow-500" />}
                  />
                </div>
                <p className="text-xs">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSection2;
