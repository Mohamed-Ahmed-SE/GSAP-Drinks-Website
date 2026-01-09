import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutSustainability = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sus-section",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 1,
            },
        });

        tl.to(".sus-bg", {
            backgroundColor: "#2e2d2f", // Dark grey
            duration: 1
        })
            .to(".sus-mask", {
                clipPath: "circle(20% at 50% 50%)",
                duration: 1
            }, "<")
            .to(".sus-text-1", {
                opacity: 0,
                y: -50,
                duration: 0.5
            }, "<")
            .from(".sus-text-2", {
                opacity: 0,
                y: 50,
                duration: 0.5
            });
    });

    return (
        <section className="sus-section h-screen bg-[#658b5e] relative overflow-hidden flex justify-center items-center sus-bg transition-colors">

            {/* Masked Image */}
            <div className="sus-mask absolute inset-0 w-full h-full z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/hero-bg.png)',
                    clipPath: "circle(100% at 50% 50%)"
                }}
            />
            <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

            <div className="relative z-10 text-center px-5 max-w-4xl">
                <div className="sus-text-1 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-milk 2xl:text-8xl md:text-7xl text-5xl font-bold uppercase mb-5">
                        Saved By The Can
                    </h2>
                    <p className="text-xl font-paragraph text-milk">
                        Aluminum is infinitely recyclable. Plastic is trash. We chose the metal path.
                    </p>
                </div>

                <div className="sus-text-2 absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100">
                    <h2 className="text-milk 2xl:text-8xl md:text-7xl text-5xl font-bold uppercase mb-5 text-[#88CE02]">
                        100% Green
                    </h2>
                    <p className="text-xl font-paragraph text-milk">
                        Our facilities run on renewable energy. Drink good, do good.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSustainability;
