import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import Navbar from "./Navbar";
import Cube from "./Cube";


const Hero = () => {

    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: -100, opacity: 0 });
        }
    }, [inView, controls]);



    return (
        <>
            <div>
                <div ref={ref} className="bg-hero-gradient-bl text-[#ffffff] flex flex-col gap-5 py-4 w-full text-sm md:text-[15px]">

                    <Navbar />
                    <section id="hero" className="w-ful relative pt-8">
                        <div className=" md:w-[90%] 2xl:w-[80%] mx-auto relative z-[3] px-6 md:px-0 w-full font-montserrat" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-wrap justify-between gap-y-10">
                                <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
                                    <motion.h2
                                        animate={controls}
                                        initial={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 1.5 }}
                                        className="md:text-[48px] text-[#ffffff] font-bold mb-5 text-[36px]"
                                    >
                                        <span>Welcome to </span>
                                        <span>CLI-X</span>
                                    </motion.h2>
                                    <motion.p
                                        animate={controls}
                                        initial={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 1.5 }}
                                        className="text-white/60 font-normal mb-7"
                                    >
                                        Cross Layer Information Exchange
                                    </motion.p>
                                    <motion.div
                                        animate={controls}
                                        initial={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 1.5 }}
                                        className="flex">

                                        <Link href="#contact" className="text-[#ffffff] bg-[#222222] font-medium text-sm tracking-wider
                                 inline-block py-3.5 px-10 rounded-full border-2 border-[rgba(255,255,255,0.1)]
                                 transition duration-300 hover:border-[var(--default-color)/40]">Get Started</Link>
                                    </motion.div>
                                </div>
                                <div className="w-full h-[40vh] md:h-[60vh] lg:w-5/12 order-1 lg:order-2">
                                    <Canvas>
                                        <OrbitControls enableZoom={false} enablePan={false} />
                                        <ambientLight intensity={2} />
                                        <directionalLight position={[2, 1, 1]} />
                                        <Cube />
                                    </Canvas>
                                </div>
                            </div>
                        </div>


                    </section>
                </div>
            </div>


        </>
    )

}


export default Hero;