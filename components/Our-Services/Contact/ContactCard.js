import Image from "next/image";
import audi from "../../../public/assets/car_log/audi.png";
import bmw from "../../../public/assets/car_log/bmw.png";
import citroen from "../../../public/assets/car_log/citroen.png";
import ford from "../../../public/assets/car_log/Ford.png";
import jaguar from "../../../public/assets/car_log/Jaguar.png";
import landRover from "../../../public/assets/car_log/Land Rover.png";
import mercedes from "../../../public/assets/car_log//Mercedes_Benz.png";
import mini from "../../../public/assets/car_log/Mini.png";
import nissan from "../../../public/assets/car_log/Nissan.png";
import peugeot from "../../../public/assets/car_log/Peugeot.png";
import porsche from "../../../public/assets/car_log/Porsche.png";
import renault from "../../../public/assets/car_log/Renault.png";

import mailIcon from "/public/assets/mail.png";
import phoneIcon from "/public/assets/phone.png";

const ContactCard = () => {
  return (
    <section className="bg-[#EAEBF4] px-[25px] py-[40px] xl:px-[95px]">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-7">
        {/* audi */}
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={audi}
            alt="audi"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Audi
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            alt="bmw"
            src={bmw}
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            BMW
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            alt="citroen"
            src={citroen}
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Citroen
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={ford}
            alt="ford"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Ford
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={jaguar}
            alt="jaguar"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Jaguar
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={landRover}
            alt="landRover"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Land Rover
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={mercedes}
            alt="mercedes"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Mercedes-Benz
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={mini}
            alt="mini"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            MINI
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={nissan}
            alt="nissan"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Nissan
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={peugeot}
            alt="peugeot"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Peugeot
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={porsche}
            alt="porsche"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Porsche
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
        <div className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center">
          <Image
            src={renault}
            alt="renault"
            className="mx-auto mb-[30px] mg:mb-[50px]"
          ></Image>
          <h4
            className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
          >
            Renault
          </h4>
          <p
            className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
          >
            emissions claims
          </p>
          <div className="mb-3 flex items-center justify-center">
            <Image src={mailIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">audi@karma.com</p>
          </div>
          <div className="mb-3 flex items-center justify-center">
            <Image src={phoneIcon} className="mr-3"></Image>
            <p className="text-primary text-[21px] leading-[32px]">0333 242 0355</p>
          </div>
        </div>
      </div>
      {/* <div className="md:ml-20 flex justify-center md:block">
        <button className="text-primary text-[21px] leading-[28px] font-bold px-[24px] py-[10px] my-[100px] rounded border-solid border-2  border-primary">
          View More
        </button>
      </div> */}
    </section>
  );
};

export default ContactCard;
