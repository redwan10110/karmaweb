import Image from "next/image";
import logo from "/public/assets/Karma logo img.png";
import badge from "/public/assets/trust-badge.png";
import twitter from "/public/assets/icon/twitter.png";
import linkedIn from "/public/assets/icon/linkedin.png";
import facebook from "/public/assets/icon/facebook.png";
import instagram from "/public/assets/icon/instagram.png";
import youtube from "/public/assets/icon/youtube.png";
import Link from "next/link";
import phoneIcon from "/public/assets/icon/phone-icon.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black p-[40px] 2xl:px-[190px] pt-[80px] border-t-[5px] border-[#19EB96]">
        {/* footer header */}
        <div className="flex flex-col justify-start  md:flex-row md:justify-between">
          {/* logo */}
          <div className="mb-10">
            <Image src={logo} alt="logo" className="mb-[30px]"></Image>
            <Image src={badge} alt="badge"></Image>
          </div>
          {/* icon */}
          <div className="flex max-md:justify-between">
            <Image
              src={twitter}
              alt="twitter"
              className="mr-[30px] self-start "
            ></Image>
            <Image
              src={linkedIn}
              alt="linkedIn"
              // height={30}
              // width={30}
              className="mr-[30px] self-start"
            ></Image>
            <Image
              src={facebook}
              alt="facebook"
              // height={30}
              // width={30}
              className="mr-[30px] self-start"
            ></Image>
            <Image
              src={instagram}
              alt="instagram"
              // height={30}
              // width={30}
              className="mr-[30px] self-start"
            ></Image>
            <Image
              src={youtube}
              alt="youtube"
              // height={30}
              // width={30}
              className="mr-[30px] self-start"
            ></Image>
          </div>
        </div>
        {/* footer navigation */}
        <div className="pt-[60px]   pb-[60px] md:pb-[130px]  grid grid-cols-1 md:grid-cols-3 md:gap-x-[80px] lg:grid-cols-4 lg:gap-x-[120px] ">
          <div className="flex flex-col">
            <Link
              href="/services"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Our Services
            </Link>
            <Link
              href="/about-us"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Latest Updates
            </Link>
            <Link
              href="/contact"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Diversity & inclusion
            </Link>
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Legal & regulatory information
            </Link>
            <Link
              href="/terms"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Terms and conditions
            </Link>
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Our complaints policy
            </Link>
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Our environment policy
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Cookies
            </Link>
            <Link
              href="/article"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Karma careers
            </Link>
            <Link
              href="/partners"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Partners
            </Link>
            <Link
              href="/vacancies"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              Vacancies
            </Link>
            <Link
              href="/london-office"
              className="text-[18px] leading-[22px] text-[#999999] mb-[18px]"
            >
              London Office
            </Link>
          </div>
          <div className="flex flex-col order-first md:order-last mb-10 md:mb-0 ">
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-secondary mb-[18px] font-bold"
            >
              Get help today
            </Link>
            <Link
              href="#"
              className="text-[18px] leading-[22px] text-secondary mb-[18px] font-semibold flex"
            >
              <Image
                src={phoneIcon}
                alt="phoneIcon"
                width={22}
                height={22}
                className="mr-4"
              ></Image>
              +44 20 3944 8155
            </Link>
          </div>
        </div>
        {/* copyright section */}
      </div>
      <div className="bg-black border-t border-[rgba(255, 255, 255, 0.15)]">
        <p className="text-[18px] leading-[22px] text-[#5b5b5b] py-[24px] px-[40px] lg:px-[190px]">
          © 2023 Karma
        </p>
      </div>
    </>
  );
};

export default Footer;
