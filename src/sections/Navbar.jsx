import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/images/logo.png";
import Button from "../components/Button";
import { Link, NavLink } from "react-router";
let menu = [
  { name: "Home", link: "/" },
  { name: "Marketplace", link: "/marketplace" },
  { name: "Artist", link: "/artist" },
  { name: "Community", link: "/community" },
];

const Navbar = () => {
  return (
    <nav className="relative z-50">
      <Container>
        <Flex className="items-center justify-between">
          <div className="py-[42px]">
            <img src={logo} />
          </div>
          <menu>
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
          <Flex className="py-[38px] gap-[17px]">
            <Button text={"Log In"} />
            <Button text={"Sign Up"} />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
