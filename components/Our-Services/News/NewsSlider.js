import Image from "next/image";
import img1 from "/public/assets/newsSlide/img.png";
import img2 from "/public/assets/newsSlide/img2.png";
import img3 from "/public/assets/newsSlide/img3.png";

const NewsSlider = () => {
  return (
    <div>
        <div className=" px-[25px] md:px-[50px] pb-[250px]">
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10">
          <div className="shadow">
            <Image src={img1}
            alt="news1"
            className="w-full"
            ></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
                £193 million Volkswagen dieselgate settlement – further
                statement from Karma
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
                Further to our earlier press release on the Volkswagen emissions
                settlement announced today, see further comments below from
                Karma partners Boz Michalowska-Howells and Shazia Yamin who
                represent thousands of clients and have worked on the case since
                September 2015, when news of this scandal first broke.
              </p>
            </div>
          </div>
          <div className="shadow">
            <Image alt="news2"src={img2}
            className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
              High Court Mercedes ruling reinforces access to justice in group claims
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
              The High Court has today made a ruling clarifying the Civil Procedural Rules relating to the amendment of claim forms prior to service. The effect of the ruling, which is part of the Mercedes emissions case, will help ensure access to justice for group claims litigation, according to lawyers for the claimants Karma.
              </p>
            </div>
          </div>
          <div className="shadow ">
            <Image alt="news3"src={img3} 
            className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px]  font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
              Peugeot and Citroen ordered to disclose emissions information by High Court
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
              The High Court has today ordered Peugeot and Citroen to disclose information and documentation regarding alleged defeat devices on their vehicles. The court dismissed the vehicle manufacturers’ attempt to rely on a rarely used piece of French law to block the case which is part of the ongoing ‘dieselgate’ legal claims.
              </p>
            </div>
          </div>
          <div className="shadow">
            <Image src={img1}
            alt="news1"
            className="w-full"
            ></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
                £193 million Volkswagen dieselgate settlement – further
                statement from Karma
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
                Further to our earlier press release on the Volkswagen emissions
                settlement announced today, see further comments below from
                Karma partners Boz Michalowska-Howells and Shazia Yamin who
                represent thousands of clients and have worked on the case since
                September 2015, when news of this scandal first broke.
              </p>
            </div>
          </div>
          <div className="shadow">
            <Image alt="news2"src={img2}
            className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
              High Court Mercedes ruling reinforces access to justice in group claims
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
              The High Court has today made a ruling clarifying the Civil Procedural Rules relating to the amendment of claim forms prior to service. The effect of the ruling, which is part of the Mercedes emissions case, will help ensure access to justice for group claims litigation, according to lawyers for the claimants Karma.
              </p>
            </div>
          </div>
          <div className="shadow ">
            <Image alt="news3"src={img3} 
            className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px]  font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
              Peugeot and Citroen ordered to disclose emissions information by High Court
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
              The High Court has today ordered Peugeot and Citroen to disclose information and documentation regarding alleged defeat devices on their vehicles. The court dismissed the vehicle manufacturers’ attempt to rely on a rarely used piece of French law to block the case which is part of the ongoing ‘dieselgate’ legal claims.
              </p>
            </div>
          </div>
          <div className="shadow">
            <Image src={img1}
            alt="news1"
            className="w-full"
            ></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
                £193 million Volkswagen dieselgate settlement – further
                statement from Karma
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
                Further to our earlier press release on the Volkswagen emissions
                settlement announced today, see further comments below from
                Karma partners Boz Michalowska-Howells and Shazia Yamin who
                represent thousands of clients and have worked on the case since
                September 2015, when news of this scandal first broke.
              </p>
            </div>
          </div>
          <div className="shadow">
            <Image alt="news2"src={img2}
            className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px] font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
              High Court Mercedes ruling reinforces access to justice in group claims
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
              The High Court has today made a ruling clarifying the Civil Procedural Rules relating to the amendment of claim forms prior to service. The effect of the ruling, which is part of the Mercedes emissions case, will help ensure access to justice for group claims litigation, according to lawyers for the claimants Karma.
              </p>
            </div>
          </div>
          <div className="shadow ">
            <Image alt="news3"src={img3} 
            className="w-full"></Image>
            <div className="px-[36px]">
              <div className="my-[15px] flex justify-between">
                <p className="text-primary text-[14px]  font-semibold">
                  Category
                </p>
                <p className=" text-[rgba(0,0,0,0.6)] text-[14px]">
                  25 May 2022
                </p>
              </div>
              <h3 className="text-black text-[24px] leading-[32px] font-semibold mb-[12px]">
              Peugeot and Citroen ordered to disclose emissions information by High Court
              </h3>
              <p className="text-[21px] text-[#666666] leading-[32px] pb-6">
              The High Court has today ordered Peugeot and Citroen to disclose information and documentation regarding alleged defeat devices on their vehicles. The court dismissed the vehicle manufacturers’ attempt to rely on a rarely used piece of French law to block the case which is part of the ongoing ‘dieselgate’ legal claims.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NewsSlider