
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const OurStory = () => {

    const controls = useAnimation();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);


    const itemVariants1 = {
        hidden: { opacity: 0, x: -60, transition: { delay: 0.8 } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const itemVariants2 = {
        hidden: { opacity: 0, x: -90, transition: { delay: 0.8 } },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <>
            <div className="w-full bg-hero-gradient-tr relative py-20">
                <motion.div ref={ref} className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center justify-center px-3">
                    <motion.div
                        animate={controls}
                        variants={itemVariants1}
                        className="flex flex-col gap-3 rounded-3xl bg-[#222222]">
                        <div className=" p-5">
                            <h1 className="text-2xl md:text-3xl 2xl:text-4xl  text-[#ffffff] mb-3">35,000</h1>
                            <h2 className="text-white/60 text-lg">Websites Already Thriving with Us!</h2>
                        </div>

                        <div className="w-[300px] h-[200px] overflow-hidden [mask-image:radial-gradient(circle_at_top_left,_white,_transparent)] ">
                            <img src="/images/nature.jpg" alt="Styled Image" className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={controls}
                        variants={itemVariants2}
                        className="relative flex flex-col md:flex-row gap-10 items-center w-[320px] sm:w-[450px] lg:w-auto justify-between bg-[#222222] rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden">
                        {/* Left Image Section */}
                        <div className="relative w-full md:w-1/2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                            <Image
                                src="/images/feature-image.jpg"
                                alt="Feature Image"
                                width={500}
                                height={300}
                                className="w-full h-auto md:clip-path-custom"
                            />
                        </div>

                        {/* Right Text Section */}
                        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-4">
                            <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
                                Experience <span className="text-green-200">the power of</span> <br />
                                <span className="text-green-200">speed</span> with our <br />
                                cutting-edge <br />
                                <span className="text-purple-300">hosting infrastructure</span>
                            </h2>
                            <button className="border border-white rounded-full px-5 py-2 hover:bg-white hover:text-black transition">
                                Read our story
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )

}

export default OurStory;