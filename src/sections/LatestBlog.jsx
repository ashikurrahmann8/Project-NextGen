import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import LatestBlogContainer from "../components/LatestBlog/LatestBlogContainer";
import Title from "../components/Title";

const LatestBlog = () => {
  return (
    <section className="mt-[200px]">
      <Container>
        <Flex className="justify-between">
          <Title title={"Our Latest Blog"}></Title>
          <Button text={"Read our blogs"} className="self-center"></Button>
        </Flex>
        <LatestBlogContainer />
      </Container>
    </section>
  );
};
export default LatestBlog;
