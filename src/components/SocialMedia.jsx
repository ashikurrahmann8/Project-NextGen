import fb from "../assets/images/fb.png";
import insta from "../assets/images/insta.png";
import twitter from "../assets/images/twitter.png";
import li from "../assets/images/in.png";
import yt from "../assets/images/yt.png";
import Flex from "./Flex.jsx";

let socialMediaLinks = [
  {
    icon: "facebook",
    link: "https://www.facebook.com/",
    iconLogo: fb,
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/",
    iconLogo: insta,
  },
  {
    icon: "x",
    link: "https://www.x.com/",
    iconLogo: twitter,
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/",
    iconLogo: li,
  },
  {
    icon: "youtube",
    link: "https://www.youtube.com/",
    iconLogo: yt,
  },
];

const SocialMedia = () => {
  return (
    <Flex className="items-center gap-[13px]">
      {socialMediaLinks.map(({ icon, link, iconLogo }) => (
        <Flex
          key={icon}
          className="w-[46px] h-[46px] rounded-full bg-[#2E3450] border border-[#535488] justify-center items-center hover:bg-[#16192A]"
        >
          <a href={link}>
            <img src={iconLogo} />
          </a>
        </Flex>
      ))}
    </Flex>
  );
};
export default SocialMedia;
