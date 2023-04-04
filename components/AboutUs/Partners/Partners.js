import Image from "next/image";
import Link from "next/link";
import arrow from "/public/assets/Arrow.png";
import partner1Img from "/public/assets/Partners/partners.png";
import partner2Img from "/public/assets/Partners/partners1.png";
import partner3Img from "/public/assets/Partners/partners2.png";

const Partners = () => {
  return (
    <div>
      <div className=" px-[20px] xl:px-[90px] py-[30px]">
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
            {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={partner1Img} alt="news1" className="w-full"></Image>
            <div className="px-[30px] py-[16px]">
              <div className="my-[15px] ">
                <p className="text-primary font-semibold text-[14px] leading-[20px] xl:text-[16px] xl:leading-[32px]">
                  Cycling, Road traffic collisions
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[29px] xl:text-[36px] xl:leading-[32px]
              font-semibold my-[20px]">
                Andrew Bradley
              </h3>
              <p className="text-[18px] leading-[22px] xl:text-[21px] text-[#666666] xl:leading-[32px] py-6">
                Andrew is head of the Manchester office and specialises in
                personal injury claims, especially those injured whilst cycling
              </p>
              <div className="flex items-center mb-4">
                <Link
                  href={"/"}
                  className="text-primary text-[18px]
                leading-[32px] lg:text-[21px]
                lg:leading-[32px] mr-4"
                >
                  View Profile{" "}
                </Link>
                <Image src={arrow} className="w-[8px] h-[14px]"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
