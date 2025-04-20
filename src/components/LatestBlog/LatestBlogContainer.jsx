import Flex from "../Flex";
import LatestBlogCard from "./LatestBlogCard";
import blogImg1 from "../../assets/images/blog1.png";
import blogImg2 from "../../assets/images/blog2.png";
import blogImg3 from "../../assets/images/blog3.png";
import blogImg4 from "../../assets/images/blog4.png";
const LatestBlogContainer = () => {
  return (
    <Flex className="gap-[20px]  flex-wrap md:flex-row xl:flex-nowrap justify-center items-center">
      <LatestBlogCard blogImg={blogImg1} text={"Arts"} />
      <LatestBlogCard blogImg={blogImg2} text={"Design"} />
      <LatestBlogCard blogImg={blogImg3} text={"NFTs"} />
      <LatestBlogCard blogImg={blogImg4} text={"Arts"} />
    </Flex>
  );
};
export default LatestBlogContainer;
