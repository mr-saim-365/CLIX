
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };


    return (
        <>
            <section ref={ref} className="bg-hero-gradient-l py-16">
                <div ref={ref} className="w-full px-6 md:px-0 md:w-[90%] 2xl:w-[70%] mx-auto text-[#ffffff]">
                    <motion.div initial="hidden"
                        animate={inView ? "visible" : "hidden"} variants={containerVariants} className="mx-auto 2xl:w-[80%] md:w-[90%] text-center mb-12">
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl font-bold font-montserrat mb-4">Our Services</motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-white/60">
                            From innovative software solutions to captivating design, we craft
                            digital excellence tailored to elevate your business.
                        </motion.p>
                    </motion.div>

                    <motion.div initial="hidden"
                        animate={inView ? "visible" : "hidden"} variants={containerVariants} className="container mx-auto grid grid-cols-1 text-sm sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <motion.div
                            variants={itemVariants}
                            className="service-item elative md:md:p-10 p-5 bg-[#222222] rounded-2xl shadow-lg"
                        >
                            <h3 className="text-[18px] md:text-[22px] mb-3 inline-block pb-2 font-semibold border-[#172a28]/10">Web Design</h3>
                            <p>
                                Designing Your Digital Dreams: Custom Websites Tailored to Your
                                Unique Vision
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="service-item   relative md:p-10 p-5  bg-[#222222] rounded-2xl shadow-lg"

                        >
                            <h3 className="text-[18px] md:text-[22px]  mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Web Development</h3>
                            <p>
                                Building the Backbone of Your Online Presence: Expert Web
                                Solutions
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="service-item  relative md:p-10 p-5  bg-[#222222] rounded-2xl shadow-lg"
                        >
                            <h3 className="text-[18px] md:text-[22px]  mb-3 pb-2 inline-block font-semibold border-[#172a28]/10">Software Consultancy</h3>
                            <p>
                                Transforming Challenges into Opportunities: Expert Software
                                Consultancy Services
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="service-item  relative md:p-10 p-5  bg-[#222222] rounded-2xl shadow-lg"

                        >
                            <h3 className="text-[18px] md:text-[22px]  mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Videography</h3>
                            <p>
                                Telling Your Story Through Cinematic Excellence: Top-Tier
                                Videography Solutions
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="service-item  relative md:p-10 p-5  bg-[#222222] rounded-2xl shadow-lg"
                        >
                            <h3 className="text-[18px] md:text-[22px]  mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Graphic Design</h3>
                            <p>
                                Transforming Ideas into Visual Masterpieces: Professional Graphic
                                Design
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="service-item  relative md:p-10 p-5  bg-[#222222] rounded-2xl shadow-lg"
                        >
                            <h3 className="text-[18px] md:text-[22px]  mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Accounts Consultancy</h3>
                            <p>
                                Focuses on the clarity and transparency that your accounting
                                services provide.
                            </p>
                        </motion.div>
                    </motion.div>

                    <section ref={ref} id="about" className="about  mt-16">
                        <motion.div initial="hidden"
                            animate={inView ? "visible" : "hidden"} variants={containerVariants} className="container mx-auto text-center mb-12" data-aos="fade-up">
                            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">About Us</motion.h2>
                            <motion.p variants={itemVariants} className="text-white/60">Crafting Tomorrow's Technology, Today</motion.p >
                        </motion.div>

                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 text-sm md:text-[16px] items-center">
                            <motion.div initial="hidden"
                                animate={inView ? "visible" : "hidden"} variants={containerVariants} >
                                <motion.h3 variants={itemVariants} className="text-[16px] sm:text-2xl font-semibold  mb-4">
                                    Empowering Your Digital Future with Innovative Solutions
                                </motion.h3>
                            </motion.div>
                            <motion.div initial="hidden"
                                animate={inView ? "visible" : "hidden"} variants={containerVariants} >
                                <motion.div variants={itemVariants} className="content lg:pl-8">
                                    <p className="italic text-[#ffffff] mb-4">
                                        Welcome to Cli-X, where innovation meets technology. As a
                                        leading digital software house, we are committed to delivering
                                        exceptional digital solutions that propel your business
                                        forward.
                                    </p>
                                    <p className="text-[#ffffff]">
                                        At Cli-X, our mission is to harness the power of technology to
                                        deliver innovative and effective solutions that address the
                                        unique challenges of our clients. We are driven by a passion
                                        for excellence and a commitment to exceeding expectations.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>
                </div>

            </section >
        </>
    );
};

export default Services;
