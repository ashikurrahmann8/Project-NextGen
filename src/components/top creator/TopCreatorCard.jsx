import Button from "../Button";
import creator1 from "../../assets/images/creator1.png";

const TopCreatorCard = () => {
  return (
    <div className=" min-w-92 bg-[#16192A]  pt-[50px] text-center rounded-xl border border-[#2E3150]">
      <img
        src={creator1}
        className="w-[140px] h-[140px] object-cover mx-auto"
      />
      <h2 className="font-extrabold text-[22px] text-[#F2F2F2] pb-10">
        Loura chin
      </h2>
      <Button text={"View Details"} className="bg-primaryBg " />
    </div>
  );
};
export default TopCreatorCard;
