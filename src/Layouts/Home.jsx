import React from "react";
import Banner from "../Components/Home/Banner";
import ExtraSection1 from "../Components/Home/ExtraSection1";
import ExtraSection2 from "../Components/Home/ExtraSection2";
import LottieComponent from "../Components/Home/LottieComponent";
import ThemeToggle from "../Components/ThemeToggle";
import LatestAddedVisas from "../Components/Home/LatestAddedVisas";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ThemeToggle></ThemeToggle>
      <ExtraSection1></ExtraSection1>
      <LatestAddedVisas></LatestAddedVisas>
      <LottieComponent></LottieComponent>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Home;
