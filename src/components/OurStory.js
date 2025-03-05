
import Image from "next/image";

const OurStory = () => {

    return (
        <>
            <div className="flex gap-5 bg-hero-gradient-l py-20 items-center justify-center">
                <div className="flex flex-col gap-10 rounded-3xl bg-[#222222]">
                    <div className=" p-5">
                        <h1 className="text-4xl text-[#ffffff] mb-3">35,000</h1>
                        <h2 className="text-white/60 text-lg">Websites Already Thriving with Us!</h2>
                    </div>

                    <div class="w-[300px] h-[200px] overflow-hidden [mask-image:radial-gradient(circle_at_top_left,_white,_transparent)] ">
                        <img src="/images/nature.jpg" alt="Styled Image" class="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between bg-[#222222] rounded-3xl p-6 md:p-10 shadow-lg overflow-hidden">
                    {/* Left Image Section */}
                    <div className="relative w-full md:w-1/2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                        <Image
                            src="/images/feature-image.jpg" // Update with your image path
                            alt="Feature Image"
                            width={500}
                            height={300}
                            className="w-full h-auto md:clip-path-custom"
                        />
                    </div>

                    {/* Right Text Section */}
                    <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Experience <span className="text-green-200">the power of</span> <br />
                            <span className="text-green-200">speed</span> with our <br />
                            cutting-edge <br />
                            <span className="text-purple-300">hosting infrastructure</span>
                        </h2>
                        <button className="border border-white rounded-full px-5 py-2 hover:bg-white hover:text-black transition">
                            Read our story
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OurStory;