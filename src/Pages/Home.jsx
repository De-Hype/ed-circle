import Blogs from "../Component/Blogs";
import Explore from "../Component/Explore";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import Partners from "../Component/Partners";
import Reviews from "../Component/Reviews";
import Services from "../Component/Services";
import Tutors from "../Component/Tutors";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Explore/>
      <Tutors/>
      <Reviews/>
      <Blogs/>
      <Footer/>
    </>
  );
};

export default Home;
