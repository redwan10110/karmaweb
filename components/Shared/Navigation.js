import Link from "next/link";
import logo from "/public/assets/Karma logo img.png";

import phoneIcon from "/public/assets/icon/phone-icon.png";
import menuIcon from "/public/assets/menu.png";

import Image from "next/image";
import Head from "next/head";
import styles from "./megaMenu.module.css";
import { useState } from "react";

import leftArrowImg from "/public/assets/leftArrow.png"
import closeIcon from "/public/assets/close.png"
import MegaMenu from "./MegaMenu";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  // for mega menu

  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <>
      <div className="bg-primary  h-[96px] px-[15px] md:px-[80px] lg:px-[120px] xl:px-[190px] flex justify-between items-center shadow-[0px_4px_4px_-15px_rgba(0,0,0,0.25)]">
        <div className={`relative ${styles.navbar} `}>
          <Link href={"/"}>
            <Image
              alt="logo2"
              src={logo}
              className="w-[214px] h-[48px] md:w-[240] md:h-[48px]"
            ></Image>
          </Link>
        </div>
        {/* menu item */}
        <div
          className={`${styles.navMenu} text-white ${
            isActive ? styles.active : ""
          } `}
        >
          <Link className={`mr-8 ${styles.navItem} text-[18px] leading-[22px] font-medium`} href={"/services"}>
            Our Services
          </Link>
          <Link className={`mr-8 ${styles.navItem} text-[18px] leading-[22px] font-medium`} href={"/about-us"}>
            About us
          </Link>
          <span className={`mr-8 ${styles.navItem} cursor-pointer text-[18px] leading-[22px] font-medium` }  >
          
            <MegaMenu></MegaMenu>
           
          </span>
          <Link className={`mr-8 ${styles.navItem} text-[18px] leading-[22px] font-medium`} href="/contact">
            Contact us
          </Link>
        </div>
        {/* Phone */}
        <div className="hidden  text-secondary 2xl:flex lg:items-center ">
          <span>
            <Image
              alt="phone-icon"
              src={phoneIcon}
              className="mr-3"
              width={24}
              height={24}
            ></Image>
          </span>
          <span className="text-lg">+44 20 3999 8888</span>
        </div>
        {/* mobile menu icon */}
        {/* <div className="block md:hidden">
          <span>
            <Image alt="menuIcon" src={menuIcon}></Image>
          </span>
        </div> */}
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
