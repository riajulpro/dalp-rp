import Image from "next/image";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonial = [
    {
      image: "/images/andrew.png",
      name: "Andrew Rathore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
    },
    {
      image: "/images/vera.png",
      name: "Vera Duncan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
    },
    {
      image: "/images/mark.png",
      name: "Mark Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
    },
  ];

  return (
    <div className="content-box testimonial-container">
      <div className="testimonial-subtitle">Testimonial</div>
      <h1 className="testimonial-title">Read What Other have to Say</h1>
      <div className="testimonial-box">
        {testimonial.map((item, index) => (
          <div key={index} className="testimonial">
            <Image src={item.image} alt={item.name} width={129} height={130} />
            <h5 className="author">{item.name}</h5>
            <p className="comment">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
