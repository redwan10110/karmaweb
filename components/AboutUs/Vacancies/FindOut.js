import Image from "next/image";
import arrow from "/public/assets/Arrow.png";

const FindOut = () => {
  return (
    <section className="bg-white px-[25px] py-[40px] xl:p-[95px]">
      <h1 className="text-black font-bold text-[32px] leading-[38px] lg:text-[46px] lg:leading-[48px] mb-[32px] lg:ml-20 ml-5 hidden lg:block">
        Find out more about Karma
      </h1>
      <h1 className="text-black font-bold text-[32px] leading-[38px] lg:text-[46px] lg:leading-[48px] mb-[50px] lg:ml-20 ml-5 block lg:hidden">
        Find out more <br/> about Karma
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7">
        <div className="  border-[#35c9e3] flex items-center justify-between px-[20px] py-[30px] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
          <h4 className="text-primary text-[18px] leading-[28px] xl:text-[21px] font-semibold">
            Our People
          </h4>
          <Image src={arrow}  />
        </div>
        <div className="  border-[#35c9e3] flex items-center justify-between px-[20px] py-[30px] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
          <h4 className="text-primary text-[18px] leading-[28px] xl:text-[21px] font-semibold">
          Karma Careers
          </h4>
          <Image src={arrow}  />
        </div>
        <div className="  border-[#35c9e3] flex items-center justify-between px-[20px] py-[30px] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
          <h4 className="text-primary text-[18px] leading-[28px] xl:text-[21px] font-semibold">
          Social justice 
          </h4>
          <Image src={arrow}  />
        </div>
        <div className="  border-[#35c9e3] flex items-center justify-between px-[20px] py-[30px] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
          <h4 className="text-primary text-[18px] leading-[28px] xl:text-[21px] font-semibold">
          Press Office
          </h4>
          <Image src={arrow}  />
        </div>

      </div>
    </section>
  )
}

export default FindOut