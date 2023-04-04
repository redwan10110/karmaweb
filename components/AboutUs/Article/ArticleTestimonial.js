import Image from "next/image";
import img from "/public/assets/articleTestimonial.png";
import backgroundBg from "/public/assets/careers_section_bg.png";

const ArticleTestimonial = () => {
  const blueBackground = {
    backgroundImage: `url(${backgroundBg.src})`,
    // width: "100%",
    // minHeight: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className=" px-[32px] py-[30px] 2xl:p-[45px]">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0  mb-[36px]">
        <div className="">
          <Image src={img} alt="people" className="w-full h-full"></Image>
        </div>
        <div
          className="px-[50px] py-[28px] xl:p-[110px] bg-secondary"
          style={blueBackground}
        >
          <div className="">
            <div className="flex  2xl:pb-[100px]">
              <span className="font-bold text-[48px] text-white pr-1 leading-[50px]">
                “
              </span>
              <div>
                <p className="font-semibold text-[21px] leading-[26px] lg:text-[24px] lg:leading-[32px] 2xl:text-[32px] 2xl:leading-[44px] text-white mb-[20px]">
                  In taking on these cases, we seek to balance the scales in
                  favour of the exploited, the injured and the dispossessed
                  against well-resourced powerful entities, whether they are
                  well-known British-based multinationals or the British
                  Government.
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  Sally Bollard
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  head of the international <br /> team at Karma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleTestimonial;
