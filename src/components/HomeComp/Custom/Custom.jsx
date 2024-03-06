import Image from "next/image";
import "./Custom.css";
import Link from "next/link";
import { RightArrow } from "@/utils/icons/EssentialIcons";

const Custom = () => {
  return (
    <>
      <div className="custom-container">
        <div className="custom-content">
          <h1 className="custom-title">Custome & Plugin Development</h1>
          <p className="custom-description">
            Commonly used in the graphic, print & publishing industris for
            previewing visual layout and mockups
          </p>
          <Link href="/" className="arrow-button">
            <RightArrow />
          </Link>
        </div>
        <div>
          <Image
            src="/images/custom.png"
            alt="custom"
            width="450"
            height="450"
          />
        </div>
      </div>
    </>
  );
};

export default Custom;
