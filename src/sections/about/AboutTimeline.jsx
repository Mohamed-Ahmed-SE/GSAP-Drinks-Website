import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutTimeline = () => {
    useGSAP(() => {
        gsap.utils.toArray(".timeline-item").forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: i % 2 === 0 ? -100 : 100,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                },
            });
        });
    });

    const values = [
        { title: "2020", desc: "The Idea born in chaos." },
        { title: "2021", desc: "First batch. Terrible. We drank it anyway." },
        { title: "2022", desc: "The Formula perfected. Finally." },
        { title: "2023", desc: "Launch day. Sold out in 4 hours." },
        { title: "Now", desc: "Taking over the world, one chug at a time." },
    ];

    return (
        <section className="timeline-section min-h-screen bg-milk py-32 overflow-hidden">
            <h2 className="text-center text-dark-brown text-6xl font-bold uppercase mb-24">
                Our Journey
            </h2>
            <div className="container mx-auto max-w-4xl relative">
                {/* Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-mid-brown/30 -translate-x-1/2 md:block hidden" />

                <div className="flex flex-col gap-24">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } flex-col items-center gap-10`}
                        >
                            <div className="md:w-1/2 w-full text-center md:text-right">
                                <h3 className={`text-5xl font-bold text-red-brown ${index % 2 !== 0 && "md:text-left"}`}>
                                    {item.title}
                                </h3>
                            </div>

                            <div className="w-4 h-4 bg-mid-brown rounded-full relative z-10 md:block hidden" />

                            <div className="md:w-1/2 w-full text-center md:text-left">
                                <p className={`text-xl font-paragraph text-dark-brown ${index % 2 !== 0 && "md:text-right"}`}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTimeline;
