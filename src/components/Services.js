import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";


const Services = () => {

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 1
    });
    useEffect(() => {
        if (intersection) {
            if (intersection.intersectionRatio < 0.5) {
                gsap.to(".fadeIn", {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power4.out",
                });
            } else {
                gsap.to(".fadeIn", {
                    opacity: 1,
                    y: -60,
                    duration: 1,
                    ease: "power4.out",
                    stagger: { amount: 0.3 },
                });
            }
        }
    }, [intersection]);

    return (
        <>
            <section id="services" class="services py-16">
                <div class="container mx-auto 2xl:w-[80%] md:w-[90%] text-center mb-12" data-aos="fade-up">
                    <h2 class="text-3xl text-[#172A28] font-bold font-montserrat mb-4">Our Services</h2>
                    <p class="text-gray-600">
                        From innovative software solutions to captivating design, we craft
                        digital excellence tailored to elevate your business.
                    </p>
                </div>

                <div ref={sectionRef} class="container mx-auto grid grid-cols-1 text-sm text-[#222222] sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div
                        class="service-item fadeIn relative p-10 bg-white rounded-2xl border shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 class="text-[22px] text-[#172a28]/80 mb-5 inline-block pb-2 font-semibold border-b-4  border-[#172a28]/10 hover:border-[color:rgba(0,131,116,0.9)] hover:text-[#172a28]">Web Design</h3>
                        <p>
                            Designing Your Digital Dreams: Custom Websites Tailored to Your
                            Unique Vision
                        </p>
                    </div>

                    <div
                        class="service-item  fadeIn  relative p-10 bg-white  border rounded-2xl shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 class="text-[22px] text-[#172a28]/80 mb-5 pb-2 inline-block  font-semibold  border-b-4  border-[#172a28]/10 hover:border-[color:rgba(0,131,116,0.9)] hover:text-[#172a28]">Web Development</h3>
                        <p>
                            Building the Backbone of Your Online Presence: Expert Web
                            Solutions
                        </p>
                    </div>

                    <div
                        class="service-item  fadeIn  relative p-10 bg-white  border rounded-2xl shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h3 class="text-[22px] text-[#172a28]/80   mb-5 pb-2 inline-block font-semibold  border-b-4  border-[#172a28]/10 hover:border-[color:rgba(0,131,116,0.9)] hover:text-[#172a28]">Software Consultancy</h3>
                        <p>
                            Transforming Challenges into Opportunities: Expert Software
                            Consultancy Services
                        </p>
                    </div>

                    <div
                        class="service-item  fadeIn  relative p-10 bg-white  border rounded-2xl shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <h3 class="text-[22px] text-[#172a28]/80  mb-5 pb-2 inline-block  font-semibold  border-b-4  border-[#172a28]/10 hover:border-[color:rgba(0,131,116,0.9)] hover:text-[#172a28]">Videography</h3>
                        <p>
                            Telling Your Story Through Cinematic Excellence: Top-Tier
                            Videography Solutions
                        </p>
                    </div>

                    <div
                        class="service-item  fadeIn  relative p-10 bg-white  border rounded-2xl shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <h3 class="text-[22px] text-[#172a28]/80  mb-5 pb-2 inline-block  font-semibold  border-b-4  border-[#172a28]/10 hover:border-[color:rgba(0,131,116,0.9)] hover:text-[#172a28]">Graphic Design</h3>
                        <p>
                            Transforming Ideas into Visual Masterpieces: Professional Graphic
                            Design
                        </p>
                    </div>

                    <div
                        class="service-item  fadeIn  relative p-10 bg-white  border rounded-2xl shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        <h3 class="text-[22px] text-[#172a28]/80  mb-5 pb-2 inline-block  font-semibold  border-b-4  border-[#172a28]/10 hover:border-[color:rgba(0,131,116,0.9)] hover:text-[#172a28]">Accounts Consultancy</h3>
                        <p>
                            Focuses on the clarity and transparency that your accounting
                            services provide.
                        </p>
                    </div>
                </div>

                <section id="about" class="about  mt-16">
                    <div class="container mx-auto text-center mb-12" data-aos="fade-up">
                        <h2 class="text-3xl text-[#172A28]  font-bold mb-4">About Us</h2>
                        <p class="text-gray-600">Crafting Tomorrow's Technology, Today</p>
                    </div>

                    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 text-sm md:text-[16px] items-center">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h3 class="text-[16px] sm:text-2xl  text-[#172A28]  font-semibold  mb-4">
                                Empowering Your Digital Future with Innovative Solutions
                            </h3>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="250">
                            <div class="content lg:pl-8">
                                <p class="italic text-gray-600 mb-4">
                                    Welcome to Cli-X, where innovation meets technology. As a
                                    leading digital software house, we are committed to delivering
                                    exceptional digital solutions that propel your business
                                    forward.
                                </p>
                                <p class="text-gray-600">
                                    At Cli-X, our mission is to harness the power of technology to
                                    deliver innovative and effective solutions that address the
                                    unique challenges of our clients. We are driven by a passion
                                    for excellence and a commitment to exceeding expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Services;
