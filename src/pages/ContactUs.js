'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const titleControls = useAnimation();
  const formControls = useAnimation();
  const infoControls = useAnimation();

  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    titleInView ? titleControls.start("visible") : titleControls.start("hidden");
    formInView ? formControls.start("visible") : formControls.start("hidden");
    infoInView ? infoControls.start("visible") : infoControls.start("hidden");
  }, [titleInView, formInView, infoInView, titleControls, formControls, infoControls]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !cellNumber || !message) {
      setStatus("error");
      return;
    }

    const serviceId = "service_rmw1h2s";
    const templateId = "template_ff2x5wo";
    const publicKey = "1T9xbZKxb37vbLUVd";

    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: cellNumber,
      to_name: "Saim",
      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setCellNumber("");
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("emailError");
    }
  };

  return (
    <>
      <section className="contact px-4 md:px-0 bg-hero-gradient-bl">
        <Navbar />

        <div className="py-20">
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleControls}
            variants={fadeInVariants}
            className="container mx-auto text-center mb-12"
          >
            <h2 className="text-3xl text-white font-bold mb-4">Contact Us</h2>
            <p className="text-white/60">Reach out today and let's start shaping your success together.</p>
          </motion.div>

          <div className="container mx-auto flex lg:flex-row items-center flex-col gap-8">

            <motion.div
              ref={infoRef}
              initial="hidden"
              animate={infoControls}
              variants={fadeInVariants}
              className="flex flex-col bg-[#222222] text-white rounded-lg text-sm p-5 space-y-6 lg:w-[40%] 2xl:w-[30%] w-full"
            >
              {[
                { icon: <BsGeoAlt size={20} />, title: "Address", desc: "Industrial Area, North Karachi, Pakistan" },
                { icon: <BsTelephone size={20} />, title: "Call Us", desc: "0321-2427626" },
                { icon: <BsEnvelope size={20} />, title: "Email Us", desc: "infoclix@gmail.com" },
                { icon: <BsClock size={20} />, title: "Open Hours", desc: "24 hrs" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={infoControls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
                  }}
                  className="flex items-center space-x-4 bg-white/10 p-5 rounded-md"
                >
                  <div className="rounded-full bg-white/20 w-12 h-12 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>


            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formControls}
              variants={fadeInVariants}
              className="lg:w-[60%] 2xl:w-[70%] w-full"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                    className="w-full p-3 rounded-lg bg-[#222222] text-white focus:ring-1 focus:ring-white/60 outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                    className="w-full p-3 rounded-lg bg-[#222222] text-white focus:ring-1 focus:ring-white/60 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full p-3 rounded-lg bg-[#222222] text-white focus:ring-1 focus:ring-white/60 outline-none"
                  />
                  <input
                    type="text"
                    value={cellNumber}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 4) value = value.slice(0, 4) + "-" + value.slice(4);
                      if (value.length > 12) value = value.slice(0, 12);
                      setCellNumber(value);
                    }}
                    placeholder="XXXX-XXXXXXX"
                    required
                    className="w-full p-3 rounded-lg bg-[#222222] text-white focus:ring-1 focus:ring-white/60 outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={8}
                  placeholder="Message"
                  required
                  className="w-full p-3 rounded-lg bg-[#222222] text-white focus:ring-1 focus:ring-white/60 outline-none"
                ></textarea>

                {status === "success" && (
                  <p className="text-green-500 font-medium">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 font-medium">Please fill out all fields.</p>
                )}
                {status === "emailError" && (
                  <p className="text-red-500 font-medium">Error sending email. Please try again.</p>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    className="text-white px-6 py-3 rounded-full bg-[#222222] hover:bg-white hover:text-black transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
