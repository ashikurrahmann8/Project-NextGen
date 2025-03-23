import Flex from "../Flex";
import NFTsCollectionCard from "./NFTsCollectionCard";

const NFTsCollectionContainer = () => {
  return (
    <Flex className="gap-x-[20px]">
      <NFTsCollectionCard />
      <NFTsCollectionCard />
      <NFTsCollectionCard />
      <NFTsCollectionCard />
    </Flex>
  );
};
export default NFTsCollectionContainer;
