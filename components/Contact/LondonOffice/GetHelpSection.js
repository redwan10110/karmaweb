import backgroundBg from "/public/assets/careers_section_bg.png";

import careerImg from "/public/assets/Careers-people.png";

import Image from "next/image";

const blueBackground = {
  backgroundImage: `url(${backgroundBg.src})`,
  // width: "100%",
  // minHeight: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const GetHelpSection = () => {
  return (
    <div>
      <div className=" px-[32px] py-[60px] 2xl:px-[90px] 2xl:py-[45px]">
        {/* card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0  mb-[36px]">
          <div className="">
            <Image
              src={careerImg}
              alt="people"
              className="w-full h-full"
            ></Image>
          </div>
          <div
            className="px-[25px] py-[28px] xl:p-[110px] bg-secondary"
            style={blueBackground}
          >
            <h2 className="font-bold text-[36px] leading-[45px] 2xl:text-[72px] 2xl:leading-[80px] text-white mb-[20px]">
              Get Help<br></br>Today
            </h2>
            <p
              className="text-[18px] leading-[22px] 2xl:text-[21px] 2xl:leading-[26px]  text-white mb-[48px]
            2xl:mb-[60px]"
            >
              Fill in our short form and we will be in touch
            </p>
            <button
              className="py-[14px] px-[36px] 2xl:py-[22px] 2xl:px-[36px]    text-primary font-bold 2xl:text-[21px] text-[18px] leading-[28px]
            t bg-secondary rounded-md"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelpSection;
