import Image from "next/image";
import car from "/public/assets/Car.png";
import vehicleBg from "/public/assets/vehiclebg.png";

const Vehicle = () => {
  const vehicleGreenBg = {
    backgroundImage: `url(${vehicleBg.src})`,
    // width: '100vw',
    // height: '100vh',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="px-[23px] py-[35px] xl:p-[90px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap-0">
        <div className="">
          <Image src={car}
          className="w-full h-full"
          alt="car" ></Image>
        </div>
        <div className=" p-[25px] xl:p-[110px] " style={vehicleGreenBg}>
          <h2 className=" text-[48px] leading-[50px]
          xl:text-[72px] xl:leading-[80px] font-bold text-primary mb-[10px] xl:mb-[20px] ">
          Vehicle emission <br></br>claims
          </h2>
          <p className="text-[21px] leading-[26px]  text-[#232424] mb-[34px] xl:mb-[60px]">
          <b>Karma</b> acts for more than 260k diesel drivers who could receive compensation worth up to 75% of the purchase price of their vehicle.
          </p>
          <button className="py-[18px] px-[60px]    text-white font-bold text-[21px] bg-primary rounded-md max-md:w-full">Eligibility checker</button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
