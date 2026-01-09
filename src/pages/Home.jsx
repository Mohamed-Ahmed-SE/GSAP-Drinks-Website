import HeroSection from "../sections/HeroSection";
import MessageSection from "../sections/MessageSection";
import FlavorSection from "../sections/FlavorSection";
import NutritionSection from "../sections/NutritionSection";
import BenefitSection from "../sections/BenefitSection";
import TestimonialSection from "../sections/TestimonialSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <MessageSection />
            <FlavorSection />
            <NutritionSection />
            <div>
                <BenefitSection />
                <TestimonialSection />
            </div>
        </>
    );
};

export default Home;
