import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutProcess = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".process-section",
                start: "top top",
                end: "+=400%",
                pin: true,
                scrub: 1,
            },
        });

        const steps = gsap.utils.toArray(".process-card");

        // Initial state: stacked
        gsap.set(steps, {
            zIndex: (i) => i,
            clipPath: "inset(0% 0% 100% 0%)",
            scale: 0.9
        });

        // First card visible initially
        gsap.set(steps[0], { clipPath: "inset(0% 0% 0% 0%)", scale: 1 });

        steps.forEach((step, i) => {
            if (i === 0) return; // Skip first

            tl.to(step, {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                duration: 1,
                ease: "power2.inOut",
            })
                // Fade out previous slightly for focus
                .to(steps[i - 1], {
                    scale: 0.95,
                    filter: "brightness(0.5)",
                    duration: 1
                }, "<");
        });
    });

    const processSteps = [
        { title: "Sourcing", desc: "Premium milk from grass-fed cows", img: "/images/p1.png" },
        { title: "Filtering", desc: "Ultra-filtered to remove lactose & sugar", img: "/images/p2.png" },
        { title: "Flavoring", desc: "Real cocoa, real vanilla, zero nonsense", img: "/images/p3.png" },
        { title: "Testing", desc: "Tasted by humans, not robots", img: "/images/p4.png" },
    ];

    return (
        <section className="process-section h-dvh bg-milk flex flex-col justify-center items-center overflow-hidden relative">
            <div className="absolute top-10 left-0 w-full text-center z-10">
                <h2 className="text-dark-brown text-2xl uppercase tracking-widest font-bold opacity-30">The Craft</h2>
            </div>

            <div className="relative w-full max-w-5xl h-[70dvh] flex justify-center items-center">
                {processSteps.map((step, index) => (
                    <div
                        key={index}
                        className="process-card absolute top-0 left-0 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <img
                            src={step.img}
                            alt={step.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10 md:p-16">
                            <div className="text-[12rem] opacity-20 font-bold absolute top-5 right-10 text-white select-none leading-none">
                                0{index + 1}
                            </div>
                            <h3 className="text-6xl md:text-8xl font-bold text-white uppercase mb-5 relative z-10 leading-[0.8]">{step.title}</h3>
                            <p className="text-xl md:text-3xl font-paragraph text-white/90 relative z-10 max-w-xl">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutProcess;
