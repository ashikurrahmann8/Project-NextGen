import Flex from "../Flex";
import TopCreatorCard from "./TopCreatorCard";

const TopCreatorContainer = () => {
  return (
    <Flex className="mt-[60px] gap-5">
      <TopCreatorCard />
      <TopCreatorCard />
      <TopCreatorCard />
      <TopCreatorCard />
    </Flex>
  );
};
export default TopCreatorContainer;
