import React from "react";

const Title = ({ title, className = "" }) => {
  return (
    <div
      className={`${className} font-mon font-black text-[#F2F2F2] text-[35px] sm:text-[56px]`}
    >
      {title}
    </div>
  );
};

export default Title;
