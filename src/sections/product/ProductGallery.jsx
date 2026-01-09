import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { flavorlists } from "../../constants";

const ProductGallery = () => {
    useGSAP(() => {
        const sections = gsap.utils.toArray(".gallery-item");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery-container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".gallery-container").offsetWidth,
            },
        });
    });

    return (
        <section className="gallery-container h-screen bg-main-bg overflow-hidden flex flex-nowrap md:pt-0 pt-20">
            <div className="flex h-full w-[400vw]">
                {/* Introduction Panel */}
                <div className="gallery-item w-screen h-full flex flex-col justify-center items-center bg-dark-brown text-milk p-10 flex-shrink-0">
                    <h2 className="text-8xl font-bold uppercase text-center leading-none">
                        Flavor <br /> Gallery
                    </h2>
                    <p className="mt-10 max-w-md text-center font-paragraph text-xl">
                        Scroll to explore our delicious range of flavors. Each one crafted to perfection.
                    </p>
                </div>

                {flavorlists.slice(0, 3).map((flavor, i) => (
                    <div
                        key={i}
                        className="gallery-item w-screen h-full flex justify-center items-center relative flex-shrink-0"
                        style={{ backgroundColor: flavor.color === 'white' ? '#e3d3bc' : flavor.color === 'black' ? '#222123' : '#faeade' }}
                    >
                        <h3 className={`absolute top-24 left-10 text-[10vw] font-bold uppercase opacity-10 ${flavor.color === 'black' ? 'text-milk' : 'text-dark-brown'}`}>
                            0{i + 1}
                        </h3>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className={`w-64 h-96 rounded-3xl mb-10 ${flavor.color === 'black' ? 'bg-[#333]' : 'bg-white'} shadow-2xl flex justify-center items-center`}>
                                {/* Placeholder for product image */}
                                <span className="text-4xl">🥤</span>
                            </div>
                            <h2 className={`text-6xl font-bold uppercase text-center ${flavor.color === 'black' ? 'text-milk' : 'text-dark-brown'}`}>
                                {flavor.name}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGallery;
