import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="lg-width">
      <div className="footer-container">
        <article className="footer content-box">
          <section className="center gap-right-normal">
            <h4 className="section-title mb-40">Digital Agency</h4>
            <p className="footer-description">
              Building digital products, brands & experience
            </p>
          </section>
          <section>
            <h4 className="section-title mb-32 gap-right-normal">Resources</h4>
            <div className="footer-links">
              <Link href="/">Guides</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Customer Stories</Link>
              <Link href="/">Glossary</Link>
            </div>
          </section>
          <section>
            <h4 className="section-title mb-32 gap-right-social">Company</h4>
            <div className="footer-links">
              <Link href="/">About Us</Link>
              <Link href="/">Career</Link>
              <Link href="/">Partners</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </section>
          <section>
            <h4 className="section-title mb-32">Social Media</h4>
            <div className="footer-links">
              <Link href="/">Linkedin</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
              <Link href="/">Twitter</Link>
            </div>
          </section>
        </article>
        <article className="copyright">
          © Matheus. Todos os direitos reservados
        </article>
      </div>
    </footer>
  );
};

export default Footer;
