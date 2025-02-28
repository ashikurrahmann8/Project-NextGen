import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";

const NFT = () => {
  return (
    <section className="relative z-50">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Collect some NFTs"} className />
        </Flex>
      </Container>
    </section>
  );
};
export default NFT;
