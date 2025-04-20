const LatestBlogCard = ({ blogImg, text }) => {
  return (
    <div className="bg-[#16192A] border border-[#2E3150] rounded-[10px] mt-[60px] sm:mt-[30px] w-full max-w-[300px] xl:max-w-[385px] px-3 sm:px-0">
      <img
        src={blogImg}
        className="pt-[35px] sm:pt-[25px] pb-[20px] px-[10px] sm:px-[35px] object-cover"
      />
      <div className="mx-[14px] sm:mx-[35px] mb-[35px] sm:mb-[20px]">
        <a href="#" className="font-medium text-[19px] text-[#BC61F3]">
          {text}
        </a>
        <h2 className="font-extrabold text-[22px] sm:text-[17px] xl:text-[22px] tracking-[0.03em]">
          Best NFTs arts collections from best artists
        </h2>
      </div>
    </div>
  );
};
export default LatestBlogCard;
