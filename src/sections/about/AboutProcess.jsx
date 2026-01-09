import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutProcess = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".process-section",
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: 1,
            },
        });

        const steps = gsap.utils.toArray(".process-step");

        // Initial state
        gsap.set(steps, { autoAlpha: 0, y: 50, scale: 0.9 });

        steps.forEach((step, i) => {
            tl.to(step, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            })
                .to(step, {
                    autoAlpha: i === steps.length - 1 ? 1 : 0.2, // Keep last one visible
                    scale: i === steps.length - 1 ? 1 : 0.95,
                    filter: i === steps.length - 1 ? "blur(0px)" : "blur(5px)",
                    duration: 1,
                    delay: 1 // Hold
                });
        });
    });

    const processSteps = [
        { title: "Sourcing", desc: "Premium milk from grass-fed cows 🧑‍🌾" },
        { title: "Filtering", desc: "Ultra-filtered to remove lactose & sugar 🧬" },
        { title: "Flavoring", desc: "Real cocoa, real vanilla, zero nonsense 🍫" },
        { title: "Testing", desc: "tasted by humans, not robots 🤖" },
    ];

    return (
        <section className="process-section h-screen bg-milk flex flex-col justify-center items-center overflow-hidden relative">
            <div className="absolute top-10 left-0 w-full text-center">
                <h2 className="text-dark-brown text-2xl uppercase tracking-widest font-bold opacity-30">The Craft</h2>
            </div>

            <div className="relative w-full max-w-4xl h-[60vh] flex justify-center items-center">
                {processSteps.map((step, index) => (
                    <div
                        key={index}
                        className="process-step absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-white rounded-3xl shadow-xl border border-light-brown/20 p-10"
                    >
                        <div className="text-[10rem] opacity-10 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-brown select-none">
                            0{index + 1}
                        </div>
                        <h3 className="text-7xl font-bold text-dark-brown uppercase mb-5 relative z-10">{step.title}</h3>
                        <p className="text-2xl font-paragraph text-mid-brown relative z-10">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutProcess;
