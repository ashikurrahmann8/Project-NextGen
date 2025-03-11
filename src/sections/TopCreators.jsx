import React from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import Button from "../components/Button";
import Flex from "../components/Flex";
import TopCreatorContainer from "../components/top creator/TopCreatorContainer";

const TopCreators = () => {
  return (
    <section className="relative z-50 mt-[200px]">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Top Creators"} className />
          <p className="text-secondtext font-mon font-normal text-[19px] text-center max-w-[678px] mx-auto my-[24px]">
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue.{" "}
          </p>
          <Button text={"View All Creators"} className="self-center" />
        </Flex>
        <TopCreatorContainer/>
      </Container>
    </section>
  );
};

export default TopCreators;
