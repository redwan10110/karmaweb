import ContactCard from "./ContactCard";
import Intro from "./Intro";

const Contact = () => {
  return (
    <div className="className='bg-[#EAEBF4]">
      <Intro></Intro>
      <ContactCard></ContactCard>
      <div>
        <div className="bg-[#EAEBF4]">
          <div className="px-[50px] py-[50px] md:px-[80px] lg:px-[120px] xl:px-[190px] xl:py[90px] lg:w-1/2">
            <p className="text-[#666666] text-[18px] leading-[22px] lg:text-[21px] lg:leading-[26px] font-normal">
            If you require an interview with one of our lawyers or would like more information on a story please contact our press team at pressoffice@karma.co.uk or on 0161 999 8888
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
