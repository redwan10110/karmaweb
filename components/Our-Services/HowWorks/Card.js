import Image from "next/image";
// import carImg from "/public/assets/Service_HowWorksIcon/started-car.png";
// import detailsImg from "/public/assets/Service_HowWorksIcon/details.png";
// import agreementImg from "/public/assets/Service_HowWorksIcon/agreement.png";
// import vehicleImg from "/public/assets/Service_HowWorksIcon/vehicle.png";

const Card = ({ img, heading, headingColor, bgColor}) => {
  console.log(headingColor);
  return (
    <div>
      <div
        className={`bg-[${bgColor}] flex items-center justify-center py-[70px] px-[50px]  lg:px-[80px] xl:px-[100px] lg:py-[130px]`}
      >
        <div className="text-center">
          <Image
            alt="img1"
            src={img}
            className="mb-[70px] mx-auto hidden md:block"
          ></Image>
          <Image
            alt="img1"
            src={img}
            width={160}
            height={160}
            className="mb-[70px] mx-auto block md:hidden"
          ></Image>
          <h4
            className={`text-[${headingColor}] font-semibold text-[24px] leading-[36px] md:text-[48px] md:leading-[48px]
            mb-[20px]`}
          >
            {heading}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
