import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutHero = () => {
    useGSAP(() => {
        const split = SplitText.create(".about-hero-title", { type: "chars" });
        const tl = gsap.timeline();

        tl.from(split.chars, {
            yPercent: 150,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
        }).from(
            ".about-hero-sub",
            {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power2.out",
            },
            "-=0.5"
        );
    });

    return (
        <section className="h-dvh w-full bg-main-bg flex flex-col justify-center items-center relative overflow-hidden">
            <div className="text-center z-10">
                <h1 className="about-hero-title 2xl:text-[10rem] md:text-9xl text-6xl font-bold uppercase text-milk leading-none tracking-tighter">
                    Our Story
                </h1>
                <p className="about-hero-sub text-mid-brown md:text-xl text-lg mt-8 font-paragraph max-w-lg mx-auto px-5">
                    From a crazy idea to a flavor revolution.
                </p>
            </div>
            {/* Background Element - Subtle Parallax or Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-brown/20 to-transparent pointer-events-none" />
        </section>
    );
};

export default AboutHero;
