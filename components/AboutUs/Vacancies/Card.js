import Image from "next/image";
import React from "react";

const Card = ({ img, title, date }) => {
    const vacImg = img.src;
    console.log(img.src);
  return (
    <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
      <Image src={vacImg} width={100} alt="vacancies" className="w-full"></Image>
      <div className="px-[30px] py-[20px] 2xl:p-[40px]">
        <h3
          className="text-black text-[21px] leading-[32px] xl:text-[32px] xl:leading-[32px]
              font-semibold my-[10px]"
        >
          {title}
        </h3>
        <p className="text-[16px] leading-[32px] xl:text-[18px] text-[#666666] xl:leading-[32px] py-2">
          {date}
        </p>
        
      </div>
    </div>
  );
};

export default Card;
