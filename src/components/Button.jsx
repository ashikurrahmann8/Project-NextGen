import React from "react";
import { Link } from "react-router";

const Button = ({ text, link = "/", className = "" }) => {
  return (
    <Link
      href={link}
      className={`borderlinear hover:btnlinear px-[43px] py-[15px] font-mon text-[19px] text-secondtext font-medium ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
