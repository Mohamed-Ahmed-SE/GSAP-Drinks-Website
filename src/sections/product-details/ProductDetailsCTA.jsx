import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProductDetailsCTA = ({ product }) => {
    useGSAP(() => {
        gsap.from(".pd-cta-text", {
            scrollTrigger: {
                trigger: ".pd-cta",
                start: "top 70%",
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out"
        });
    }, { dependencies: [product] });

    return (
        <section className="pd-cta h-[60vh] bg-milk flex flex-col justify-center items-center text-center px-5">
            <h2 className="pd-cta-text text-dark-brown 2xl:text-9xl md:text-8xl text-6xl font-bold uppercase tracking-tighter leading-none mb-10" style={{ color: product.colors.accent }}>
                Tast The <br /> <span style={{ color: product.colors.bg }}>{product.shortName}</span>
            </h2>

            <button className="pd-cta-text bg-dark-brown text-milk text-2xl font-bold uppercase px-16 py-6 rounded-full hover:bg-light-brown transition-colors" style={{ backgroundColor: product.colors.accent }}>
                Add To Cart - $29.99
            </button>
        </section>
    );
};

export default ProductDetailsCTA;
