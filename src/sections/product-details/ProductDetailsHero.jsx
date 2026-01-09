import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductDetailsHero = ({ product }) => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".pd-hero-img", {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power4.inOut",
            delay: 0.2
        })
            .from(".pd-title span", {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            }, "-=1");
    }, { dependencies: [product] });

    return (
        <section className="h-screen bg-main-bg relative flex justify-center items-center overflow-hidden">
            {/* Dynamic Background Tint */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundColor: product.colors.bg }}></div>

            <div className="pd-hero-img w-[80vw] h-[70vh] relative z-0" style={{ clipPath: "inset(10% 40% 10% 40%)", backgroundColor: product.colors.bg }}>
                {/* Fallback image or dynamic image if available */}
                <div className="w-full h-full opacity-60 mix-blend-multiply bg-black"></div>
                <img src="/images/hero-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
                <img src={product.canImage} className="absolute inset-0 m-auto h-[80%] object-contain drop-shadow-2xl" />
            </div>

            <h1 className="pd-title absolute z-10 text-milk 2xl:text-9xl md:text-8xl text-6xl font-bold uppercase mix-blend-difference pointer-events-none text-center">
                {/* Split text logic helper - just rendering simply for now */}
                <span className="inline-block">{product.name}</span>
            </h1>
        </section>
    );
};

export default ProductDetailsHero;
