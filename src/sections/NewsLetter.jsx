import Container from "../components/Container";
import Flex from "../components/Flex";
import newsImg from "../assets/images/newsImg.png";
import Button from "../components/Button.jsx";

const NewsLetter = () => {
  return (
    <section className="mt-[200px]">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <img src={newsImg} />
          </div>
          <div className="max-w-[680px]">
            <h2 className="font-black text-[56px]">
              Subscribe And get Latest news update about NFTs.
            </h2>
            <p className="font-normal text-lg">
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
                className="absolute right-[14px] top-[70px]"
              />
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};
export default NewsLetter;
