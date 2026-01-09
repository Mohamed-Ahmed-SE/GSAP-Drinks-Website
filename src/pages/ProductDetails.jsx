import { useParams, Navigate } from "react-router-dom";
import ProductDetailsHero from "../sections/product-details/ProductDetailsHero";
import ProductDetailsStory from "../sections/product-details/ProductDetailsStory";
import ProductDetailsIngredients from "../sections/product-details/ProductDetailsIngredients";
import ProductDetailsShowcase from "../sections/product-details/ProductDetailsShowcase";
import ProductDetailsCTA from "../sections/product-details/ProductDetailsCTA";
import { products } from "../constants/products";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const ProductDetails = () => {
    const { slug } = useParams();
    const product = products.find((p) => p.slug === slug);

    // If product not found, redirect to products list (or 404)
    if (!product) return <Navigate to="/product" replace />;

    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    }, [slug]);

    return (
        <div key={slug} className="product-details-container">
            <ProductDetailsHero product={product} />
            <ProductDetailsStory product={product} />
            <ProductDetailsIngredients product={product} />
            <ProductDetailsShowcase product={product} />
            <ProductDetailsCTA product={product} />
        </div>
    );
};

export default ProductDetails;
