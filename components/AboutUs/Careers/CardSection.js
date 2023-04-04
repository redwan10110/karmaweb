import backgroundBg from "/public/assets/careers_section_bg.png";

import careerImg from "/public/assets/Careers-people.png";
import careerImg2 from "/public/assets/Careers-people2.png";
import careerImg3 from "/public/assets/Careers-people3.png";
import Image from "next/image";

const blueBackground = {
  backgroundImage: `url(${backgroundBg.src})`,
  // width: "100%",
  // minHeight: "70vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
const CardSection = () => {
  return (
    <>
      {/* card 1 */}
      <div className=" px-[32px] py-[60px] 2xl:p-[90px]">
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
              Current<br></br>vacancies
            </h2>
            <p
              className="text-[18px] leading-[22px] 2xl:text-[21px] 2xl:leading-[26px]  text-white mb-[48px]
            2xl:mb-[60px]"
            >
              Find out about our graduate trainee opportunities in London and
              Manchester.
            </p>
            <button
              className="py-[14px] px-[36px] 2xl:py-[22px] 2xl:px-[36px]    text-primary font-bold 2xl:text-[21px] text-[18px] leading-[28px]
            t bg-secondary rounded-md"
            >
              Find out more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0  mb-[36px]">
          <div
            className="px-[25px] py-[28px] xl:p-[110px] bg-secondary"
            style={blueBackground}
          >
            <h2 className="font-bold text-[36px] leading-[45px] 2xl:text-[72px] 2xl:leading-[80px] text-white mb-[20px]">
            Trainee Solicitor<br></br>opportunities
            </h2>
            <p
              className="text-[18px] leading-[22px] 2xl:text-[21px] 2xl:leading-[26px]  text-white mb-[48px]
            2xl:mb-[60px]"
            >
              Find out about our graduate trainee opportunities in London and
              Manchester.
            </p>
            <button
              className="py-[14px] px-[36px] 2xl:py-[22px] 2xl:px-[36px]    text-primary font-bold 2xl:text-[21px] text-[18px] leading-[28px]
            t bg-secondary rounded-md"
            >
              Find out more
            </button>
          </div>
          <div className="order-first lg:order-last">
            <Image
              src={careerImg2}
              alt="people"
              className="w-full h-full "
            ></Image>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0  mb-[36px]">
          <div className="">
            <Image
              src={careerImg3}
              alt="people"
              className="w-full h-full"
            ></Image>
          </div>
          <div
            className="px-[25px] py-[28px] xl:p-[110px] bg-secondary"
            style={blueBackground}
          >
            <h2 className="font-bold text-[36px] leading-[45px] 2xl:text-[72px] 2xl:leading-[80px] text-white mb-[20px]">
              Student<br></br>opportunities
            </h2>
            <p
              className="text-[18px] leading-[22px] 2xl:text-[21px] 2xl:leading-[26px]  text-white mb-[48px]
            2xl:mb-[60px]"
            >
              Find out about our graduate trainee opportunities in London and
              Manchester.
            </p>
            <button
              className="py-[14px] px-[36px] 2xl:py-[22px] 2xl:px-[36px]    text-primary font-bold 2xl:text-[21px] text-[18px] leading-[28px]
            t bg-secondary rounded-md"
            >
              Find out more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
