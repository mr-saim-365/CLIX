import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";


const Services = () => {

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Triggers when 20% of the element is visible
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            // Animate IN when element enters viewport
            gsap.to(".fadeIn", {
                opacity: 1,
                x: 20,
                duration: 2,
                ease: "power4.out",
                stagger: { amount: 0.3 },
            });
        } else {
            // Animate OUT when element leaves viewport
            gsap.to(".fadeIn", {
                opacity: 0,
                x: -80,
                duration: 2,
                ease: "power4.out",
            });
        }
    }, [intersection]);

    return (
        <>
            <section id="services" className="services bg-hero-gradient-l py-16">
                <div className="w-full px-2 md:px-0 md:w-[90%] 2xl:w-[70%] mx-auto text-[#ffffff]">
                    <div className="container mx-auto 2xl:w-[80%] md:w-[90%] text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl font-bold font-montserrat mb-4">Our Services</h2>
                        <p className="text-white/60">
                            From innovative software solutions to captivating design, we craft
                            digital excellence tailored to elevate your business.
                        </p>
                    </div>

                    <div ref={sectionRef} className="container mx-auto grid grid-cols-1 text-sm sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div
                            className="service-item fadeIn relative p-10 bg-[#222222] rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-[22px] mb-3 inline-block pb-2 font-semibol border-[#172a28]/10">Web Design</h3>
                            <p>
                                Designing Your Digital Dreams: Custom Websites Tailored to Your
                                Unique Vision
                            </p>
                        </div>

                        <div
                            className="service-item  fadeIn   relative p-10 bg-[#222222] rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="text-[22px] mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Web Development</h3>
                            <p>
                                Building the Backbone of Your Online Presence: Expert Web
                                Solutions
                            </p>
                        </div>

                        <div
                            className="service-item  fadeIn  relative p-10 bg-[#222222] rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h3 className="text-[22px] mb-3 pb-2 inline-block font-semibold border-[#172a28]/10">Software Consultancy</h3>
                            <p>
                                Transforming Challenges into Opportunities: Expert Software
                                Consultancy Services
                            </p>
                        </div>

                        <div
                            className="service-item  fadeIn  relative p-10 bg-[#222222] rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h3 className="text-[22px] mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Videography</h3>
                            <p>
                                Telling Your Story Through Cinematic Excellence: Top-Tier
                                Videography Solutions
                            </p>
                        </div>

                        <div
                            className="service-item  fadeIn  relative p-10 bg-[#222222] rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <h3 className="text-[22px] mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Graphic Design</h3>
                            <p>
                                Transforming Ideas into Visual Masterpieces: Professional Graphic
                                Design
                            </p>
                        </div>

                        <div
                            className="service-item  fadeIn  relative p-10 bg-[#222222] rounded-2xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <h3 className="text-[22px] mb-3 pb-2 inline-block  font-semibold border-[#172a28]/10">Accounts Consultancy</h3>
                            <p>
                                Focuses on the clarity and transparency that your accounting
                                services provide.
                            </p>
                        </div>
                    </div>

                    <section id="about" className="about  mt-16">
                        <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                            <h2 className="text-3xl font-bold mb-4">About Us</h2>
                            <p className="text-white/60">Crafting Tomorrow's Technology, Today</p>
                        </div>

                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 text-sm md:text-[16px] items-center">
                            <div data-aos="fade-up" data-aos-delay="100">
                                <h3 className="text-[16px] sm:text-2xl font-semibold  mb-4">
                                    Empowering Your Digital Future with Innovative Solutions
                                </h3>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="250">
                                <div className="content lg:pl-8">
                                    <p className="italic text-[#ffffff] mb-4">
                                        Welcome to Cli-X, where innovation meets technology. As a
                                        leading digital software house, we are committed to delivering
                                        exceptional digital solutions that propel your business
                                        forward.
                                    </p>
                                    <p className="text-[#ffffff]">
                                        At Cli-X, our mission is to harness the power of technology to
                                        deliver innovative and effective solutions that address the
                                        unique challenges of our clients. We are driven by a passion
                                        for excellence and a commitment to exceeding expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </>
    );
};

export default Services;
