import {
  DropboxLogo,
  SlackLogo,
  SpotifyLogo,
  ZoomLogo,
} from "@/utils/icons/TrendsIcons";
import "./Trends.css";

const Trends = () => {
  return (
    <div className="trends-container">
      <span className="trends-statics">Trusted by 4,000+ companies</span>
      <div className="trends-box">
        <p className="icon-size">
          <SpotifyLogo />
        </p>
        <p className="icon-size">
          <SlackLogo />
        </p>
        <p className="icon-size">
          <DropboxLogo />
        </p>
        <p className="icon-size">
          <ZoomLogo />
        </p>
      </div>
    </div>
  );
};

export default Trends;
