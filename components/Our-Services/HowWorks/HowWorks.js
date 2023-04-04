import Card from "./Card";
import TextCard from "./TextCard";
import banner from "/public/assets/banner.png";

import carImg from "/public/assets/Service_HowWorksIcon/started-car.png";
import detailsImg from "/public/assets/Service_HowWorksIcon/details.png";
import agreementImg from "/public/assets/Service_HowWorksIcon/agreement.png";
import vehicleImg from "/public/assets/Service_HowWorksIcon/vehicle.png";
const HowWorks = () => {
  // const bg = {
  //     background: `url(${banner})`,
  //     backgroundPosition: "right",
  //     backgroundSize:"cover",
  //     backgroundRepeat:"no-repeat",
  //     height:"100vh",
  //     width:"100vw"
  //   };
  return (
    <div>
      <div className="">
        {/* row one */}
        {/* desktop */}
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-0">
          <Card
            img={carImg}
            className=""
            heading="Getting Started"
            headingColor="#293891"
            bgColor="#F6F3FF"
          ></Card>
          <TextCard
            className=""
            heading="Starting your claim"
            text="Please check your eligibility to see if your car is affected by using our vehicle registration checker.
        Just enter your vehicle registration and we will tell you whether your vehicle is eligible to join the claim."
          ></TextCard>
        </div>

        {/* row 2 */}
        {/* desktop */}
        <div className="lg:grid lg:grid-cols-2 gap-0 hidden">
          <TextCard
            heading="Submit your information"
            text="If your vehicle is eligible, we will ask for a few contact details.

        Please be assured your details are not shared with anyone and we have a strict privacy policy to keep your details safe.
        "
          ></TextCard>
          <Card
            img={detailsImg}
            heading="Your Details"
            headingColor="#1B7969"
            bgColor="#FEF6F1"
          ></Card>
        </div>
        {/* mobile */}
        <div className="grid gird-cols-1 lg:hidden gap-0">
          <Card
            img={detailsImg}
            heading="Your Details"
            headingColor="#1B7969"
            bgColor="#FEF6F1"
          ></Card>
          <TextCard
            heading="Submit your information"
            text="If your vehicle is eligible, we will ask for a few contact details.

        Please be assured your details are not shared with anyone and we have a strict privacy policy to keep your details safe.
        "
          ></TextCard>
        </div>

        {/* Row 3 */}
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-0 ">
          <Card
            img={agreementImg}
            heading="Funding agreement"
            headingColor="#E46012"
            bgColor="#FEF6F1"
          ></Card>

          <TextCard
            heading="Our legal agreement"
            text="You will then be asked to agree to a conditional fee agreement (CFA) or a damages based agreement (DBA) dependent on what type of vehicle you have. These are both also known as ‘no win no fee’ agreements.
        
        Full details of these agreements are included at this stage.
        "
          ></TextCard>
        </div>

        {/* row 4 */}
        {/* DeskTob */}
        <div className="lg:grid  lg:grid-cols-2 hidden gap-0">
          <TextCard
            className=""
            heading="Further details about your car"
            text="We may want to ask a few more details about your vehicle, but that’s it, our team will then be in touch for documents and any further questions if required.
        We hope you will choose Karma to represent you in this important group claim.

        "
          ></TextCard>
          <Card
            className=""
            img={vehicleImg}
            heading="Vehicle details"
            headingColor="#293891"
            bgColor="#F6F3FF"
          ></Card>
        </div>
        {/* Mobile */}
        <div className="grid grid-cols-1 lg:hidden gap-0">
          <Card
            className=""
            img={vehicleImg}
            heading="Vehicle details"
            headingColor="#293891"
            bgColor="#F6F3FF"
          ></Card>
          <TextCard
            className=""
            heading="Further details about your car"
            text="We may want to ask a few more details about your vehicle, but that’s it, our team will then be in touch for documents and any further questions if required.
        We hope you will choose Karma to represent you in this important group claim.

        "
          ></TextCard>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
