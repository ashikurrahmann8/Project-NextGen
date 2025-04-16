import Button from "../Button";

const TopCreatorCard = ({ img, text }) => {
  return (
    <div className=" z-50 w-full sm:w-[46%]  lg:min-w-[100px] bg-[#16192A]  pt-[50px] text-center rounded-xl border border-[#2E3150]">
      <img src={img} className="w-[140px] h-[140px] object-cover mx-auto" />
      <h2 className="font-extrabold text-[22px] text-[#F2F2F2] pb-10">
        {text}
      </h2>
      <Button text={"View Details"} className="bg-primaryBg " />
    </div>
  );
};
export default TopCreatorCard;
