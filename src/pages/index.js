import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar"
import Services from "@/components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full px-2 md:px-0 md:w-[90%] 2xl:w-[70%] mx-auto">
        <Services />
        <Contact />
      </div>
      <Footer />
    </>
  )

}


export default Home;