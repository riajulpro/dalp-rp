import Image from "next/image";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">
          Building digital products, brands & experience
        </h1>
        <p className="banner-description">
          Digital Agency is your online team mangement tool that easy and prompt
        </p>
        <button className="button-primary">Contact Us</button>
      </div>
      <div>
        <Image src="/images/banner.png" alt="Banner" width="450" height="450" />
      </div>
    </div>
  );
};

export default Banner;
