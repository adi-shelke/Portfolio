import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import References from "@/components/References";
import Services from "@/components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <References />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
