import Image from "next/image";
import Img1 from "/public/assets/TestimonialImg.png";

const TestimonialImg = () => {
  return (
    <div>
      <div className="px-[20px] md:px-[80px] lg:px-[120px] xl:px-[190px]  ">
        <div className="grid grid-cols-1 xl:grid-cols-2 shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
          <div className="flex  p-[30px] 2xl:p-[70px]">
            <span className="font-bold text-[48px] text-black pr-3 leading-[50px]">
              “
            </span>
            <div>
              <p className="font-semibold text-[21px] leading-[26px] lg:text-[24px] lg:leading-[36px] 2xl:text-[32px] 2xl:leading-[44px] text-black mb-[20px]">
                In taking on these cases, we seek to balance the scales in
                favour of the exploited, the injured and the dispossessed
                against well-resourced powerful entities, whether they are
                well-known British-based multinationals or the British
                Government.
              </p>
              <p className="text-primary text-[21px] leading-[32px]">
                Sally Bollard
              </p>
              <p className="text-secondary text-[21px] leading-[32px]">
                head of the international <br /> team at Karma
              </p>
            </div>
          </div>
          <div className="order-first xl:order-last">
            <Image src={Img1} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialImg;
