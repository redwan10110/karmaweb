import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className="px-[23px] pt-[43px] pb-[105px] lg:px-[48px] lg:py-[72px] xl:px-[190px] xl:py-[96px]">
      <div className="w-full lg:w-6/12">
        <div className="max-lg:px-[30px]">
          <h2
            className="text-black text-[32px] leading-[38px]
        font-bold mb-[48px] xl:text-[48px] xl:leading-[56px] xl:mb-[24px] "
          >
            Complete our form and we’ll get in touch
          </h2>
          <p className="text-black text-[18px] leading-[22px] mb-[48px] xl:text-[21px] xl:leading-[26px] xl:mb-[24px]">
            We treat all information in accordance with our privacy policy.
          </p>
          <p className="text-primary text-[18px] leading-[22px] mb-[48px] xl:text-[21px] xl:leading-[26px] xl:mb-[24px]">
            * indicates field is compulsory
          </p>
        </div>

        {/* form */}
        <form className="">
          <input
            type="text"
            placeholder="indicates field is compulsory * "
            className="px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary font-semibold placeholder:font-normal "
            required
          />
          <select
            name="enquiry"
            id="enquiry"
            className={`px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary  placeholder:font-normal bg-white ${styles.customSelect}`}
            required
          >
            <option value="1">Type of enquiry *</option>
            <option value="2">Example 2</option>
            <option value="3">Example 3</option>
            <option value="4">Example 4</option>
            <option value="5">Example 5</option>
          </select>
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Message *"
            className="px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary font-semibold placeholder:font-normal"
            required
          ></textarea>
          <select
            name="enquiry"
            id="enquiry"
            className={`px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary  placeholder:font-normal bg-white ${styles.customSelect}`}
            required
          >
            <option value="1">Preferred method of contact *</option>
            <option value="2">Example 2</option>
            <option value="3">Example 3</option>
            <option value="4">Example 4</option>
            <option value="5">Example 5</option>
          </select>
          <input
            type="tel"
            placeholder="Phone *"
            className="px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary font-semibold placeholder:font-normal"
          />
          <input
            type="email"
            placeholder="Email *"
            className="px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary font-semibold placeholder:font-normal"
            required
          />
          <select
            name="enquiry"
            id="enquiry"
            className={`px-[23px] py-[17px] xl:px-[23px] xl:py-[19px] mb-[24px] border border-[#C5C9E3] w-full focus:border-2 focus:border-primary text-[21px] leading-[26px] text-primary  placeholder:font-normal bg-white ${styles.customSelect} `}
            required
          >
            <option value="1">How did you hear about Karma?</option>
            <option value="2">Example 2</option>
            <option value="3">Example 3</option>
            <option value="4">Example 4</option>
            <option value="5">Example 5</option>
          </select>
          <button className="px-[36px] py-[18px] font-bold text-white text-[21px] leading-[28px] bg-primary rounded-md max-lg:w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
