import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

const Footer = () => {

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    });

    useEffect(() => {
        const isSmallScreen = window.innerWidth < 768;

        if (intersection?.isIntersecting) {
            // Animate IN
            gsap.to(".fadeIn", {
                opacity: 1,
                x: isSmallScreen ? 0 : 20,
                y: isSmallScreen ? 20 : 0,
                duration: 2,
                ease: "power4.out",
                stagger: { amount: 0.3 },
            });
        } else {
            // Animate OUT
            gsap.to(".fadeIn", {
                opacity: 0,
                x: isSmallScreen ? 0 : -60,
                y: isSmallScreen ? -20 : 0,
                duration: 2,
                ease: "power4.out",
            });
        }
    }, [intersection]);

    return (
        <>
            <footer id="footer" class="bg-black text-[#FFFFFF] text-sm relative">
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="py-[40px] md:w-[90%] px-4 md:px-0 flex items-center justify-center">
                        <div>
                            <div ref={sectionRef} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                                <div className="fadeIn col-span-2">
                                    <Link href="index.html" class="flex items-center mb-6">
                                        <span class="text-4xl font-bold tracking-wide">CLI-X</span>
                                    </Link>
                                    <p class="text-sm text-white/60">Cross Layer Information Exchange</p>
                                    <div class="flex mt-4 space-x-3">
                                        <Link href="#" class="flex items-center justify-center w-10 h-10 rounded-full border hover:text-white/100  hover:border-white/60 transition">
                                            <FaXTwitter size={20} class="bi bi-twitter-x" />
                                        </Link>
                                        <Link href="#" class="flex items-center justify-center w-10 h-10 rounded-full border hover:text-blue-700 hover:border-white/60 transition">
                                            <MdOutlineFacebook size={20} class="bi bi-facebook" />
                                        </Link>
                                        <Link href="#" class="flex items-center justify-center w-10 h-10 rounded-full border hover:text-pink-500   hover:border-white/60 transition">
                                            <IoLogoInstagram size={20} class="bi bi-instagram" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="fadeIn">
                                    <h4 class="text-base font-bold pb-3">Useful Links</h4>
                                    <ul class="space-y-2 text-white/60">
                                        <li><Link href="#hero">Home</Link></li>
                                        <li><Link href="#service">Our Services</Link></li>
                                        <li><Link href="#about">About Us</Link></li>
                                        <li><Link href="#contact">Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="fadeIn">
                                    <h4 class="text-base font-bold pb-3">Our Services</h4>
                                    <ul class="space-y-2 text-white/60">
                                        <li><Link href="#">Web Design</Link></li>
                                        <li><Link href="#">Web Development</Link></li>
                                        <li><Link href="#">Software Consultancy</Link></li>
                                        <li><Link href="#">Videography</Link></li>
                                        <li><Link href="#">Graphic Design</Link></li>
                                        <li><Link href="#">3D Design</Link></li>
                                    </ul>
                                </div>

                                <div class="fadeIn col-span-1 lg:col-span-1 text-center md:text-left text-white/60">
                                    <h4 class="text-base font-bold pb-3 text-[#ffffff]">Contact Us</h4>
                                    <p class="mt-4"><strong>Phone:</strong> <span>0321-2427626</span></p>
                                    <p><strong>Email:</strong> <span>infoclix@gmail.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8 border-t py-8 border-white/20 text-white/60 md:w-[90%] px-4 md:px-0 flex flex-col items-center justify-center">
                        <div >
                            <p class="fadeIn mb-1">© <span>Copyright</span> <strong class="px-1">Impact</strong> <span>All Rights Reserved</span></p>
                            <div class="fadeIn text-sm mt-1">
                                Designed by <Link href="https://bootstrapmade.com/">CLI-X</Link>
                            </div>
                        </div>

                    </div>
                </div>



            </footer>

        </>
    )

}


export default Footer;