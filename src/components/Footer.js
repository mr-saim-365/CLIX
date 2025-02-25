import Link from "next/link";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer id="footer" class="bg-[#222222] text-[#FFFFFF] text-sm relative">
                <div className=" mx-auto py-[40px] w-full px-4 md:px-0 md:w-[90%] 2xl:w-[70%]">
                    <div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="col-span-1">
                                <Link href="index.html" class="flex items-center mb-6">
                                    <span class="text-4xl font-bold tracking-wide">CLI-X</span>
                                </Link>
                                <p class="text-sm">Cross Layer Information Exchange</p>
                                <div class="flex mt-4 space-x-3">
                                    <Link href="#" class="flex items-center justify-center w-10 h-10 rounded-full border hover:text-white/100  hover:border-white/60 transition">
                                        <FaXTwitter size={20} class="bi bi-twitter-x" />
                                    </Link>
                                    <Link href="#" class="flex items-center justify-center w-10 h-10 rounded-full border hover:text-blue-700 hover:border-white/60 transition">
                                        <MdOutlineFacebook size={20} class="bi bi-facebook" />
                                    </Link>
                                    <Link href="#" class="flex items-center justify-center w-10 h-10 rounded-full border hover:text-pink-500 border-gray-400 text-gray-400  hover:border-white/60 transition">
                                        <IoLogoInstagram size={20} class="bi bi-instagram" />
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h4 class="text-base font-bold pb-3">Useful Links</h4>
                                <ul class="space-y-2">
                                    <li><Link href="#hero" class="hover:text-white/60">Home</Link></li>
                                    <li><Link href="#service" class="hover:text-white/60">Our Services</Link></li>
                                    <li><Link href="#about" class="hover:text-white/60">About Us</Link></li>
                                    <li><Link href="#contact" class="hover:text-white/60">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h4 class="text-base font-bold pb-3">Our Services</h4>
                                <ul class="space-y-2">
                                    <li><Link href="#" class="hover:text-white/60">Web Design</Link></li>
                                    <li><Link href="#" class="hover:text-white/60">Web Development</Link></li>
                                    <li><Link href="#" class="hover:text-white/60">Software Consultancy</Link></li>
                                    <li><Link href="#" class="hover:text-white/60">Videography</Link></li>
                                    <li><Link href="#" class="hover:text-white/60">Graphic Design</Link></li>
                                    <li><Link href="#" class="hover:text-white/60">3D Design</Link></li>
                                </ul>
                            </div>

                            <div class="col-span-1 lg:col-span-1 text-center md:text-left">
                                <h4 class="text-base font-bold pb-3">Contact Us</h4>
                                <p class="mt-4"><strong>Phone:</strong> <span>0321-2427626</span></p>
                                <p><strong>Email:</strong> <span>infoclix@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-8 border-t py-8 border-white/20">
                    <p class="mb-1">© <span>Copyright</span> <strong class="px-1">Impact</strong> <span>All Rights Reserved</span></p>
                    <div class="text-sm mt-1">
                        Designed by <Link href="https://bootstrapmade.com/" class="hover:text-white/60">CLI-X</Link>
                    </div>
                </div>


            </footer>

        </>
    )

}


export default Footer;