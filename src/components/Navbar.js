import { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
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
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header >
      <motion.div initial="hidden"
        animate={inView ? "visible" : "hidden"} variants={containerVariants} className="container mx-auto w-full md:px-0 md:w-[90%] 2xl:w-[80%] flex justify-between items-center px-4">
        <motion.div variants={itemVariants} className="flex items-center space-x-4">
          <a href="mailto:contact@example.com" className="flex items-center space-x- hover:text-gray-700">
            <span>infoclix@gmail.com</span>
          </a>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">0321-2427626</span>
        </motion.div>
        <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-4 ">
          <a href="#" className="hover:text-gray-700"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-blue-700"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
        </motion.div>
      </motion.div>

      <div ref={ref} className=" py-4">
        <motion.div initial="hidden"
          animate={inView ? "visible" : "hidden"} variants={containerVariants} >

          <motion.div variants={itemVariants} className="container mx-auto flex text-[#ffffff] justify-between items-center px-4 md:px-1">
            <Link href="/" className="flex items-center space-x-1 text-2xl font-bold">
              <span>CLI-X</span>
            </Link>

            {/* Desktop Navigation */}
            <nav variants={itemVariants} className="hidden md:flex items-center space-x-6">
              <Link href="#hero" className="hover:text-gray-700">Home</Link>
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="hover:text-gray-700 flex items-center space-x-1">
                  <span>Our Services</span>

                </button>
              </div>
              <Link href="#about" className="hover:text-gray-700">About Us</Link>
              <Link href="#contact" className="hover:text-gray-700">Contact Us</Link>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <IoMdClose size={15} className="w-5 h-5" /> : <IoMdMenu size={20} className="w-6 h-6 " />}
            </button>
          </motion.div>

        </motion.div>
      </div>

      {mobileMenuOpen && (
        <motion.nav
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: mobileMenuOpen ? 500 : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }} className="md:hidden text-[#ffffff] bg-hero-gradient-r p-6 overflow-hidden">
          <ul className="flex flex-col gap-5">
            <li><Link href="#hero">Home</Link></li>
            <li>
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center">
                  <span>Our Services</span>
                  <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                </summary>
                <ul className="mt-2 ml-4 space-y-2">
                  <li><Link href="#web-design">Web Design</Link></li>
                  <li><Link href="#seo">SEO</Link></li>
                  <li><Link href="#marketing">Marketing</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
        </motion.nav>
      )}
    </header>
  )

}

export default Navbar;