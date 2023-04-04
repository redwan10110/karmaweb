import React from "react";

const TextSection = ({boldText,semiBoltText,normalText}) => {
  return (
    <div className="px-[40px] py-[20px] md:px-[80px] lg:px-[120px] xl:px-[190px] xl:py[100px]">
      <p
        className="text-black text-[32px] leading-[38px] mb-[48px]
        xl:text-[48px] xl:leading-[48px] xl:mb-[36px] font-bold 2xl:w-6/12 "
      >
        {boldText}
      </p>
      <p className="text-black text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] 2xl:w-6/12 mb-8 font-semibold">
      {semiBoltText}
      </p>
      <p className="text-black text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] 2xl:w-6/12 mb-8">
      {normalText}
      </p>
    </div>
  );
};

export default TextSection;
