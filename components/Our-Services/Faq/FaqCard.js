import styles from "./faqCar.module.css";
const FaqCard = () => {
  return (
    <>
      <div className={`${styles.faq}`}>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle1"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle1"
          >
            Does this apply to petrol or diesel vehicles?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle2"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle2"
          >
            How can I check if my vehicle is eligible to join?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle3"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle3"
          >
            Can I make a claim if I no longer own the car?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle4"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle4"
          >
            Does it matter if I bought my car second hand?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle5"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle5"
          >
           Can I claim for more than one vehicle?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle6"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle6"
          >
            Does it matter where I bought my vehicle?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle7"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle7"
          >
            Can I bring a claim if I bought my vehicle on finance?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle8"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle8"
          >
            Can I bring a claim if my vehicle is leased?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="checkbox"
            id="toggle9"
            className={`${styles.toggle} hidden`}
          />
          <label
            className={`${styles.title} block  bg-white p-4 cursor-pointer              
             text-[21px]
            leading-[26px]
            xl:text-[36px]
            xl:leading-[48px]
            font-bold
            py-[36px]
            text-black
            `}
            htmlFor="toggle9"
          >
            Can I bring a claim if I have a company car?
          </label>
          <div className={`${styles.content} bg-white overflow-hidden`}>
            <p
              className=" text-[18px] leading-[22px] lg:text-[21px] lg:leading-[28px] lg:pl-[100px] pl-[80px]
            pr-[20px] pb-[20px] lg:pb-[38px] text-black"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        
      </div>
      {/* <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0 " id="faq1">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="faq1"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq2">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="faq2"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq3">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="faq3"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq4">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="faq4"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq5">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="faq5"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq6">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="faq6"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq7">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="faq7"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq8">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="true"
              aria-controls="collapseEight"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="faq8"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq9">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="true"
              aria-controls="collapseNine"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="faq9"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 mb-5">
          <h2 className="accordion-header mb-0" id="faq10">
            <button
              className={`
              text-[21px]
              leading-[26px]
              xl:text-[36px]
              xl:leading-[48px]
              font-bold
              py-[36px]
        ${styles.accordionButton}
        relative
        flex
        items-center
        w-full
        px-10
        text-black text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
       
       `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="true"
              aria-controls="collapseTen"
            >
              Does this apply to petrol or diesel vehicles?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="faq10"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 text-[21px] leading-[28px]">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FaqCard;
