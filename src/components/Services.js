import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, x: -80, transition: { delay: 0.8 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="bg-hero-gradient-tl py-16">
      <div className="w-full px-6 md:px-0 md:w-[90%] 2xl:w-[70%] mx-auto text-[#ffffff]">
        {/* Heading Section */}
        <motion.div
          animate={controls}
          variants={itemVariants}
          className="mx-auto 2xl:w-[80%] md:w-[90%] text-center mb-12"
        >
          <h1 className="text-3xl font-bold font-montserrat mb-4">
            Our Services
          </h1>
          <p className="text-white/60">
            At CLI-X, we specialize in delivering top-notch technology solutions
            tailored to your business needs. With our team of skilled
            developers, designers, and strategists, we offer a comprehensive
            range of services that help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {[
            {
                img: "/images/serviceImage1.jpg",
              title: "Web Development",
              desc: "We craft responsive and visually stunning websites with user-friendly interfaces. Using modern technologies like React, Next.js, and Tailwind CSS, we ensure your web presence stands out and performs seamlessly across all devices. Our team ensures your website is not only functional but also visually captivating, delivering a user experience that exceeds expectations.",
            },
            {
                img: "/images/serviceImage2.jpeg",  
              title: "Logo Design",
              desc: "We create unique and memorable logos that represent the essence of your brand. Our design team works closely with you to understand your business and develop a logo that reflects your company’s values, mission, and vision. We ensure that your logo makes a strong first impression and sets you apart from the competition.",
            },

            {
                img: "/images/serviceImage3.webp",  
              title: "Software Consultancy",
              desc: "Our software consultants provide expert guidance to help you navigate the complex world of technology solutions. Whether you're looking for advice on software architecture, integration strategies, or technology stacks, we deliver actionable recommendations that align with your business needs and goals. We help you optimize your software infrastructure to drive efficiency and innovation.",
            },
            {
                img: "/images/serviceImage4.jpg",
              title: "Graphic Design",
              desc: "Your brand’s visual identity matters. Our graphic design team creates visually compelling assets that reflect your brand’s message and aesthetics. We offer Logo Design, Brand Identity Kits, Social Media Creatives, Marketing Materials (Flyers, Brochures, Banners), and UI Elements & Icons. We combine creativity with consistency to ensure your brand stands out across all platforms.",
            },
            {
              img: "/images/serviceImage5.jpg",
              title: "Digital Marketing",
              desc: "We offer comprehensive digital marketing solutions for your brand, company, products, and services. In today’s world, online presence is key to reaching and interacting with your target audience. We merge marketing, design, and technology to provide you with a complete digital marketing package. Our team works tirelessly to increase customer satisfaction and drive engagement.",
            },
            {
                img: "/images/serviceImage6.jpg",
              title: "Accounts Consultancy",
              desc: "We offer expert account consultancy services to streamline your financial processes, improve profitability, and ensure compliance. From bookkeeping and tax planning to financial analysis and business growth strategies, our team provides actionable insights for smarter financial decisions. We focus on helping your business grow through sound financial advice and strategic planning.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              animate={controls}
              variants={itemVariants}
              className="service-item relative bg-[#222222] rounded-2xl shadow-lg"
            >
              <div>
                <img
                  src={service.img}
                  className="w-full h-[30vh] rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              <div className=" md:p-10 p-5">
                <h3 className="text-[18px] md:text-[22px] mb-3 pb-2 font-semibold">
                  {service.title}
                </h3>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Us Section */}
        <section id="about" className="mt-16">
          <motion.div
            animate={controls}
            variants={itemVariants}
            className="mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-white/60">
              Crafting Tomorrow's Technology, Today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 text-sm md:text-[16px] items-center">
            <motion.div animate={controls} variants={itemVariants}>
              <h3 className="text-[16px] sm:text-2xl font-semibold mb-4">
                Empowering Your Digital Future with Innovative Solutions
              </h3>
            </motion.div>
            <motion.div
              animate={controls}
              variants={itemVariants}
              className="lg:pl-8"
            >
              <p className="italic text-[#ffffff] mb-4">
                Welcome to Cli-X, where innovation meets technology. As a
                leading digital software house, we are committed to delivering
                exceptional digital solutions that propel your business forward.
              </p>
              <p className="text-[#ffffff]">
                At Cli-X, our mission is to harness the power of technology to
                deliver innovative and effective solutions that address the
                unique challenges of our clients. We are driven by a passion for
                excellence and a commitment to exceeding expectations.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
