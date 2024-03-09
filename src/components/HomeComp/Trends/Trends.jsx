import {
  DropboxLogo,
  SlackLogo,
  SpotifyLogo,
  ZoomLogo,
} from "@/utils/icons/TrendsIcons";
import "./Trends.css";

const Trends = () => {
  return (
    <section className="content-box trends-container">
      <span className="trends-statics">Trusted by 4,000+ companies</span>
      <div className="trends-box">
        <SpotifyLogo />
        <SlackLogo />
        <DropboxLogo />
        <ZoomLogo />
      </div>
    </section>
  );
};

export default Trends;
