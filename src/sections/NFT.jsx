import Container from "../components/Container";
import Flex from "../components/Flex";
import SliderComponent from "../components/Slider";
import Title from "../components/Title";
import nft1Img from "../assets/images/nft1.png";
import nft2Img from "../assets/images/nft2.png";
import nft3Img from "../assets/images/nft3.png";
import React from "react";
import Button from "../components/Button";
import avatarImg1 from "../assets/images/Avatar1.png";
import avatarImg2 from "../assets/images/avatar2.png";
import avatarImg3 from "../assets/images/avatarImg3.png";

const NFT = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <Flex className="justify-center gap-x-[20px]"> {dots} </Flex>
      </div>
    ),
    customPaging: () => (
      <div className="w-[30px] h-[30px] bg-[#595572] rounded-full"></div>
    ),
  };
  return (
    <section className="relative z-60">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Collect some NFTs"} className />
        </Flex>

        <SliderComponent className="mt-[61px]" settings={settings}>
          <div>
            <img src={nft1Img} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-white p-[24px] rounded-[24px] -translate-y-21">
              <Flex className="flex-col">
                <Flex className="justify-between font-extrabold text-[22px] text-primaryBg items-center">
                  <h4>Lighting Axe</h4>
                  <h5>0.36 eth</h5>
                </Flex>
                <Flex className="mt-[10px] mb-[24px] items-center">
                  <img src={avatarImg1} className="w-[36px]" />
                  <h6 className="text-[20px] font-medium text-primaryBg">
                    Loura chin
                  </h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center bg-primaryBg "
              />
            </div>
          </div>
          <div>
            <img src={nft2Img} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-white p-[24px] rounded-[24px] -translate-y-21">
              <Flex className="flex-col">
                <Flex className="justify-between font-extrabold text-[22px] text-primaryBg items-center">
                  <h4>Skeleton head</h4>
                  <h5>0.29 eth</h5>
                </Flex>
                <Flex className="mt-[10px] mb-[24px] items-center">
                  <img src={avatarImg2} className="w-[36px]" />
                  <h6 className="text-[20px] font-medium text-primaryBg">
                    Kelvin glan
                  </h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center bg-primaryBg "
              />
            </div>
          </div>
          <div>
            <img src={nft3Img} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-white p-[24px] rounded-[24px] -translate-y-21">
              <Flex className="flex-col">
                <Flex className="justify-between font-extrabold text-[22px] text-primaryBg items-center">
                  <h4>Hard breath</h4>
                  <h5>0.22 eth</h5>
                </Flex>
                <Flex className="mt-[10px] mb-[24px] items-center">
                  <img src={avatarImg3} className="w-[36px]" />
                  <h6 className="text-[20px] font-medium text-primaryBg">
                    Glam lee
                  </h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center bg-primaryBg "
              />
            </div>
          </div>
        </SliderComponent>
      </Container>
    </section>
  );
};
export default NFT;
