import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutTeam = () => {
    useGSAP(() => {
        gsap.utils.toArray(".team-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                opacity: 0,
                y: 50,
                scale: 0.8,
                rotation: i % 2 === 0 ? -5 : 5,
                duration: 1,
                ease: "back.out(1.5)"
            });
        });
    });

    const team = [
        { name: "Cody", role: "Chief Chaos Officer", bg: "bg-[#e3a458]" },
        { name: "Sarah", role: "Flavor Architect", bg: "bg-[#7f3b2d]" },
        { name: "Mike", role: "Pixel Pusher", bg: "bg-[#222123]", text: "text-milk" },
    ];

    return (
        <section className="py-32 bg-milk">
            <div className="container mx-auto px-5 text-center">
                <h2 className="text-dark-brown text-6xl font-bold uppercase mb-20">The Squad</h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {team.map((member, i) => (
                        <div key={i} className={`team-card w-80 h-96 ${member.bg} rounded-3xl p-8 flex flex-col justify-between shadow-xl ${member.text || 'text-dark-brown'}`}>
                            <div className="w-full h-40 bg-white/20 rounded-2xl mb-5 backdrop-blur-sm"></div>
                            <div>
                                <h3 className="text-4xl font-bold uppercase">{member.name}</h3>
                                <p className="font-paragraph text-lg opacity-80">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
