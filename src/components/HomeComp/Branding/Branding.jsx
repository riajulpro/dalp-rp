import Image from "next/image";
import "./Branding.css";
import { RightArrow } from "@/utils/icons/EssentialIcons";
import Link from "next/link";

const Branding = () => {
  return (
    <div className="branding-container">
      <div>
        <Image
          src="/images/branding.png"
          alt="branding"
          width="450"
          height="450"
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
  );
};

export default Branding;
