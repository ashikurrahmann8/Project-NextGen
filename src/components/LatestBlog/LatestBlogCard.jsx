import blog1 from "../../assets/images/blog2.png";

const LatestBlogCard = () => {
  return (
    <div className="bg-[#16192A] border border-[#2E3150] rounded-[10px] mt-[60px]">
      <img src={blog1} className="pt-[35px] pb-[20px] px-[35px]" />
      <div className="mx-[35px] mb-[35px]">
        <a href="#" className="font-medium text-[19px] text-[#BC61F3]">
          Arts
        </a>
        <h2 className="font-extrabold text-[22px] tracking-[0.03em]">
          Best NFTs arts collections from best artists
        </h2>
      </div>
    </div>
  );
};
export default LatestBlogCard;
