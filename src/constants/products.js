export const products = [
    {
        id: 1,
        slug: "chocolate-nitro",
        name: "Chocolate Nitro",
        shortName: "Chocolate",
        description: "Rich, creamy, and packed with protein. It's the classic taste you love, upgraded for performance.",
        storyHeading: "Not Just A Drink. <br /> It's A Flashback.",
        storyText: "Remember those chocolate milk cartons in the cafeteria? This is that, but grown up. Powered by premium protein, fueled by clean energy, and without the sugar crash.",
        heroImage: "/images/hero-img.png", // Using existing as placeholder if needed, or mapped color
        canImage: "/images/brown-drink.webp", // Assuming these exist from file list
        colors: {
            bg: "#a26833",
            text: "#fdf6e9", // milk
            accent: "#523122", // dark brown
            secondary: "#e3a458",
        },
        ingredients: [
            { name: "Grass-Fed Whey", desc: "For muscle recovery" },
            { name: "Natural Cocoa", desc: "For rich, real taste" },
            { name: "Monk Fruit", desc: "Sweetness without the spike" },
        ],
        rotation: "rotate-12",
    },
    {
        id: 2,
        slug: "vanilla-bean",
        name: "Vanilla Bean",
        shortName: "Vanilla",
        description: "Smooth, subtle, and sophisticated. Real vanilla bean specks meet high-quality protein.",
        storyHeading: "Simplicity is <br /> The Ultimate Sophistication.",
        storyText: "No fake flavors. Just real vanilla beans harvested at peak maturity. It's clean, crisp, and incredibly refreshing.",
        heroImage: "/images/white-drink.webp",
        canImage: "/images/white-drink.webp",
        colors: {
            bg: "#e3d3bc", // Light beige
            text: "#523122", // dark brown
            accent: "#ffffff",
            secondary: "#c2b29b",
        },
        ingredients: [
            { name: "Madagascar Vanilla", desc: "For authentic aroma" },
            { name: "Filtered Milk", desc: "Ultra-pure base" },
            { name: "Agave Nectar", desc: "Low-glycemic sweetener" },
        ],
        rotation: "-rotate-6",
    },
    {
        id: 3,
        slug: "strawberry-splash",
        name: "Strawberry Splash",
        shortName: "Strawberry",
        description: "Bursting with berry goodness. Like a summer day in a can.",
        storyHeading: "Sweet, Tart, <br /> And Totally Rad.",
        storyText: "We mashed up real strawberries to create a flavor that punches you in the tastebuds. It's pink, it's powerful, and it's here to stay.",
        heroImage: "/images/red-drink.webp",
        canImage: "/images/red-drink.webp",
        colors: {
            bg: "#d64545", // Red
            text: "#fdf6e9",
            accent: "#8a2020",
            secondary: "#ff9999",
        },
        ingredients: [
            { name: "Real Strawberries", desc: "Antioxidant rich" },
            { name: "Beet Juice", desc: "For natural color" },
            { name: "Vitamin C", desc: "Immune support" },
        ],
        rotation: "rotate-6",
    },
];
