// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";


const Testimonial = () => {
  return (
    <>
    {/* <style dangerouslySetInnerHTML={{ __html: styles }} /> */}
    <div className="px-[40px] pt-[60px] pb[200px] bg-primary z md:px-[80px] md:pt-[100px] xl:px-[190px] xl:pt-[120px]">
      <h2 className="font-bold text-[48px] leading-[50px] lg:text-[96px] lg:leading-[96px]  text-secondary mb-[50px] lg:mb-[90px] ">
        What our <br></br>clients say
      </h2>
      <div className="pb-[60px] bgBlue">
        {/* testimonial container */}
        <Swiper
          style={{
            
            "--swiper-pagination-color": "#19EB96",
            "--swiper-pagination-bullet-inactive-color": "white",
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
              slidesPerView: 3,
              spaceBetween: 110,
            },
          }}
          className={`mySwiper`}
        >
          {/* card */}
          <SwiperSlide className="pb-[100px]">
            <div className="flex">
              <div className="font-bold text-[48px] text-white pr-3 leading-[50px] ">
                “
              </div>
              <div>
                <p className="font-semibold text-[18px] leading-[26px] lg:text-[24px] lg:leading-[32px] text-white mb-[20px]">
                  Our company leased several Mercedes vehicles that were
                  affected. I would recommend Karma to any other businesses who
                  find themselves in a similar position. The process has been
                  easy, and Karma has guided us through every step of the
                  process.
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  Sally Bollard
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* card */}
          <SwiperSlide className="pb-[100px]">
            <div className="flex">
              <div className="font-bold text-[48px] text-white pr-3 leading-[50px] ">
                “
              </div>
              <div>
                <p className="font-semibold text-[18px] leading-[26px] lg:text-[24px] lg:leading-[32px] text-white mb-[20px]">
                  Our company leased several Mercedes vehicles that were
                  affected. I would recommend Karma to any other businesses who
                  find themselves in a similar position. The process has been
                  easy, and Karma has guided us through every step of the
                  process.
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  Sally Bollard
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* card */}
          <SwiperSlide className="pb-[100px]">
            <div className="flex">
              <div className="font-bold text-[48px] text-white pr-3 leading-[50px] ">
                “
              </div>
              <div>
                <p className="font-semibold text-[18px] leading-[26px] lg:text-[24px] lg:leading-[32px] text-white mb-[20px]">
                  Our company leased several Mercedes vehicles that were
                  affected. I would recommend Karma to any other businesses who
                  find themselves in a similar position. The process has been
                  easy, and Karma has guided us through every step of the
                  process.
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  Sally Bollard
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* card */}
          <SwiperSlide className="pb-[100px]">
            <div className="flex">
              <div className="font-bold text-[48px] text-white pr-3 leading-[50px] ">
                “
              </div>
              <div>
                <p className="font-semibold text-[18px] leading-[26px] lg:text-[24px] lg:leading-[32px] text-white mb-[20px]">
                  Our company leased several Mercedes vehicles that were
                  affected. I would recommend Karma to any other businesses who
                  find themselves in a similar position. The process has been
                  easy, and Karma has guided us through every step of the
                  process.
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  Sally Bollard
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* card */}
          <SwiperSlide className="pb-[100px]">
            <div className="flex">
              <div className="font-bold text-[48px] text-white pr-3 leading-[50px] ">
                “
              </div>
              <div>
                <p className="font-semibold text-[18px] leading-[26px] lg:text-[24px] lg:leading-[32px text-white mb-[20px]">
                  Our company leased several Mercedes vehicles that were
                  affected. I would recommend Karma to any other businesses who
                  find themselves in a similar position. The process has been
                  easy, and Karma has guided us through every step of the
                  process.
                </p>
                <p className="text-secondary text-[21px] leading-[32px]">
                  Sally Bollard
                </p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
