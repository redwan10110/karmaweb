import React from "react";

const TextCard = ({heading,text}) => {
  return (
    <div>
      <div className="bg-white flex items-center flex-wrap justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px] h-full max-lg:text-center">
        <div className="">
          <h4
            className="text-black font-semibold text-[24px] leading-[48px] md:text-[36px] md:leading-[48px]
                mb-[20px]"
          >
            {heading}
          </h4>
          <div className=" ">
            <p className="text-[18px] leading-[22px] md:text-[24px] md:leading-[30px] text-[rgb(0,0,0,.6)]">
            {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
