import Image from "next/image";
import icon1 from "/public/assets/specialization icon/Frame.png";
import icon2 from "/public/assets/specialization icon/Frame1.png";
import icon3 from "/public/assets/specialization icon/Frame3.png";
import icon4 from "/public/assets/specialization icon/Frame4.png";
// icon for mobile
import mIcon1 from "/public/assets/specialization icon/New folder/icon1.png";
import mIcon2 from "/public/assets/specialization icon/New folder/icon2.png";
import mIcon3 from "/public/assets/specialization icon/New folder/icon3.png";
import mIcon4 from "/public/assets/specialization icon/New folder/icon4.png";
import mIcon5 from "/public/assets/specialization icon/New folder/icon5.png";
import mIcon6 from "/public/assets/specialization icon/New folder/icon6.png";

import styles from "./Hero.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// const swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 4,
//   spaceBetween: 30,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 425px
//     425: {
//       slidesPerView: 1,
//       spaceBetween: 10
//     },
//     // when window width is >= 640px
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 15
//     },
//     1280:{
//       slidesPerView: 3,
//       spaceBetween: 20
//     }
//   }
// })

const HomeSpecialization = () => {
  return (
    <div
      className={`p-[40px] xl:px-[190px] xl:py-[120px] ${styles.HomeSpecializationBG}`}
    >
      <h3 className=" text-[48px] leading-[50px] lg:text-[96px] lg:leading-[96px] mb-[56px] font-bold text-primary 2xl:w-6/12 ">
        We specialise in many aspects
      </h3>
      {/* mobile Version */}
      <div className="grid grid-cols-2 lg:hidden ">
        <div className="py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px] ">
          <Image
            alt="icon"
            src={mIcon1}
            className="mb-[24px]
          mx-auto"
          ></Image>
          <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px] text-center">
            Personal injury
          </h4>
        </div>
        <div className=" py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
          <Image alt="icon2" src={mIcon2} className="mb-[24px] mx-auto"></Image>
          <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px] text-center">
            Human rights
          </h4>
        </div>
        <div className="py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
          <Image
            alt="icon3"
            src={mIcon3}
            className="mb-[24px]
          mx-auto "
          ></Image>
          <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px] text-center">
            Clinical negligence
          </h4>
        </div>
        <div className=" py-[5px] xl:px-[66px] xl:py-[56px] text-secondary mb-[50px]">
          <Image
            alt="icon"
            src={mIcon4}
            className="mb-[24px]
          mx-auto"
          ></Image>
          <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px] text-center">
            Employment
          </h4>
        </div>
        <div className=" py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
          <Image
            alt="icon3"
            src={mIcon5}
            className="mb-[24px]
          mx-auto "
          ></Image>
          <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px] text-center">
            Group claims
          </h4>
        </div>
        <div className="py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
          <Image
            alt="icon3"
            src={mIcon6}
            className="mb-[24px]
          mx-auto"
          ></Image>
          <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px] text-center">
            International
          </h4>
        </div>
      </div>
      <div className="hidden lg:block">
        <Swiper
          style={{
            "--swiper-pagination-color": "#293891",
            "--swiper-pagination-bullet-inactive-color": "#cdced4",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{ clickable: true }}
          freeMode={true}
          grabCursor={true}
          modules={[Pagination, FreeMode]}
          className="mySwiper "
        >
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
            <Image alt="icon" src={icon1} className="mb-[50px]"></Image>
            <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              Personal injury
            </h4>
          </SwiperSlide>
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
            <Image alt="icon2" src={icon2} className="mb-[50px]"></Image>
            <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              International
            </h4>
          </SwiperSlide>
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
            <Image alt="icon3" src={icon3} className="mb-[50px]"></Image>
            <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              Clinical negligence
            </h4>
          </SwiperSlide>
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] text-secondary mb-[50px]">
            <Image alt="icon" src={icon4} className="mb-[50px]"></Image>
            <h4 className="text-secondary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              Personal injury
            </h4>
          </SwiperSlide>
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
            <Image alt="icon3" src={icon3} className="mb-[50px]"></Image>
            <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              Clinical negligence
            </h4>
          </SwiperSlide>
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
            <Image alt="icon3" src={icon3} className="mb-[50px]"></Image>
            <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              Clinical negligence
            </h4>
          </SwiperSlide>
          <SwiperSlide className="px-[30px] py-[5px] xl:px-[66px] xl:py-[56px] mb-[50px]">
            <Image alt="icon3" src={icon3} className="mb-[50px]"></Image>
            <h4 className="text-primary font-semibold text-[18px] leading-[22px] xl:text-[32px] xl:leading-[40px]">
              Clinical negligence
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="py-[10px] px-[56px] xl:py-[22px] xl:px-[36px]  mt-[56px] mb-[30px] text-primary font-bold text-[18px] leading-[28px] xl:text-[21px] xl:leading-[28px] border-2 border-primary rounded-md max-lg:block max-lg:mx-auto">
        View More
      </button>
    </div>
  );
};

export default HomeSpecialization;
