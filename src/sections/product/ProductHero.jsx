import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductHero = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".product-hero-container", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            ease: "power4.inOut",
            delay: 0.5,
        })
            .from(
                ".product-hero-img",
                {
                    scale: 1.5,
                    duration: 1.5,
                    ease: "power4.inOut",
                },
                "-=1.5"
            )
            .from(
                ".product-hero-title",
                {
                    yPercent: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.5"
            );
    });

    return (
        <section className="h-screen w-full bg-milk relative flex justify-center items-center overflow-hidden">
            <div
                className="product-hero-container absolute inset-0 w-full h-full bg-dark-brown"
                style={{
                    clipPath: "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
                }}
            >
                <img
                    src="/images/hero-bg.png"
                    alt="Product Hero"
                    className="product-hero-img w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 text-center mix-blend-difference text-milk">
                <h1 className="product-hero-title 2xl:text-[10rem] md:text-9xl text-6xl font-bold uppercase tracking-tighter leading-none">
                    The Lineup
                </h1>
                <p className="product-hero-title mt-5 text-xl font-paragraph uppercase tracking-widest">
                    Choose your fuel
                </p>
            </div>
        </section>
    );
};

export default ProductHero;
