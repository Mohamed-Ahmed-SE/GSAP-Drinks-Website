import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const AboutManifesto = () => {
    useGSAP(() => {
        const split = SplitText.create(".manifesto-text", { type: "words, lines" });

        gsap.from(split.words, {
            opacity: 0,
            y: 20,
            color: "#523122", // dark brown
            stagger: 0.02,
            scrollTrigger: {
                trigger: ".manifesto-section",
                start: "top 70%",
                end: "bottom 80%",
                scrub: true,
            },
        });
    });

    return (
        <section className="manifesto-section min-h-[60vh] bg-milk flex justify-center items-center py-20">
            <div className="container mx-auto px-5 text-center">
                <h2 className="manifesto-text text-dark-brown 2xl:text-6xl md:text-5xl text-3xl font-bold uppercase leading-tight max-w-5xl mx-auto">
                    We believe in flavor without compromise. In fueling the fun without
                    the filler. In taking the drinks you loved as a kid and making them
                    fit for the rebels we are today.
                </h2>
            </div>
        </section>
    );
};

export default AboutManifesto;
