import Flex from "../Flex";
import TopCreatorCard from "./TopCreatorCard";
import img1 from "../../assets/images/creator1.png";
import img2 from "../../assets/images/creator2.png";
import img3 from "../../assets/images/creator3.png";
import img4 from "../../assets/images/creator4.png";

const TopCreatorContainer = () => {
  return (
    <Flex className="mt-[60px] gap-10 lg:gap-5 flex-wrap lg:flex-nowrap justify-center items-center ">
      <TopCreatorCard img={img1} text={"Loura chin"} />
      <TopCreatorCard img={img2} text={"Kelvin Glan"} />
      <TopCreatorCard img={img3} text={"Glam Lee"} />
      <TopCreatorCard img={img4} text={"Alameda"} />
    </Flex>
  );
};
export default TopCreatorContainer;
