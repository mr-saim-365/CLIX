import { IoMdArrowUp } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";

const ScrollTop = () => {

    const [arrowActive, setArrowActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setArrowActive(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleScrollTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Link
                onClick={toggleScrollTop}
                href="#"
                id="scrollTop"
                className={`fixed right-[15px] bottom-[15px] z-[99999] w-11 h-11 rounded-full bg-[#008374] flex items-center justify-center transition-opacity duration-300 ${arrowActive ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}

            ><IoMdArrowUp size={20} className="text-[#ffffff] " />
            </Link>
        </>
    )

}

export default ScrollTop;