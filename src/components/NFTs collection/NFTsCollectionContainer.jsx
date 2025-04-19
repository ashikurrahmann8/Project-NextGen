import Flex from "../Flex";
import NFTsCollectionCard from "./NFTsCollectionCard";
import nftC1 from "../../assets/images/nftC1.png";
import nftC2 from "../../assets/images/nftC2.png";
import nftC3 from "../../assets/images/nftC3.png";
import nftC4 from "../../assets/images/nftC4.png";

const NFTsCollectionContainer = () => {
  return (
    <Flex className="gap-x-[20px] flex-col lg:flex-row lg:flex-nowrap " >
      <NFTsCollectionCard nftC={nftC1} />
      <NFTsCollectionCard nftC={nftC2} />
      <NFTsCollectionCard nftC={nftC3} />
      <NFTsCollectionCard nftC={nftC4} />
    </Flex>
  );
};
export default NFTsCollectionContainer;
