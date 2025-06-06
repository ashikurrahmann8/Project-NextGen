import Container from "../components/Container";
import Flex from "../components/Flex";
import newsImg from "../assets/images/newsImg.png";
import Button from "../components/Button.jsx";
import Pattern from "../assets/images/Pattern.png";

const NewsLetter = () => {
  return (
    <section className="mt-[83px] lg:mt-[200px] relative ">
      <img
        src={Pattern}
        className=" absolute bottom-[-312px] left-0 max-w-[528px] max-h-[490px]"
      />
      <Container>
        <Flex className="justify-between items-center flex-col lg:flex-row">
          <div className="z-50">
            <img src={newsImg} />
          </div>
          <div className="xl:max-w-[680px] lg:max-w-[50%] lg:ml-[94px] xl:ml-0">
            <h2 className="font-black text-center lg:text-left text-[32px] xl:text-[56px]">
              Subscribe And get Latest news update about NFTs.
            </h2>
            <p className="font-normal text-lg text-center lg:text-left">
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euismod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Write your email here"
                className="mt-[60px] w-full bg-[#16192A] py-[27px] pl-[40px] outline-none border border-[#2E3150] rounded-[10px] text-[19px] font-normal"
              />
              <Button
                text={"Subscribe"}
                className="absolute right-[14px]  top-[70px] translate-y-[98px] sm:translate-y-0 sm:left-auto sm:translate-x-0 left-1/2  -translate-x-1/2 flex justify-center items-center"
              />
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};
export default NewsLetter;
