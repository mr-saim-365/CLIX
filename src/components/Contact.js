import { BsGeoAlt } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

const Contact = () => {

    return (
        <>
            <section id="contact" className="contact py-16 bg-dark-bg">

                <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl text-[#ffffff] font-bold mb-4">Contact Us</h2>
                    <p className="text-white/60" >Reach out today and let's center shaping your success together.</p>
                </div>

                <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex lg:flex-row items-center flex-col gap-8 px-3 md:px-0">

                        <div className="flex flex-col bg-[#222222] text-[#ffffff] rounded-lg text-sm p-5 space-y-6 lg:w-[40%] 2xl:w-[30%] w-full">
                            <div className="flex items-center space-x-4 bg-white/10 p-5 rounded-md" data-aos="fade-up" data-aos-delay="200">
                                <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                    <BsGeoAlt size={20} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-[5px]">Address</h3>
                                    <p>Industrial Area, North Karachi, Karachi, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 bg-white/10 p-5 rounded-md" data-aos="fade-up" data-aos-delay="300">
                                <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                    <BsTelephone size={20} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-[5px]">Call Us</h3>
                                    <p>0321-2427626</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 bg-white/10 p-5 rounded-md" data-aos="fade-up" data-aos-delay="400">
                                <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                    <BsEnvelope size={20} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-[5px]">Email Us</h3>
                                    <p>infoclix@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 bg-white/10 p-5 rounded-md" data-aos="fade-up" data-aos-delay="500">
                                <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                    <BsClock size={20} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-[5px]">Open Hours:</h3>
                                    <p>24 hrs</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[60%] 2xl:w-[70%] w-full">
                            <form action="forms/contact.php" method="post" className="space-y-6" data-aos="fade" data-aos-delay="100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222] focus:ring-1 focus:ring-white/60 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full p-3 rounded-lg  text-[#ffffff] bg-[#222222]  focus:ring-1 focus:ring-white/60 focus:outline-none"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222]  focus:ring-1 focus:ring-white/60 focus:outline-none"
                                />

                                <textarea
                                    name="message"
                                    rows="8"
                                    placeholder="Message"
                                    required
                                    className="w-full p-3 rounded-lg text-[#ffffff] bg-[#222222]  focus:ring-1 focus:ring-white/60 focus:outline-none"
                                ></textarea>

                                <div className="text-center">
                                    <div className="loading hidden text-primary">Loading...</div>
                                    <div className="error-message hidden text-red-500"></div>
                                    <div className="sent-message hidden text-green-500">Your message has been sent. Thank you!</div>

                                    <button
                                        type="submit"
                                        className="text-[#ffffff] px-6 py-3 rounded-[50px] bg-[#222222] transition duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;