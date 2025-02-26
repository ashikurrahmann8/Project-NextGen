import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import bannerImg from "../assets/images/bannerImg.png";
const Banner = () => {
  return (
    <div>
      <section className="py-[32px] relative z-50">
        <Container>
          <Flex className="items-center">
            <div className="max-w-[785px]">
              <h1 className="leading-[7.26rem] tracking-[0.18rem] font-mon text-[96px] font-black text-[#FFFFFF] banner-heading">
                Best NFTs Marketplace.
              </h1>
              <p className="text-secondtext leading-[2.17rem] tracking-[-0.024rem] max-w-[609px] mt-[32px] mb-[60px] text-[19px] font-mon font-normal">
                Ultrices eget pretium sit euismod mi id. In commodo auctor eget
                congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
                Porta aenean egestas malesuada in pulvinar enim viverra.
              </p>
              <Flex className="py-[38px] gap-[17px]">
                <Button text={"Get Started"} />
                <Button text={"Create NFTs"} />
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
