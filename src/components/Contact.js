
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    return (
        <section className="contact py-16 px-4 md:px-0 bg-hero-gradient-bl">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 0.8 }}
                className="container mx-auto text-center mb-12"
            >
                <h2 className="text-3xl text-[#ffffff] font-bold mb-4">Contact Us</h2>
                <p className="text-white/60">
                    Reach out today and let's center shaping your success together.
                </p>
            </motion.div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 1 }}
                className="container mx-auto"
            >
                <div className="flex lg:flex-row items-center flex-col gap-8">

                    <div className="flex flex-col bg-[#222222] text-[#ffffff] rounded-lg text-sm p-5 space-y-6 lg:w-[40%] 2xl:w-[30%] w-full">

                        {[
                            { icon: <BsGeoAlt size={20} />, title: "Address", desc: "Industrial Area, North Karachi, Karachi, Pakistan" },
                            { icon: <BsTelephone size={20} />, title: "Call Us", desc: "0321-2427626" },
                            { icon: <BsEnvelope size={20} />, title: "Email Us", desc: "infoclix@gmail.com" },
                            { icon: <BsClock size={20} />, title: "Open Hours", desc: "24 hrs" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex items-center space-x-4 bg-white/10 p-5 rounded-md"
                            >
                                <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-[5px]">{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>

                    <div className="lg:w-[60%] 2xl:w-[70%] w-full">
                        <motion.form
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 1 }}
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
                                <button type="submit" className="text-[#ffffff] px-6 py-3 rounded-[50px] bg-[#222222] transition duration-200">
                                    Send Message
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
