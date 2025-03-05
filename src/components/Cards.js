import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Cards = () => {

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
        <>
            <div className="min-h-screen bg-hero-gradient-1 text-white p-6 flex flex-wrap gap-6 items-center justify-center">
                <div className="flex gap-5">
                    <div className="flex flex-col gap-5">
                        <motion.div ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#222222] rounded-3xl w-[80px] md:w-[450px] shadow-lg flex flex-col">
                            <div className="px-10 py-8">
                                <h2 className="text-xl font-bold">Fast Websites, Always</h2>
                                <p className="text-white/60 text-sm mt-2">
                                    Your website will load super fast because we use the latest technology
                                    and powerful servers.
                                </p>
                            </div>


                            <div className="flex flex-col gap-3 px-14 pb-5">
                                <div className="mt-4 flex gap-3 items-center">
                                    <p className="font-semibold">LightBox</p>
                                    <div className="w-full h-3 bg-[#3B3B3B] rounded-lg p-3 relative">
                                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-[90%] h-3 rounded-lg p-3 absolute top-0 left-0"></div>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-3 items-center">
                                    <p className="text-[15px] font-semibold">Other1</p>
                                    <div className="w-full h-3 bg-[#3B3B3B] rounded-lg p-3 relative">
                                        <div className="bg-[#2E2E2E] w-[40%] h-3 rounded-lg p-3 absolute top-0 left-0"></div>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-3 items-center">
                                    <p className=" text-[15px] font-semibold">Other2</p>
                                    <div className="w-full h-3 bg-[#3B3B3B] rounded-lg p-3 relative">
                                        <div className="bg-[#2E2E2E] w-[30%] h-3 rounded-lg p-3 absolute top-0 left-0"></div>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-3 items-center">
                                    <p className=" text-[15px] font-semibold">Other3</p>
                                    <div className="w-full h-3 bg-[#3B3B3B] rounded-lg p-3 relative">
                                        <div className="bg-[#2E2E2E] w-[20%] h-3 rounded-lg p-3 absolute top-0 left-0"></div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>



                        <motion.div ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#222222] rounded-3xl w-80 md:w-[450px] shadow-lg flex flex-col gap-5">
                            <div className="px-10 py-8">
                                <h2 className="text-xl font-bold">Help When You Need It</h2>
                                <p className="text-white/60 text-sm mt-2">
                                    Need help? We're here 24/7. Our team is super friendly and ready to help you with anything.
                                </p>
                            </div>

                            <div className="mt-4 flex justify-center  pb-5">
                                <div className="bg-[#3B3B3B] rounded-full w-[130px] h-[130px] flex items-center justify-center mr-10">
                                    <div className="h-[60px] w-[60px]">
                                        <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                                            <defs>
                                                <linearGradient id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#a78bfa" />
                                                    <stop offset="50%" stopColor="#818cf8" />
                                                    <stop offset="100%" stopColor="#f472b6" />
                                                </linearGradient>
                                            </defs>
                                            <MdMarkEmailUnread
                                                width="100%"
                                                height="100%"
                                                style={{ fill: "url(#gradientId)", display: "block", margin: "auto" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="bg-[#3B3B3B] rounded-[50%] w-[130px] h-[130px] p-2 flex items-center justify-center z-50 absolute ">
                                    <div className="flex items-center justify-center p-3 rounded-[50%] w-[60px] h-[60px] bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                                        <IoMdVideocam size={30} style={{ color: "#ffffff" }} />
                                    </div>
                                </div>
                                <div className="bg-[#3B3B3B] rounded-full w-[130px] h-[130px] flex items-center justify-center ml-10">
                                    <div className="h-[60px] w-[60px]">
                                        <svg width="70" height="70" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#a78bfa" />
                                                    <stop offset="50%" stopColor="#818cf8" />
                                                    <stop offset="100%" stopColor="#f472b6" />
                                                </linearGradient>
                                            </defs>
                                            <FaPhoneAlt
                                                width="100%"
                                                height="100%"
                                                style={{ fill: "url(#gradientId)", display: "block", margin: "auto" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-5">

                        <motion.div ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#222222]  rounded-3xl w-80 md:w-[450px] shadow-lg">
                            <div className="px-10 py-8">
                                <h2 className="text-xl font-bold">Grow Your Website Easily</h2>
                                <p className="text-gray-400 text-sm mt-2">
                                    If your website gets bigger, no worries! You can easily make it bigger too.
                                </p>
                            </div>

                            <div className="mt-4 flex items-center px-14 pb-5">
                                <span className="text-lg font-bold">56%+</span>
                                <span className="ml-2 text-gray-400">Visitors</span>
                            </div>
                        </motion.div>

                        <motion.div ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#222222] rounded-3xl w-80 md:w-[450px] shadow-lg flex flex-col gap-5">
                            <div className="px-10 py-8">
                                <h2 className="text-xl font-bold">Keep Your Website Safe</h2>
                                <p className="text-white/60 text-sm mt-2">
                                    We've got a bunch of security tools to make sure your website stays safe from bad stuff.
                                </p>
                            </div>

                            <div className="mb-8 mx-10 py-2 px-4 bg-[#3B3B3B] rounded-lg flex items-center gap-2">
                                <button className="p-2 rounded-[50px] text-[#ffffff] bg-gradient-to-r w-[120px] from-purple-400 via-indigo-300 to-pink-400">
                                    <span>🔒 Secure</span>
                                </button>

                                <span className="text-gray-400">https://website.id</span>
                            </div>
                        </motion.div>



                        <motion.div ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#222222] rounded-3xl w-80 md:w-[450px] shadow-lg flex flex-col gap-5">
                            <div className="px-10 py-8">
                                <h2 className="text-xl font-bold">Great Service, Affordable Prices</h2>
                                <p className="text-white/60 text-sm mt-2">
                                    We give you a lot for your money. Big websites or small, we have a plan that fits your budget.
                                </p>
                            </div>

                            <div className="flex gap-2 py-8 ">
                                <div className="bg-[#ffffff] rounded-tr-xl rounded-br-xl p-3 w-[20%]">

                                </div>

                                <div className="bg-[#ffffff] rounded-xl p-3 flex flex-col gap-1 w-[60%]">
                                    <h4 className="text-black text-[16px] font-bold">Bussiness</h4>
                                    <p className="text-gray-500 text-[14px]">Scalable hosting tailored for growing bussinesses</p>
                                </div>

                                <div className="bg-[#ffffff] rounded-bl-xl rounded-tl-xl p-3 flex flex-col gap-2 w-[20%]">

                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Cards;