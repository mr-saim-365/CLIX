import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []); 


  const debouncedObserver = useCallback(() => {
 
  }, []);

  return (
    <header className="py-5">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto w-full md:px-0 md:w-[90%] 2xl:w-[80%] flex justify-between items-center px-4"
      >
        <motion.div variants={itemVariants} className="flex items-center space-x-4">
          <a href="mailto:contact@example.com" className="flex items-center ">
            <span>infoclix@gmail.com</span>
          </a>
          <span className="text-gray-400">|</span>
          <span className="flex items-center">0321-2427626</span>
        </motion.div>
        <motion.div variants={itemVariants} className="hidden sm:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-700"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-blue-700"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
        </motion.div>
      </motion.div>

      <div ref={ref} className="my-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mx-auto flex text-[#ffffff] justify-between items-center px-4 md:w-[90%] 2xl:w-[80%] md:px-1">
            <Link href="/" className="flex items-center space-x-1 text-2xl font-bold">
              <span>CLI-X</span>
            </Link>


            <nav variants={itemVariants} className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-700">Home</Link>
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
              <Link href="/ContactUs" className="hover:text-gray-700">Contact Us</Link>
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
          initial={{ opacity: 0, transform: 'translateY(-100%)' }}
          animate={{ opacity: 1, transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)' }}
          transition={{ duration: 0.4 }} // Using transform for smooth transition
          className="md:hidden text-[#ffffff] bg-[#222222] rounded-md mx-2 p-6 overflow-hidden"
        >
          <ul className="flex flex-col gap-5">
            <li><Link href="/">Home</Link></li>
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
            <li><Link href="/ContactUs">Contact Us</Link></li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
