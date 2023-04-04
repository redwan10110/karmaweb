import Image from "next/image";
import Card from "./Card";
import vac from "/public/assets/vac.png";
import vac1 from "/public/assets/vac1.png";
import vac2 from "/public/assets/vac2.png";
import vac3 from "/public/assets/vac3.png";
import vac4 from "/public/assets/vac4.png";
const VacanciesCards = () => {

  return (
    <>
      <div className=" px-[20px] xl:px-[90px] py-[30px]">
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {/* if data is coming from API */}
            {/* {
                data.map((item)=>(
                    <Card key={id} img={img} title={title} date={date}></Card>
                ))
            } */}
          {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={vac} alt="vacancies" className="w-full"></Image>
            <div className="px-[30px] py-[20px] 2xl:p-[40px]">
              <h3
                className="text-black text-[21px] leading-[32px] xl:text-[32px] xl:leading-[32px]
              font-semibold my-[10px]"
              >
                Leeds vacancies
              </h3>
              <p className="text-[16px] leading-[32px] xl:text-[18px] text-[#666666] xl:leading-[32px] py-2">
              From 22 Jan 2023
              </p>
            </div>
          </div>
          {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={vac1} alt="vacancies" className="w-full"></Image>
            <div className="px-[30px] py-[20px] 2xl:p-[40px]">
              <h3
                className="text-black text-[21px] leading-[32px] xl:text-[32px] xl:leading-[32px]
              font-semibold my-[10px]"
              >
                Leeds vacancies
              </h3>
              <p className="text-[16px] leading-[32px] xl:text-[18px] text-[#666666] xl:leading-[32px] py-2">
              From 22 Jan 2023
              </p>
            </div>
          </div>
          {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={vac2} alt="vacancies" className="w-full"></Image>
            <div className="px-[30px] py-[20px] 2xl:p-[40px]">
              <h3
                className="text-black text-[21px] leading-[32px] xl:text-[32px] xl:leading-[32px]
              font-semibold my-[10px]"
              >
                Leeds vacancies
              </h3>
              <p className="text-[16px] leading-[32px] xl:text-[18px] text-[#666666] xl:leading-[32px] py-2">
              From 22 Jan 2023
              </p>
            </div>
          </div>
          {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={vac3} alt="vacancies" className="w-full"></Image>
            <div className="px-[30px] py-[20px] 2xl:p-[40px]">
              <h3
                className="text-black text-[21px] leading-[32px] xl:text-[32px] xl:leading-[32px]
              font-semibold my-[10px]"
              >
                Leeds vacancies
              </h3>
              <p className="text-[16px] leading-[32px] xl:text-[18px] text-[#666666] xl:leading-[32px] py-2">
              From 22 Jan 2023
              </p>
            </div>
          </div>
          {/* card */}
          <div className="border-[#D3D7EA] shadow-[0px_0px_2px_2px_rgba(0,0,0,0.25)]">
            <Image src={vac4} alt="vacancies" className="w-full"></Image>
            <div className="px-[30px] py-[20px] 2xl:p-[40px]">
              <h3
                className="text-black text-[21px] leading-[32px] xl:text-[32px] xl:leading-[32px]
              font-semibold my-[10px]"
              >
                Leeds vacancies
              </h3>
              <p className="text-[16px] leading-[32px] xl:text-[18px] text-[#666666] xl:leading-[32px] py-2">
              From 22 Jan 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VacanciesCards;
