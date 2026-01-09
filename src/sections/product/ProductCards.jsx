import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { products } from "../../constants/products";

const ProductCards = () => {
    useGSAP(() => {
        gsap.utils.toArray(".product-card").forEach((card, i) => {
            gsap.from(card, {
                opacity: 0,
                y: 100,
                scale: 0.9,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 60%",
                    scrub: true,
                },
            });
        });
    });

    return (
        <section className="min-h-screen bg-milk py-32">
            <div className="container mx-auto px-5">
                <h2 className="text-center text-dark-brown text-6xl font-bold uppercase mb-20">
                    All Flavors
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <Link
                            to={`/products/${product.slug}`}
                            key={index}
                            className="product-card bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-lg group hover:shadow-2xl transition-shadow duration-500"
                        >
                            <div className={`w-full aspect-[3/4] rounded-2xl mb-8 flex justify-center items-center ${product.rotation} transition-transform duration-500 group-hover:scale-105 relative`}>
                                {/* Placeholder Image Logic - using color block if image fails, but map to canImage */}
                                <div className="absolute inset-0 rounded-2xl opacity-20" style={{ backgroundColor: product.colors.bg }}></div>
                                <img src={product.canImage} alt={product.name} className="relative z-10 w-2/3 object-contain drop-shadow-xl" />
                            </div>

                            <h3 className="text-3xl font-bold uppercase text-dark-brown mb-3">
                                {product.name}
                            </h3>
                            <p className="font-paragraph text-mid-brown">
                                {product.description}
                            </p>

                            <button className="mt-8 px-8 py-3 rounded-full border border-dark-brown text-dark-brown font-bold uppercase hover:bg-dark-brown hover:text-milk transition-colors">
                                Shop Now
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCards;
