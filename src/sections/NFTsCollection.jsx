import Container from "../components/Container";
import Flex from "../components/Flex";
import NFTsCollectionContainer from "../components/NFTs collection/NFTsCollectionContainer";
import Title from "../components/Title";

const NFTsCollection = () => {
  return (
    <section className="mt-[200px]">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"NFTs collections"}></Title>
          <p className="font-normal text-[19px]">
            Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
            augue.
          </p>
          <NFTsCollectionContainer />
        </Flex>
      </Container>
    </section>
  );
};
export default NFTsCollection;
