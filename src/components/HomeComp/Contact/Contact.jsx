import Image from "next/image";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="customer-care">
        <Image
          src="/images/contact.png"
          alt="contact"
          width="450"
          height="450"
        />
      </div>
      <div className="contact-content">
        <h1 className="contact-title">Be a part of the next big thing</h1>
        <p className="contact-description">
          We work with Brans, Startups, to SMEs. Collaborate for more impact and
          growth
        </p>
        <button className="button-primary">Contact Us</button>
      </div>
    </div>
  );
};

export default Contact;
