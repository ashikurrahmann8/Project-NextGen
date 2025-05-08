import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/images/logo.png";
import Button from "../components/Button";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { GiCrossedSabres } from "react-icons/gi";

let menu = [
  { name: "Home", link: "/" },
  { name: "Marketplace", link: "/marketplace" },
  { name: "Artist", link: "/artist" },
  { name: "Community", link: "/community" },
];

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const handleNav = () => {
    setNavShow(!navShow);
  };

  return (
    <nav className="relative z-50">
      <Container>
        <Flex className="items-center justify-between">
          <div className="py-[42px]">
            <img src={logo} />
          </div>
          <div className="lg:hidden block text-4xl" onClick={handleNav}>
            {navShow ? <GiCrossedSabres /> : <TiThMenu />}
          </div>
          {navShow && (
            <menu>
              <ul className="flex gap-14 flex-col lg:hidden border border-white absolute top-25 right-8 rounded-2xl bg-[#04040C] w-[80vw] py-4 px-4 z-50 ">
                {menu.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "navItem activeNavItem" : "navItem"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </menu>
          )}

          <menu className="hidden lg:block">
            <ul className="flex gap-14 py-[49px] ">
              {menu.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "navItem activeNavItem" : "navItem"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </menu>
          <Flex className="py-[38px] gap-[17px] hidden lg:flex">
            <Button text={"Log In"} />
            <Button text={"Sign Up"} />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
