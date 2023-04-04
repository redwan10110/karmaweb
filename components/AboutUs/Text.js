import React from "react";

const Text = ({info}) => {
  return (
    <div className="px-[40px] py-[50px] md:px-[80px] lg:px-[120px] xl:px-[190px] xl:py[80px]">
      <p className="text-black text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] 2xl:w-6/12 mb-5">
       {info}
      </p>


    </div>
  );
};

export default Text;
