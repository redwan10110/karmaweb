import styles from './Hero.module.css';


const FaqSection = () => {
  return (
    <div className={`${styles.faqBg}  px-[45px] py-[106px] xl:px-[190px] xl:py-[145px]`}>
        <div className="">
            <h2 className="font-bold text-[48px] leading-[50px] xl:text-[96px] xl:leading-[90px] text-white mb-[30px] ">
            Have a <br/> question?
            </h2>
            <p className="text-white text-[18px] leading-[22px] xl:text-[21px] xl:leading-[28px] mb-[45px]">Find out more in our frequently asked question section.</p>
            <button className="py-[10px] px-[24px] lg:px-[66px] lg:py-[22px] text-primary font-bold text-[18px] leading-[28px] xl:text-[21px] xl:leading-[28px] max-md:w-full bg-secondary rounded-md">FAQs</button>
        </div>
    </div>
  )
}

export default FaqSection;