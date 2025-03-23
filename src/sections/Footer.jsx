import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/images/logo.png";
import SocialMedia from "../components/SocialMedia";
import shade3 from "../assets/images/Shade 3.png";

let fotterContents = [
  {
    heading: "Marketplace",
    links: [
      { name: "NFTs", link: "https://www.youtube.com/" },
      { name: "Art", link: "#" },
      { name: "Collectibles", link: "#" },
      { name: "Virtual world", link: "#" },
    ],
  },
  {
    heading: "Info",
    links: [
      { name: "Activity", link: "#" },
      { name: "Stats", link: "#" },
      { name: "Rankings", link: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About", link: "#" },
      { name: "Support", link: "#" },
      { name: "Features", link: "#" },
      { name: "Top Creators", link: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Info", link: "#" },
      { name: "Affiliates", link: "#" },
      { name: "Associated", link: "#" },
      { name: "Blog", link: "#" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="mt-[400px] relative">
      <img
        src={shade3}
        className="absolute z-[-50] right-[0px] top-[-816px] "
      />
      <Container>
        <Flex className="justify-between">
          <div className="w-[400px]">
            <img src={logo} className="mb-[25px]" />
            <p className="font-normal text-lg mb-[25px]">
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue. Posuere ac in in nisl sed augue.
            </p>
            <SocialMedia />
          </div>
          <Flex className="justify-evenly gap-[150px]">
            {fotterContents.map((item) => (
              <div>
                <h2 key={item.heading} className="font-black text-[22px] mb-[24px]">
                  {item.heading}
                </h2>
                <ul>
                  {item.links.map((item2) => (
                    <li
                      key={`${item2.link} - ${item2.name}`}
                      className="font-normal text-[19px] mb-[15px]"
                    >
                      <a href={item2.link}>{item2.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Flex>
        </Flex>
      </Container>
      {/* footer bottom part */}
      <div className="mt-[99px] mb-[30px] border-t-2 border-[#1C1D32] "></div>
      <Container>
        <h4 className="text-[19px] text-center mb-[30px]">
          © 2022 Copyright{" "}
          <span className="font-bold text-[19px]">TemplatesJungle</span>. All
          rights reserved
        </h4>
      </Container>
    </footer>
  );
};
export default Footer;
