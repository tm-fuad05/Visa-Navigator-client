import Lottie from "lottie-react";
import travel from "../../assets/Animation - 1733440621062.json";
import { RxBorderSolid } from "react-icons/rx";

const LottieComponent = () => {
  return (
    <div className="bg-slate-200">
      <div className="w-10/12 mx-auto mb-20 text-center flex flex-col md:flex-row md:text-left items-center bg-slate-200 justify-between py-10">
        <section className="flex items-center md:w-1/2">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[8px]">WE WILL HELP YOU</p>
            <h2 className="text-2xl lg:text-4xl font-bold">
              Travel Your Favourite Country & Make Your Dream True
            </h2>
            <RxBorderSolid className="text-5xl text-blue-600" />
          </div>
        </section>

        <div className="w-2/3 md:w-1/3">
          <Lottie animationData={travel} />
        </div>
      </div>
    </div>
  );
};

export default LottieComponent;
