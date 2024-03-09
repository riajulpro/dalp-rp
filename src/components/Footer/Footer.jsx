import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="lg-width">
      <div className="footer-container">
        <div className="footer content-box">
          <div className="center">
            <h4 className="section-title">Digital Agency</h4>
            <p className="footer-description">
              Building digital products, brands & experience
            </p>
          </div>
          <div>
            <h4 className="section-title">Resources</h4>
            <div className="footer-links">
              <Link href="/">Guides</Link>
              <Link href="/">Blogs</Link>
              <Link href="/">Customer Stories</Link>
              <Link href="/">Glossary</Link>
            </div>
          </div>
          <div>
            <h4 className="section-title">Company</h4>
            <div className="footer-links">
              <Link href="/">About Us</Link>
              <Link href="/">Career</Link>
              <Link href="/">Partners</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 className="section-title">Social Media</h4>
            <div className="footer-links">
              <Link href="/">Linkedin</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© Matheus. Todos os direitos reservados</div>
    </footer>
  );
};

export default Footer;
