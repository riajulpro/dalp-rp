import Image from "next/image";
import "./Custom.css";
import Link from "next/link";
import { RightArrow } from "@/utils/icons/EssentialIcons";

const Custom = () => {
  return (
    <section className="content-box">
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
        <div className="hide-lg">
          <Image
            src="/images/custom.png"
            alt="custom"
            width={450}
            height={450}
          />
        </div>
        <div className="hide-sm">
          <Image
            src="/images/custom-sm.png"
            alt="custom"
            width={380}
            height={380}
          />
        </div>
      </div>
    </section>
  );
};

export default Custom;
