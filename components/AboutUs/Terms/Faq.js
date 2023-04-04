import React from "react";

const Faq = ({heading,text,}) => {
  return (
    <div className="px-[40px] py-[20px] md:px-[80px] lg:px-[120px] xl:px-[190px] xl:py[100px] mb-[38px] xl:mb[52px]">
      <h3
        className="text-black text-[32px] leading-[38px] mb-[16px]
        xl:text-[48px] xl:leading-[48px] font-bold 2xl:w-6/12 "
      >
        {heading}
      </h3>
      
      <p className="text-black text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] 2xl:w-6/12 mb-8">
      {text}
      </p>
    </div>
  );
};

export default Faq;
