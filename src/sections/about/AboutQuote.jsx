import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutQuote = () => {
    useGSAP(() => {
        const split = SplitText.create(".quote-text", { type: "words, lines" });

        gsap.from(split.words, {
            opacity: 0,
            y: 50,
            rotate: 5,
            stagger: 0.05,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".quote-section",
                start: "top 70%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(".quote-author", {
            opacity: 0,
            x: -50,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".quote-section",
                start: "top 60%",
            },
        });
    });

    return (
        <section className="quote-section min-h-[50vh] bg-main-bg flex flex-col justify-center items-center py-20 relative">
            <div className="container mx-auto px-5 text-center z-10">
                <h3 className="quote-text text-milk 2xl:text-7xl md:text-6xl text-4xl font-bold uppercase leading-tight max-w-6xl mx-auto italic">
                    "We didn't just want to make a drink. We wanted to bottle a feeling."
                </h3>
                <p className="quote-author text-light-brown text-xl font-paragraph mt-10 tracking-widest uppercase">
                    — The Founders
                </p>
            </div>
        </section>
    );
};

export default AboutQuote;
