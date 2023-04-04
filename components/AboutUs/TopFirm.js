import legalImg from "/public/assets/FirmIcon/legal.png";
import chamberImg from "/public/assets/FirmIcon/chabpers.png";
import timesImg from "/public/assets/FirmIcon/times.png";
import Image from "next/image";

const TopFirm = () => {
  return (
    <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" py-[70px] md:py-[0] bg-white flex items-center
          justify-center 2xl:justify-start 2xl:pl-[190px] ">
           
              <h2 className="font-bold text-[32px] leading-[50px] md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px] xl:text-[96px]  text-black xl:leading-[96px] hidden md:block">
                Top Ranked<br></br> Firm
              </h2>
              <h2 className="font-bold text-[32px] leading-[50px] md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px] xl:text-[96px]  text-black xl:leading-[96px] block md:hidden">
                Top Ranked Firm
              </h2>
            
          </div>
          <div className=" bg-[#F6F3FF] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]">
            <div className="text-center">
              <Image
              alt="img1"
                src={legalImg}
                className="mb-[70px] mx-auto max-lg:w-[160px] max-lg:h-[160px]"
              ></Image>
              <h4
                className="text-tertiary font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px]"
              >
                Legal 500



              </h4>
              <div className=" text-[18px] leading-[22px] md:text-[21px] md:leading-[32px] text-center text-[rgb(0,0,0,.6)]">
                <p className="">
                Consistently ranked as a leading law firm since the directory was first published.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#FEF6F1] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]">
            <div className="text-center">
              <Image
                src={chamberImg}
                alt="img2"
                className="mb-[70px] mx-auto max-lg:w-[160px] max-lg:h-[160px]"
              ></Image>
              <h4
                className="text-tertiary font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px]"
              >
                Chambers and Partners
              </h4>
              <div className=" text-[18px] leading-[22px] md:text-[21px] md:leading-[32px] text-center text-[rgb(0,0,0,.6)]">
                <p>
                Top ranked in 8 practice areas in the 2021 edition
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F1FEF9] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]">
            <div className="text-center">
              <Image
                src={timesImg}
                alt="img3"
                className="mb-[70px] mx-auto max-lg:w-[160px] max-lg:h-[160px]"
              ></Image>
              <h4
                className="text-[#1B7969] font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px]"
              >
                Times Top 100 Law Firms


              </h4>
              <div className=" text-[18px] leading-[22px] md:text-[21px] md:leading-[32px] text-center text-[rgb(0,0,0,.6)]">
                <p>
                ‘Karma is a champion of the vulnerable and the threatened'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TopFirm