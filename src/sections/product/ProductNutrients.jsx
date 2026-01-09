import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { nutrientLists } from "../../constants";

const ProductNutrients = () => {
    useGSAP(() => {
        gsap.utils.toArray(".nutrient-item").forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                x: -50,
                duration: 0.8,
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: ".nutrients-list",
                    start: "top 70%",
                },
            });
        });
    });

    return (
        <section className="min-h-[80vh] bg-main-bg text-milk py-32 flex flex-col justify-center relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-mid-brown/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-5 grid md:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                    <h2 className="text-6xl font-bold uppercase mb-10 leading-none">
                        What's inside <br /> <span className="text-light-brown">matters</span>
                    </h2>
                    <p className="font-paragraph text-xl text-milk/80 mb-10 max-w-lg">
                        We don't hide our ingredients. We flaunt them. Every bottle is packed with the good stuff you need to crush your day.
                    </p>
                </div>

                <div className="nutrients-list flex flex-col gap-5">
                    {nutrientLists.map((item, i) => (
                        <div
                            key={i}
                            className="nutrient-item flex justify-between items-center border-b border-milk/20 pb-5"
                        >
                            <span className="text-2xl font-bold uppercase">{item.label}</span>
                            <span className="text-xl font-paragraph text-light-brown">{item.amount}</span>
                        </div>
                    ))}
                    <div className="nutrient-item flex justify-between items-center border-b border-milk/20 pb-5">
                        <span className="text-2xl font-bold uppercase">Lactose</span>
                        <span className="text-xl font-paragraph text-light-brown">0g (Free)</span>
                    </div>
                    <div className="nutrient-item flex justify-between items-center border-b border-milk/20 pb-5">
                        <span className="text-2xl font-bold uppercase">Gluten</span>
                        <span className="text-xl font-paragraph text-light-brown">0g (Free)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductNutrients;
