import Banner from "@/components/HomeComp/Banner/Banner";
import Branding from "@/components/HomeComp/Branding/Branding";
import Contact from "@/components/HomeComp/Contact/Contact";
import Custom from "@/components/HomeComp/Custom/Custom";
import Testimonial from "@/components/HomeComp/Testimonial/Testimonial";
import Trends from "@/components/HomeComp/Trends/Trends";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <Trends />
      <Branding />
      <Custom />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default HomePage;
