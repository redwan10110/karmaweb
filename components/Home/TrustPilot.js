import Image from "next/image";
import TrustImage from "/public/assets/trustpilot.png";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";

const TrustPilot = () => {
  


  return (
    <>
     
      <Script src="//widget.trustpilot.com/bootstrap/v5/tp.widget.sync.bootstrap.min.js" strategy="lazyOnload" />
      <div className="bg-[#F2F2F2] px-[25px] py-[40px] xl:px-[190px] xl:py-[70px]">
        <div>
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="53aa8912dec7e10d38f59f36"
            data-businessunit-id="53da56ff0000640005792dae"
            data-style-height="130px"
            data-style-width="100%"
            data-theme="light"
            data-stars="4,5"
          >
            <Link
              href="https://www.trustpilot.com/review/bluevine.com"
              target="_blank"
            >
              Trustpilot
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustPilot;
