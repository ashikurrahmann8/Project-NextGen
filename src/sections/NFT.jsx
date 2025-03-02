import Container from "../components/Container";
import Flex from "../components/Flex";
import SliderComponent from "../components/Slider";
import Title from "../components/Title";
import nft1Img from "../assets/images/nft1.png";
import React from "react";
const NFT = () => {
  return (
    <section className="relative z-50">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Collect some NFTs"} className />
        </Flex>

        <SliderComponent
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
          }}
        >
          <div>
            <img src={nft1Img} />
          </div>
          <div>
            <img src={nft1Img} />
          </div>
          <div>
            <img src={nft1Img} />
          </div>
        </SliderComponent>
      </Container>
    </section>
  );
};
export default NFT;
