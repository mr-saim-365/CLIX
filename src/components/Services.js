import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const itemVariants = {
        hidden: { opacity: 0, x: -80, transition: { delay: 0.8 } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section ref={ref} className="bg-hero-gradient-tl py-16">
            <div className="w-full px-6 md:px-0 md:w-[90%] 2xl:w-[70%] mx-auto text-[#ffffff]">
                {/* Heading Section */}
                <motion.div
                    animate={controls}
                    variants={itemVariants}
                    className="mx-auto 2xl:w-[80%] md:w-[90%] text-center mb-12"
                >
                    <h1 className="text-3xl font-bold font-montserrat mb-4">Our Services</h1>
                    <p className="text-white/60">
                        From innovative software solutions to captivating design, we craft
                        digital excellence tailored to elevate your business.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: "Web Design", desc: "Designing Your Digital Dreams: Custom Websites Tailored to Your Unique Vision" },
                        { title: "Web Development", desc: "Building the Backbone of Your Online Presence: Expert Web Solutions" },
                        { title: "Software Consultancy", desc: "Transforming Challenges into Opportunities: Expert Software Consultancy Services" },
                        { title: "Videography", desc: "Telling Your Story Through Cinematic Excellence: Top-Tier Videography Solutions" },
                        { title: "Graphic Design", desc: "Transforming Ideas into Visual Masterpieces: Professional Graphic Design" },
                        { title: "Accounts Consultancy", desc: "Focuses on the clarity and transparency that your accounting services provide." }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            animate={controls}
                            variants={itemVariants}
                            className="service-item relative md:p-10 p-5 bg-[#222222] rounded-2xl shadow-lg"
                        >
                            <h3 className="text-[18px] md:text-[22px] mb-3 pb-2 font-semibold">{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* About Us Section */}
                <section id="about" className="mt-16">
                    <motion.div
                        animate={controls}
                        variants={itemVariants}
                        className="mx-auto text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-white/60">Crafting Tomorrow's Technology, Today</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 text-sm md:text-[16px] items-center">
                        <motion.div
                            animate={controls}
                            variants={itemVariants}
                        >
                            <h3 className="text-[16px] sm:text-2xl font-semibold mb-4">
                                Empowering Your Digital Future with Innovative Solutions
                            </h3>
                        </motion.div>
                        <motion.div animate={controls} variants={itemVariants} className="lg:pl-8">
                            <p className="italic text-[#ffffff] mb-4">
                                Welcome to Cli-X, where innovation meets technology. As a
                                leading digital software house, we are committed to delivering
                                exceptional digital solutions that propel your business forward.
                            </p>
                            <p className="text-[#ffffff]">
                                At Cli-X, our mission is to harness the power of technology to
                                deliver innovative and effective solutions that address the
                                unique challenges of our clients. We are driven by a passion
                                for excellence and a commitment to exceeding expectations.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Services;
