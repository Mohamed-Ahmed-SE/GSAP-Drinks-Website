import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutStory = () => {
    useGSAP(() => {
        const split = SplitText.create(".story-title", { type: "chars" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".story-section",
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 1,
            },
        });

        tl.to(".story-img", {
            scale: 1,
            borderRadius: "0%",
            width: "100%",
            height: "100vh",
            rotate: 2,
            ease: "power2.inOut",
        })
            .to(".story-img", {
                rotate: -2,
                ease: "sine.inOut",
                duration: 1
            }, "<")
            .from(split.chars, {
                opacity: 0,
                yPercent: 100,
                stagger: 0.05,
                ease: "back.out(1.7)",
            }, "-=0.5")
            .to(
                ".story-content p",
                {
                    opacity: 1,
                    y: 0,
                    duration: 1
                },
                "-=0.8"
            )
            .to(".parallax-bg", {
                yPercent: -20,
                ease: "none",
            }, 0);
    });

    return (
        <section className="story-section h-dvh bg-dark-brown relative overflow-hidden flex justify-center items-center">
            {/* Parallax Background Elements */}
            <div className="parallax-bg absolute top-0 left-0 w-full h-[120%] opacity-20 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-light-brown rounded-full mix-blend-overlay blur-3xl"></div>
                <div className="absolute top-[60%] right-[15%] w-96 h-96 bg-red-brown rounded-full mix-blend-overlay blur-3xl"></div>
            </div>

            <div className="story-img w-[50vw] h-[60vh] bg-[#a26833] rounded-[2rem] overflow-hidden absolute inset-0 m-auto scale-75 origin-center z-0">
                {/* Placeholder for story image */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/p1.png)', filter: 'brightness(0.6)' }}></div>
            </div>

            <div className="story-content absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-5 pointer-events-none">
                <h2 className="story-title text-milk 2xl:text-8xl md:text-7xl text-5xl font-bold uppercase mb-8 overflow-hidden">
                    The Origin
                </h2>
                <div className="overflow-hidden">
                    <p className="text-milk/80 font-paragraph text-xl max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-10">
                        It started in a garage with a blender and a dream. No suits, no focus groups, just an obsession with making a protein shake that didn't taste like chalk.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
