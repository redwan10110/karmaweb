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

import arrow from "../../../public/assets/arrow-down.png";

import { useState } from "react";
const FindCar = () => {
  const [numCardsToShow, setNumCardsToShow] = useState(5);
  const cars = [
    {
      img: audi,
      name: "Audi",
      title: "emissions claims",
    },
    {
      img: bmw,
      name: "BMW",
      title: "emissions claims",
    },
    {
      img: citroen,
      name: "Citroen",
      title: "emissions claims",
    },
    {
      img: ford,
      name: "Ford",
      title: "emissions claims",
    },
    {
      img: jaguar,
      name: "Jaguar",
      title: "emissions claims",
    },
    {
      img: landRover,
      name: "Land Rover",
      title: "emissions claims",
    },
    {
      img: mercedes,
      name: "Mercedes-Benz",
      title: "emissions claims",
    },
    {
      img: mini,
      name: "MINI",
      title: "emissions claims",
    },
    {
      img: nissan,
      name: "Nissan",
      title: "emissions claims",
    },
    {
      img: peugeot,
      name: "Peugeot",
      title: "emissions claims",
    },
    {
      img: porsche,
      name: "Porsche",
      title: "emissions claims",
    },
    {
      img: renault,
      name: "Renault",
      title: "emissions claims",
    },
  ];
  const handleViewMore = () => {
    setNumCardsToShow(numCardsToShow + 7);
  };

  return (
    <>
      <section className="bg-[#EAEBF4] px-[25px] py-[40px] xl:p-[95px] block lg:hidden">
        <h1 className="text-primary font-bold text-[28px] leading-[48px] lg:text-[36px] lg:leading-[48px] mb-[32px] ml-5 xl:ml-20">
          Find my car
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
          {cars.slice(0, numCardsToShow).map((car, index) => (
            // render card component here
            <div
              className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center"
              key={index}
            >
              <Image
                src={car.img}
                alt="audi"
                className="mx-auto mb-[30px] mg:mb-[50px]"
              ></Image>
              <h4
                className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
              >
                {car.name}
              </h4>
              <p
                className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
              >
                {car.title}
              </p>
            </div>
          ))}

          {numCardsToShow < cars.length && (
            <div className="md:ml-20 flex justify-center md:block">
              <button
                className="text-primary text-[21px] leading-[28px] font-bold px-[24px] py-[10px] my-[50px] rounded border-solid border-2  max-md:w-2/3 border-primary"
                onClick={handleViewMore}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>
      <section className="bg-[#EAEBF4] px-[25px] py-[40px] xl:p-[95px] hidden lg:block">
        <h1 className="text-primary font-bold text-[28px] leading-[48px] lg:text-[36px] lg:leading-[48px] mb-[32px] ml-5 xl:ml-20">
          Find my car
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
          {cars.map((car, index) => (
            // render card component here
            <div
              className="bg-white px-[23px] pt-[36px] pb-[12px] lg:px-[30px] lg:pt-[60px] lg:pb-[20px] text-center"
              key={index}
            >
              <Image
                src={car.img}
                alt="audi"
                className="mx-auto mb-[30px] mg:mb-[50px]"
              ></Image>
              <h4
                className="text-primary text-[24px]
                leading-[36px] semibold mb-3"
              >
                {car.name}
              </h4>
              <p
                className="text-[#00000099] text-[18px]
                leading-[24px] mb-5"
              >
                {car.title}
              </p>
            </div>
          ))}

          <div className="md:ml-20 flex justify-center md:block">
            <button className="text-primary text-[21px] leading-[48px] font-medium flex items-center">
                <Image src={arrow} alt="down-arrow-icon"  className="mr-2 w-[24px] h-[24px]"></Image>
              View More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindCar;
