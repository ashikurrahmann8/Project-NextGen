import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import brand5 from "../assets/images/brand5.png";
import shade from "../assets/images/Shade.png";
const brandImage = [
  {
    src: brand1,
    alt: "brand1",
  },
  {
    src: brand2,
    alt: "brand2",
  },
  {
    src: brand3,
    alt: "brand3",
  },
  {
    src: brand4,
    alt: "brand4",
  },
  {
    src: brand5,
    alt: "brand5",
  },
];
const Brand = () => {
  return (
    <section className="relative py-[197px]">
      <img src={shade} className="absolute left-0 top-[-1000px] " />
      <Container>
        <Flex className={`${brandImage.length > 5 && "flex-wrap"} gap-[113px]`}>
          {brandImage.map(({ src, alt }) => (
            <div key={alt}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Brand;
