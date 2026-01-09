import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProductDetailsShowcase = ({ product }) => {
    useGSAP(() => {
        gsap.to(".pd-can", {
            scrollTrigger: {
                trigger: ".pd-showcase",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            },
            rotate: 360,
            scale: 1.2,
        });
    }, { dependencies: [product] });

    return (
        <section className="pd-showcase h-screen bg-[#a26833] flex justify-center items-center overflow-hidden" style={{ backgroundColor: product.colors.bg }}>
            <div className="pd-can w-64 h-[500px] flex justify-center items-center">
                <img src={product.canImage} alt={product.name} className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
        </section>
    );
};

export default ProductDetailsShowcase;
