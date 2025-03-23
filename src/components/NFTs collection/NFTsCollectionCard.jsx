import nft1 from "../../assets/images/nftCollection2.png"

const NFTsCollectionCard = () => {
  return (
    <div className="max-w-[400px] rounded-[45%] bg-[#16192A] text-center pb-[87px]  border border-[#2E3150] mt-[60px] pt-[35px] px-[35px]">
      <img src={nft1} className="max-w-[330px] max-h-[330px] mb-[40px] " />
      <h2 className="font-extrabold text-[22px] mb-[14px]">
        Broken collection
      </h2>
      <a href="#" className=" font-medium text-[19px] text-[#BC61F3]">
        View Collection
      </a>
    </div>
  );
};
export default NFTsCollectionCard;
