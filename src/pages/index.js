import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar"
import Services from "@/components/Services";
import ScrollTop from "@/components/ScrollTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <ScrollTop />
      <Footer />
    </>
  )

}


export default Home;