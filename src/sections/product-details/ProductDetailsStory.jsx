import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProductDetailsStory = ({ product }) => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pd-story-section",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 1,
            },
        });

        tl.from(".pd-story-text", {
            opacity: 0,
            y: 100,
            stagger: 0.2
        })
            .to(".pd-blob", {
                scale: 1.5,
                rotation: 180,
            }, 0);
    }, { dependencies: [product] });

    return (
        <section className="pd-story-section h-screen bg-milk relative overflow-hidden flex justify-center items-center">
            <div className="pd-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-3xl z-0 pointer-events-none opacity-30" style={{ backgroundColor: product.colors.bg }}></div>

            <div className="max-w-4xl text-center z-10 px-5">
                <h2 className="pd-story-text text-dark-brown text-5xl md:text-7xl font-bold uppercase mb-10 leading-tight" dangerouslySetInnerHTML={{ __html: product.storyHeading }}></h2>
                <p className="pd-story-text text-xl font-paragraph text-mid-brown">
                    {product.storyText}
                </p>
            </div>
        </section>
    );
};

export default ProductDetailsStory;
