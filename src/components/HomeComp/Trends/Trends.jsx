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
        <SpotifyLogo />
        <SlackLogo />
        <DropboxLogo />
        <ZoomLogo />
      </div>
    </div>
  );
};

export default Trends;
