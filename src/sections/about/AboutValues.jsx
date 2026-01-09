import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const AboutValues = () => {
    useGSAP(() => {
        const values = gsap.utils.toArray(".value-row");

        values.forEach((row, i) => {
            const split = SplitText.create(row.querySelector("h2"), { type: "chars" });

            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 1,
                },
                opacity: 0,
                yPercent: 100,
                rotateX: -90,
                stagger: 0.02,
                ease: "back.out",
            });

            gsap.to(row, {
                scrollTrigger: {
                    trigger: row,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
                rotate: i % 2 === 0 ? 5 : -5,
                xPercent: i % 2 === 0 ? -5 : 5,
            });
        });
    });

    return (
        <section className="py-40 bg-main-bg overflow-hidden flex flex-col gap-32">

            <div className="value-row flex justify-center">
                <h2 className="text-milk 2xl:text-9xl md:text-8xl text-6xl font-bold uppercase tracking-tighter text-center">
                    Unapologetic <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px #e3a458" }}>Flavor</span>
                </h2>
            </div>

            <div className="value-row flex justify-center">
                <h2 className="text-milk 2xl:text-9xl md:text-8xl text-6xl font-bold uppercase tracking-tighter text-center">
                    Radical <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px #7f3b2d" }}>Transparency</span>
                </h2>
            </div>

            <div className="value-row flex justify-center">
                <h2 className="text-milk 2xl:text-9xl md:text-8xl text-6xl font-bold uppercase tracking-tighter text-center">
                    Forever <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px #e3d3bc" }}>Young</span>
                </h2>
            </div>

        </section>
    );
};

export default AboutValues;
