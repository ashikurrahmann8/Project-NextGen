import React from "react";
import Banner from "../components/Banner";
import Brand from "../sections/Brand";
import TopCreators from "../sections/TopCreators";
import NFT from "../sections/NFT";
import NewsLetter from "../sections/NewsLetter";

const Home = () => {
  return (
    <>
      <Banner />
      <Brand />
      <NFT />
      <TopCreators />
      <NewsLetter/>
    </>
  );
};

export default Home;
