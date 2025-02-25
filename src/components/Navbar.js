import { useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="w-full shadow z-50">
      {/* Top Bar */}
      <div className="bg-hero-gradient-r text-[#ffffff] py-4 w-full text-sm md:text-[15px]">
        <div className="container mx-auto w-full md:px-0 md:w-[90%] 2xl:w-[80%] flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <a href="mailto:contact@example.com" className="flex items-center space-x- hover:text-gray-700">
              <span>infoclix@gmail.com</span>
            </a>
            <span className="text-gray-400">|</span>
            <span className="flex items-center">0321-2427626</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            <a href="#" className="hover:text-gray-700"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-blue-700"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
          </div>
        </div>
      </div>

      {/* Branding & Navigation */}
      <div className="bg-hero-gradient-r py-4">
        <div className="container mx-auto flex text-[#ffffff] justify-between items-center px-4">
          <Link href="/" className="flex items-center space-x-1 text-2xl font-bold">
            <span>CLI-X</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <IoMdClose size={20} className="w-6 h-6" /> : <IoMdMenu size={20} className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className={`md:hidden text-[#ffffff] bg-[#008374] shadow-lg p-6 transition-all ease-in-out delay-700 ${mobileMenuOpen ? "max-h-[500px]" : "h-0"}`}>
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
        </nav>
      )}
    </header>
  )

}

export default Navbar;