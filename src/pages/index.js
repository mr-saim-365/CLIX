import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ScrollTop from "@/components/ScrollTop";
import OurStory from "@/components/OurStory";
import Cards from "@/components/Cards";

const Home = () => {
  return (
    <>
      <div className="p-0 m-0 box-border border-none">
        <Hero />
        <OurStory />
        <Cards />
        <Services />
        <Contact />
        <ScrollTop />
        <Footer />
      </div>

    </>
  )

}


export default Home;