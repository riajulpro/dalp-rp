import Image from "next/image";
import "./Branding.css";
import { RightArrow } from "@/utils/icons/EssentialIcons";
import Link from "next/link";
import {
  GradientCircleSecond,
  GradientCircleSecondMobile,
} from "@/utils/icons/Gradient";

const Branding = () => {
  return (
    <section className="content-box">
      <div className="side-circle">
        <GradientCircleSecond />
      </div>
      <div className="side-circle-mobile">
        <GradientCircleSecondMobile />
      </div>
      <div className="branding-container">
        <div className="hide-lg">
          <Image
            src="/images/branding.png"
            alt="branding"
            width={450}
            height={450}
          />
        </div>
        <div className="hide-sm">
          <Image
            src="/images/branding-sm.png"
            alt="branding"
            width={375}
            height={384}
          />
        </div>
        <div className="branding-content">
          <h1 className="branding-title">Branding & Design system</h1>
          <p className="branding-description">
            Commonly used in the graphic, print & publishing industris for
            previewing visual layout and mockups
          </p>
          <Link href="/" className="arrow-button">
            <RightArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Branding;
