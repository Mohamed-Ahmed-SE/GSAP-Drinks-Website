import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProductCTA = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".product-cta-section",
                start: "top center",
                end: "bottom bottom",
                scrub: true,
            },
        });

        tl.to(".cta-circle", {
            scale: 15,
            duration: 1,
            ease: "power2.inOut",
        });

        gsap.from(".cta-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".cta-content",
                start: "top 60%",
            }
        })
    });

    return (
        <section className="product-cta-section h-[80vh] bg-milk relative overflow-hidden flex justify-center items-center">
            <div className="cta-circle w-40 h-40 bg-red-brown rounded-full absolute z-0" />

            <div className="cta-content relative z-10 text-center">
                <h2 className="cta-text text-milk text-7xl md:text-9xl font-bold uppercase leading-none tracking-tighter mb-10">
                    Grab Yours
                </h2>
                <button className="cta-text bg-white text-red-brown px-12 py-5 rounded-full text-2xl font-bold uppercase hover:scale-105 transition-transform">
                    Order Online
                </button>
            </div>
        </section>
    );
};

export default ProductCTA;
