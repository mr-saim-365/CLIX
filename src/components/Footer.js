import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Footer = () => {
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
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <footer id="footer" className="bg-black text-[#FFFFFF] text-sm relative">
            <div ref={ref} className="w-full flex flex-col items-center">
                <div className="py-[40px] md:w-[90%] px-8 md:px-0 flex items-center justify-center">
                    <motion.div className="flex flex-wrap gap-8 justify-between w-full">
                        <motion.div
                            animate={controls}
                            variants={itemVariants}
                            className="flex-1 min-w-[250px]">
                            <Link href="index.html" className="flex items-center mb-6">
                                <span className="text-4xl font-bold tracking-wide">CLI-X</span>
                            </Link>
                            <p className="text-sm text-white/60">Cross Layer Information Exchange</p>
                            <div className="flex mt-4 space-x-3">
                                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border hover:text-white/100 hover:border-white/60 transition">
                                    <FaXTwitter size={20} />
                                </Link>
                                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border hover:text-blue-700 hover:border-white/60 transition">
                                    <MdOutlineFacebook size={20} />
                                </Link>
                                <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border hover:text-pink-500 hover:border-white/60 transition">
                                    <IoLogoInstagram size={20} />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={controls}
                            variants={itemVariants}
                            className="flex-1 min-w-[200px] justify-center items-center">
                            <h4 className="text-base font-bold pb-3">Useful Links</h4>
                            <ul className="space-y-2 text-white/60">
                                <li><Link href="#hero">Home</Link></li>
                                <li><Link href="#service">Our Services</Link></li>
                                <li><Link href="#about">About Us</Link></li>
                                <li><Link href="#contact">Contact Us</Link></li>
                            </ul>
                        </motion.div>

                        <motion.div
                            animate={controls}
                            variants={itemVariants}
                            className="flex-1 min-w-[200px]">
                            <h4 className="text-base font-bold pb-3">Our Services</h4>
                            <ul className="space-y-2 text-white/60">
                                <li><Link href="#">Web Design</Link></li>
                                <li><Link href="#">Web Development</Link></li>
                                <li><Link href="#">Software Consultancy</Link></li>
                                <li><Link href="#">Videography</Link></li>
                                <li><Link href="#">Graphic Design</Link></li>
                                <li><Link href="#">3D Design</Link></li>
                            </ul>
                        </motion.div>

                        <motion.div
                            animate={controls}
                            variants={itemVariants}
                            className="flex-1 min-w-[250px] text-white/60">
                            <h4 className="text-base font-bold pb-3">Contact Us</h4>
                            <p className="mt-4"><strong>Phone:</strong> <span>0321-2427626</span></p>
                            <p><strong>Email:</strong> <span>infoclix@gmail.com</span></p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div className="text-center mt-8 border-t py-8 border-white/20 text-white/60 w-full px-4 md:px-0">
                    <motion.div
                        animate={controls}
                        variants={itemVariants}
                        className="w-[90%] mx-auto">
                        <p className="mb-1">© <span>Copyright</span> <strong className="px-1">Impact</strong> <span>All Rights Reserved</span></p>
                        <div className="text-sm mt-1">Designed by <Link href="https://bootstrapmade.com/">CLI-X</Link></div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;