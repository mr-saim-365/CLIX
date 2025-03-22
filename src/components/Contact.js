import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
    const titleControls = useAnimation();
    const formControls = useAnimation();
    const infoControls = useAnimation();

    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false, threshold: 0.2 });
    const { ref: formRef, inView: formInView } = useInView({ triggerOnce: false, threshold: 0.2 });
    const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (titleInView) titleControls.start("visible");
        else titleControls.start("hidden");

        if (formInView) formControls.start("visible");
        else formControls.start("hidden");

        if (infoInView) infoControls.start("visible");
        else infoControls.start("hidden");
    }, [titleInView, formInView, infoInView, titleControls, formControls, infoControls]);

    const fadeInVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="contact py-16 px-4 md:px-0 bg-hero-gradient-bl">
            {/* Title Section */}
            <motion.div
                ref={titleRef}
                initial="hidden"
                animate={titleControls}
                variants={fadeInVariants}
                className="container mx-auto text-center mb-12"
            >
                <h2 className="text-3xl text-[#ffffff] font-bold mb-4">Contact Us</h2>
                <p className="text-white/60">
                    Reach out today and let's start shaping your success together.
                </p>
            </motion.div>

            <div className="container mx-auto flex lg:flex-row items-center flex-col gap-8">
                {/* Contact Info Section */}
                <motion.div
                    ref={infoRef}
                    initial="hidden"
                    animate={infoControls}
                    variants={fadeInVariants}
                    className="flex flex-col bg-[#222222] text-[#ffffff] rounded-lg text-sm p-5 space-y-6 lg:w-[40%] 2xl:w-[30%] w-full"
                >
                    {[
                        { icon: <BsGeoAlt size={20} />, title: "Address", desc: "Industrial Area, North Karachi, Karachi, Pakistan" },
                        { icon: <BsTelephone size={20} />, title: "Call Us", desc: "0321-2427626" },
                        { icon: <BsEnvelope size={20} />, title: "Email Us", desc: "infoclix@gmail.com" },
                        { icon: <BsClock size={20} />, title: "Open Hours", desc: "24 hrs" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={infoControls}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
                            }}
                            className="flex items-center space-x-4 bg-white/10 p-5 rounded-md"
                        >
                            <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form Section */}
                <motion.div
                    ref={formRef}
                    initial="hidden"
                    animate={formControls}
                    variants={fadeInVariants}
                    className="lg:w-[60%] 2xl:w-[70%] w-full"
                >
                    <form
                        action="forms/contact.php"
                        method="post"
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222] focus:ring-1 focus:ring-white/60 focus:outline-none" />
                            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222] focus:ring-1 focus:ring-white/60 focus:outline-none" />
                        </div>

                        <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222] focus:ring-1 focus:ring-white/60 focus:outline-none" />

                        <textarea name="message" rows="8" placeholder="Message" required className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222] focus:ring-1 focus:ring-white/60 focus:outline-none"></textarea>

                        <div className="text-center">
                            <button type="submit" className="text-[#ffffff] px-6 py-3 rounded-[50px] bg-[#222222] hover:bg-white hover:text-black transition duration-200">
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
