import { BsGeoAlt } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

const Contact = () => {

    return (
        <>
            <section id="contact" class="contact py-16">

                <div class="container mx-auto text-center mb-12" data-aos="fade-up">
                    <h2 class="text-3xl text-[#172a28] font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-600" >Reach out today and let's center shaping your success together.</p>
                </div>

                <div class="container mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        <div class="flex flex-col bg-[#008374] text-[#ffffff] text-sm p-5 space-y-6">
                            <div class="flex items-center space-x-4 bg-white/10 p-5" data-aos="fade-up" data-aos-delay="200">
                            <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                  <BsGeoAlt size={20} />
                            </div>
                          
                                <div>
                                    <h3 class="font-semibold text-lg mb-[5px]">Address</h3>
                                    <p>Industrial Area, North Karachi, Karachi, Pakistan</p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4 bg-white/10 p-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                <BsTelephone size={20} />
                            </div>
                            
                                <div>
                                    <h3 class="font-semibold text-lg mb-[5px]">Call Us</h3>
                                    <p>0321-2427626</p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4 bg-white/10 p-5" data-aos="fade-up" data-aos-delay="400">
                            <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center"> 
                                <BsEnvelope size={20} />
                            </div>
                            
                                <div>
                                    <h3 class="font-semibold text-lg mb-[5px]">Email Us</h3>
                                    <p>infoclix@gmail.com</p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-4 bg-white/10 p-5" data-aos="fade-up" data-aos-delay="500">
                            <div className="rounded-[50%] bg-white/20 w-12 h-12 flex items-center justify-center">
                                <BsClock size={20} />
                            </div>
                         
                                <div>
                                    <h3 class="font-semibold text-lg mb-[5px]">Open Hours:</h3>
                                    <p>24 hrs</p>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-2">
                            <form action="forms/contact.php" method="post" class="space-y-6" data-aos="fade" data-aos-delay="100">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        class="w-full p-3 border border-gray-300 rounded-md text-[#222222] focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        class="w-full p-3 border border-gray-300 rounded-md  text-[#222222] focus:ring-2 focus:ring-primary focus:outline-none"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    class="w-full p-3 border border-gray-300 rounded-md text-[#222222] focus:ring-2 focus:ring-primary focus:outline-none"
                                />

                                <textarea
                                    name="message"
                                    rows="8"
                                    placeholder="Message"
                                    required
                                    class="w-full p-3 border border-gray-300 rounded-md text-[#222222] focus:ring-2 focus:ring-primary focus:outline-none"
                                ></textarea>

                                <div class="text-center">
                                    <div class="loading hidden text-primary">Loading...</div>
                                    <div class="error-message hidden text-red-500"></div>
                                    <div class="sent-message hidden text-green-500">Your message has been sent. Thank you!</div>

                                    <button
                                        type="submit"
                                        class="bg-primary text-white px-6 py-3 rounded-[50px] hover:bg-primary-dark bg-[#008374] transition duration-200"
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