import Image from "next/image";
import image1 from "/public/assets/useKarma/1.png";
import image2 from "/public/assets/useKarma/2.png";
import image3 from "/public/assets/useKarma/3.png";
import icon1 from "/public/assets/useKarma/icon1.png";
import icon2 from "/public/assets/useKarma/icon2.png";
import icon3 from "/public/assets/useKarma/icon3.png";
const UseKarma = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" py-[70px] md:py-[0] bg-white flex items-center
          justify-center 2xl:justify-start 2xl:pl-[190px] ">
           
              <h2 className="font-bold text-[48px] leading-[50px] lg:text-[72px] lg:leading-[72px] xl:text-[96px]  text-black xl:leading-[96px] hidden md:block">
                Why use <br></br> Karma?
              </h2>
              
              <h2 className="font-bold text-[48px] leading-[50px] lg:text-[72px] lg:leading-[72px] xl:text-[96px]  text-black xl:leading-[96px] block md:hidden">
                Why Karma?
              </h2>
            
          </div>
          <div className=" bg-[#F6F3FF] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]">
            <div className="text-center">
              <Image
              alt="img1"
                src={image1}
                className="mb-[70px] mx-auto hidden lg:block"
              ></Image>
              <Image
              alt="img1"
                src={icon1}
                width={160}
                height={160}
                className="mb-[70px] mx-auto block lg:hidden"
              ></Image>
              <h4
                className="text-primary font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px] hidden lg:block"
              >
                Leading experts
              </h4>
              <h4
                className="text-primary font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px] block lg:hidden"
              >
                £1bn of compensation

              </h4>
              <div className=" text-[21px] leading-[22px] md:text-[21px] md:leading-[32px] text-center text-[rgb(0,0,0,.6)]">
                <p className="">
                  We are the joint-lead lawyers in the emissions litigation on
                  behalf of UK Volkswagen owners, who recently won the first
                  round of their emissions case against Volkswagen in the UK
                  High Court.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#FEF6F1] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]">
            <div className="text-center">
              <Image
                src={image2}
                alt="img2"
                className="mb-[70px] mx-auto hidden lg:block"
              ></Image>
              <Image
                src={icon2}
                alt="img2"
                width={160}
                height={160}
                className="mb-[70px] mx-auto block lg:hidden"
              ></Image>
              <h4
                className="text-tertiary font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px] hidden lg:block"
              >
                High Court success
              </h4>
              <h4
                className="text-tertiary font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px] block lg:hidden"
              >
                UK's leading experts
              </h4>
              <div className=" text-[21px] leading-[22px] md:text-[21px] md:leading-[32px] text-center text-[rgb(0,0,0,.6)]">
                <p>
                  In April 2020, the High Court in London found that the
                  decision by the KBA, the German road vehicle authority, that
                  the software was a ‘defeat device’ was binding in the English
                  High Court.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F1FEF9] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]">
            <div className="text-center">
              <Image
                src={image3}
                alt="img3"
                className="mb-[70px] mx-auto hidden lg:block"
              ></Image>
              <Image
                src={icon3}
                width={160}
                height={160}
                alt="img3"
                className="mb-[70px] mx-auto block lg:hidden"
              ></Image>
              <h4
                className="text-[#1B7969] font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px] hidden lg:block"
              >
                No win - No fee
              </h4>
              <h4
                className="text-[#1B7969] font-semibold text-[24px] leading-[36px] md:text-[36px] md:leading-[36px]
                mb-[20px] block lg:hidden"
              >
                Ranked number one

              </h4>
              <div className=" text-[21px] leading-[22px] md:text-[21px] md:leading-[32px] text-center text-[rgb(0,0,0,.6)]">
                <p className="hidden lg:block">
                  We are the joint-lead lawyers in the emissions litigation on
                  behalf of UK Volkswagen owners, who recently won the first
                  round of their emissions case against Volkswagen in the UK
                  High Court.
                </p>
                <p className="block lg:block">
                  We are the joint-lead lawyers in the emissions litigation on
                  behalf of UK Volkswagen owners, who recently won the first
                  round of their emissions case against Volkswagen in the UK
                  High Court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseKarma;
