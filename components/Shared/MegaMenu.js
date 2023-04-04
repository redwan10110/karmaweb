import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import leftArrowImg from "/public/assets/leftArrow.png"
import closeIcon from "/public/assets/close.png"
import styles from "./megaMenu.module.css";
import Link from "next/link";

const MegaMenu = () => {

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
      <span onClick={toggleMegaMenu}>Mega Menu</span>
      <div
        className={`${styles.megaMenu} ${
          isMegaMenuOpen ? styles.activeMegaMenu : ""
        }`}
      >
        <Image
          className={`${styles.close} p-[20px]`}
          onClick={toggleMegaMenu}
          src={closeIcon}
          width={16}
          height={16}
          alt="close"
        ></Image>

        <Image
          className={`${styles.backBtn} p-[20px]`}
          onClick={toggleMegaMenu}
          src={leftArrowImg}
          width={12}
          height={8}
          alt="leftArrowKey"
        ></Image>
        <div className="px-[32px] py-[50px] xl:px-[190px] xl:py-[62px] w-full flex flex-col lg:flex-row lg:justify-between lg:gap-0 gap-20">
          <div className="col xl:px-[100px]">
            <div className="header text-[28px] leading-[26px] xl:text-[36px] font-semibold mb-[56px] text-secondary">
              Our services
            </div>
            <div className={`${styles.megaLinks} flex flex-col`}>
              <Link
                href={"/article"}
                className={`${styles.megaMenuItem}
                        text-[18px] leading-[26px] xl:text-[24px] xl:leading-[48px] xl:font-semibold
                        `}
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className={`${styles.megaMenuItem}
                        text-[18px] leading-[26px] xl:text-[24px] xl:leading-[48px] xl:font-semibold
                        `}
              >
                Group claims overview
              </Link>
              <Link
                href={"#"}
                className={`${styles.megaMenuItem}
                        text-[18px] leading-[26px] xl:text-[24px] xl:leading-[48px] xl:font-semibold
                        `}
              >
                Vehicle emissions
              </Link>
              <Link
                href={"#"}
                className={`${styles.megaMenuItem}
                        text-[18px] leading-[26px] xl:text-[24px] xl:leading-[48px] xl:font-semibold
                        `}
              >
                Stade de France group claim
              </Link>
              <Link
                href={"#"}
                className={`${styles.megaMenuItem}
                        text-[18px] leading-[26px] xl:text-[24px] xl:leading-[48px] xl:font-semibold
                        `}
              >
                International
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
