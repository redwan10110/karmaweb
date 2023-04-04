import React from "react";

const Testimonial = () => {
  return (
    <div className="px-[5px] md:px-[80px] lg:px-[120px] xl:px-[190px] 2xl:w-6/12">
      <div className="flex  pb-[100px]">
        <span className="font-bold text-[48px] text-black pr-3 leading-[50px]">
          “
        </span>
        <div>
          <p className="font-semibold text-[21px] leading-[26px] lg:text-[24px] lg:leading-[32px] 2xl:text-[32px] 2xl:leading-[44px] text-black mb-[20px]">
          In taking on these cases, we seek to balance the scales in favour of the exploited, the injured and the dispossessed against well-resourced powerful entities, whether they are well-known British-based multinationals or the British Government.
          </p>
          <p className="text-primary text-[21px] leading-[32px]">
            Sally Bollard
          </p>
          <p className="text-secondary text-[21px] leading-[32px]">
            head of the international <br/> team at Karma

          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
