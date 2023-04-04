import Image from "next/image";
import img1 from "/public/assets/newsSlide/img.png";
import img2 from "/public/assets/newsSlide/img2.png";
import img3 from "/public/assets/newsSlide/img3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const NewsSlider = ({ title }) => {
  return (
    <div>
      <div className="px-[20px] pt-[60px] pb-[30px] xl:px-[190px]  flex justify-between">
        <h2
          className="font-bold 
        text-[48px]  xl:text-[72px] 
        2xl:text-[96px]  text-black pl-[25px] md:pl-0 hidden lg:block"
        >
          Discover More
        </h2>
        <h2
          className="font-bold 
          text-[48px]  xl:text-[72px] 
          2xl:text-[96px]  text-black pl-[25px] md:pl-0 block md:hidden"
        >
          Discover
        </h2>
        <button className="hidden md:block py-[18px] px-[60px]  mt-[50px] mb-[140px] text-primary font-bold text-[21px] border-2 border-primary rounded-md">
          Read More
        </button>
      </div>
      {/* Carousel */}
      <div className=" px-[25px] xl:pl-[90px] pb-[60px]">
        {/* card container */}
        <Swiper
          style={{
            "--swiper-pagination-color": "#293891",
            "--swiper-pagination-bullet-inactive-color": "#cdced4",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
          pagination={{ clickable: true }}
          freeMode={true}
          grabCursor={true}
          modules={[Pagination, FreeMode]}
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 36,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="shadow mb-[100px]">
            <Image src={img1} alt="news1" className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] leading-[32px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px] leading-[32px] ">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[21px] leading-[26px] md:text-[24px] md:leading-[32px] font-semibold mb-[12px]">
                £193 million Volkswagen dieselgate settlement – further
                statement from Karma
              </h3>
              <p className=" text-[18px] leading-[22px] md:text-[21px] text-[#666666] md:leading-[32px] pb-6">
                Further to our earlier press release on the Volkswagen emissions
                settlement announced today, see further comments below from
                Karma partners Boz Michalowska-Howells and Shazia Yamin who
                represent thousands of clients and have worked on the case since
                September 2015, when news of this scandal first broke.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow mb-[100px]">
            <Image alt="news2" src={img2} className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] leading-[32px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px] leading-[32px] ">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[21px] leading-[26px] md:text-[24px] md:leading-[32px] font-semibold mb-[12px]">
                High Court Mercedes ruling reinforces access to justice in group
                claims
              </h3>
              <p className=" text-[18px] leading-[22px] md:text-[21px] text-[#666666] md:leading-[32px] pb-6">
                The High Court has today made a ruling clarifying the Civil
                Procedural Rules relating to the amendment of claim forms prior
                to service. The effect of the ruling, which is part of the
                Mercedes emissions case, will help ensure access to justice for
                group claims litigation, according to lawyers for the claimants
                Karma.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow mb-[100px]">
            <Image alt="news3" src={img3} className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] leading-[32px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px] leading-[32px] ">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[21px] leading-[26px] md:text-[24px] md:leading-[32px] font-semibold mb-[12px]">
                Peugeot and Citroen ordered to disclose emissions information by
                High Court
              </h3>
              <p className=" text-[18px] leading-[22px] md:text-[21px] text-[#666666] md:leading-[32px] pb-6">
                The High Court has today ordered Peugeot and Citroen to disclose
                information and documentation regarding alleged defeat devices
                on their vehicles. The court dismissed the vehicle
                manufacturers’ attempt to rely on a rarely used piece of French
                law to block the case which is part of the ongoing ‘dieselgate’
                legal claims.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow mb-[100px]">
            <Image alt="news3" src={img3} className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] leading-[32px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px] leading-[32px] ">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[21px] leading-[26px] md:text-[24px] md:leading-[32px] font-semibold mb-[12px]">
                Peugeot and Citroen ordered to disclose emissions information by
                High Court
              </h3>
              <p className=" text-[18px] leading-[22px] md:text-[21px] text-[#666666] md:leading-[32px] pb-6">
                The High Court has today ordered Peugeot and Citroen to disclose
                information and documentation regarding alleged defeat devices
                on their vehicles. The court dismissed the vehicle
                manufacturers’ attempt to rely on a rarely used piece of French
                law to block the case which is part of the ongoing ‘dieselgate’
                legal claims.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow mb-[100px]">
            <Image alt="news3" src={img3} className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] leading-[32px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px] leading-[32px] ">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[21px] leading-[26px] md:text-[24px] md:leading-[32px] font-semibold mb-[12px]">
                Peugeot and Citroen ordered to disclose emissions information by
                High Court
              </h3>
              <p className=" text-[18px] leading-[22px] md:text-[21px] text-[#666666] md:leading-[32px] pb-6">
                The High Court has today ordered Peugeot and Citroen to disclose
                information and documentation regarding alleged defeat devices
                on their vehicles. The court dismissed the vehicle
                manufacturers’ attempt to rely on a rarely used piece of French
                law to block the case which is part of the ongoing ‘dieselgate’
                legal claims.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSlider;
