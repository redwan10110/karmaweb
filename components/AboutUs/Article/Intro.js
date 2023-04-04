import React from "react";

const Intro = () => {
  return (
    <div className="px-[40px] md:px-[80px] lg-px-[120px] xl-[150px] 2xl:px-[190px]">
      <div className=" my-[24px] xl:my-[48px]">
        <span
          className="text-black   text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-[20px]"
        >
          Home
        </span>
        <span
          className="text-black text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-[20px]"
        >
          .
        </span>
        <span
          className="text-secondary text-[18px] leading-[22px]
      xl:text-[21px] xl:leading-[26px] mr-5"
        >
          Environment
        </span>
      </div>
      <div className="xl:mb-[72px] mb-[50px]">
        <h1
          className="text-primary font-bold  text-[48px] leading-[60px] lg:text-[80px] lg:leading-[80px]
        2xl:text-[120px] 2xl:leading-[110px] "
        >
          Planning, wildlife and environmental law
        </h1>
        <span className="bg-secondary h-[10px] w-[100px] block mt-3"></span>
      </div>
    </div>
  );
};

export default Intro;
