import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import bannerImg from "../assets/images/bannerImg.png";
const Banner = () => {
  return (
    <div>
      <section className="xl:py-[32px] relative z-40 px-2 myXL:px-0 ">
        <Container>
          <Flex className="items-center flex-col lg:flex-row gap-5">
            <div className="max-w-[785px] order-1 lg:order-0">
              <h1 className="leading-[121%] tracking-[0.18rem] font-mon text-4xl md:text-7xl lg:text-5xl text-center lg:text-left xl:text-8xl font-black text-[#FFFFFF] banner-heading">
                Best NFTs Marketplace.
              </h1>
              <p className="text-secondtext leading-[2.17rem] tracking-[-0.024rem] max-w-[765px] mt-[32px] xl:mb-[60px] text-[19px] font-mon font-normal text-center lg:text-left">
                Ultrices eget pretium sit euixlod mi id. In commodo auctor eget
                congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
                Porta aenean egestas malesuada in pulvinar enim viverra.
              </p>
              <Flex className="py-[38px] gap-[17px] flex-col lg:flex-row">
                <Button
                  text={"Get Started"}
                  className="text-center w-[80%] mx-auto xl:w-auto xl:mx-0"
                />
                <Button
                  text={"Create NFTs"}
                  className="text-center w-[80%] mx-auto xl:w-auto xl:mx-0"
                />
              </Flex>
            </div>
            <Flex className=" rounded-full max-w-[750px] max-h-[750px] bg-[#869BDF] overflow-hidden border-4 border-[#16142C] relative">
              <img src={bannerImg} />;
              <div className="absolute z-0 w-full h-full bg-[#120d274f]"></div>
            </Flex>
          </Flex>
        </Container>
      </section>
    </div>
  );
};

export default Banner;
