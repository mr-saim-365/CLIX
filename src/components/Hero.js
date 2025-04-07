import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import GlossyCube from "./GlosyCube";

const fadeLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

const Hero = () => {
  return (
    <div className="bg-hero-gradient-bl text-[#ffffff] flex flex-col gap-5 py-4 w-full text-sm md:text-[15px]">
      <Navbar />
      <section id="hero" className="w-full relative sm:pt-8">
        <div
          className="md:w-[90%] 2xl:w-[80%] mx-auto relative z-[3] px-6 md:px-0 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-wrap justify-between gap-y-10">
  
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
              <motion.h2
                className="md:text-[48px] text-[#ffffff] mb-5 text-[36px] font-bold font-rubik"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span>Welcome to </span>
                <span>CLI-X</span>
              </motion.h2>

              <motion.p
                className="text-white/60 font-normal mb-7"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                Cross Layer Information Exchange
              </motion.p>

              <motion.div
                className="flex"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  href="#contact"
                  className="text-[#ffffff] bg-[#222222] font-medium text-sm tracking-wider
                             inline-block py-3.5 px-10 rounded-full border-2 border-[rgba(255,255,255,0.1)]
                             transition duration-300 hover:border-[var(--default-color)/40]"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>


            <div className="w-full h-[40vh] md:h-[60vh] lg:w-5/12 order-1 lg:order-2">
              <GlossyCube />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
