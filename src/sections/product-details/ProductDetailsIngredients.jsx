import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProductDetailsIngredients = ({ product }) => {
    useGSAP(() => {
        gsap.utils.toArray(".ing-item").forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                },
                opacity: 0,
                x: i % 2 === 0 ? -50 : 50,
                duration: 1,
                ease: "power2.out"
            });
        });
    }, { dependencies: [product] });

    return (
        <section className="py-32 bg-main-bg" style={{ backgroundColor: product.colors.accent }}>
            <div className="container mx-auto px-5">
                <h2 className="text-milk text-6xl font-bold uppercase text-center mb-20">Inside The Bottle</h2>

                <div className="flex flex-col gap-10 max-w-2xl mx-auto">
                    {product.ingredients.map((ing, i) => (
                        <div key={i} className="ing-item flex justify-between items-center border-b border-white/10 pb-10">
                            <h3 className="text-4xl text-milk font-bold uppercase">{ing.name}</h3>
                            <p className="text-xl text-milk/80 font-paragraph text-right">{ing.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsIngredients;
