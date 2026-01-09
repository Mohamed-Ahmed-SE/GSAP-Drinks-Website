<div >
 <br />
  <div align="center" >
   <a href="#" target="_blank">
     <img  src="public/images/Final.png" style="border-radius:10px;"  alt="Project Banner">
   </a></div>
 <br />
 <br />

 <div>
   <img src="https://img.shields.io/badge/-React_JS_V19-black?style=for-the-badge&logoColor=white&logo=react&color=007ACC" alt="react.js" />
   <img src="https://img.shields.io/badge/-Tailwind_CSS_v4-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=030712" alt="tailwindcss" />
   <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />

 </div>

 <h3 style="font-weight:700;font-size:30px;">AWWWARDS Site of the Day Website</h3>

  <div >
    This project represents a stunning, interactive site built using <b>GSAP</b>, <b>ReactJS</b>, and <b>Tailwind CSS</b>, demonstrating high-end web animation techniques.
   </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. ✨ [New Features & Expansion](#features)
4. 🛠️ [Architecture & Methodology](#architecture)
5. 🎨 [Animations Detailed](#animations)
6. 🤸 [Quick Start](#quick-start)
7. 🕸️ [Snippets (Code to Copy)](#snippets)
8. 🔗 [Assets](#links)

## Introduction

This repository showcases a cutting-edge web experience designed for Awwwards recognition, with **GSAP (GreenSock Animation Platform)** at its core. It demonstrates the use of GSAP's powerful animation capabilities to craft fluid transitions, captivating scroll effects, and dynamic UI interactions, combining it with React and Tailwind CSS for a truly immersive and visually stunning website.

## 🚀 GSAP Implementation

This project heavily utilizes the **GreenSock Animation Platform (GSAP)** to create immersive and interactive user experiences. Below is an overview of how GSAP is integrated:

### 🛠️ Global Setup
- **ScrollSmoother**: The application is wrapped in a `ScrollSmoother` instance (in `Layout.jsx`) to provide a silky-smooth scrolling experience across the entire site. The smooth factor is set to `2` with effects enabled. We utilize `useLayoutEffect` to handle scroll restoration and cleanup.

### ✨ Animations & Effects
- **Text Reveals**: We use `SplitText` to break down headlines into characters or words, allowing for staggered animations that reveal text elegantly as it enters the viewport (e.g., in `HeroSection`).
- **Scroll-Triggered Animations**: `ScrollTrigger` is used extensively to orchestrate animations based on the user's scroll position.
    - **Hero Parallax**: The hero section features scale and rotation effects driven by scroll position.
    - **Container Scaling**: Sections scale down or rotate slightly as they move out of view to create depth.
- **Pinning & Transitions**:
    - **Video Pinning**: The `VideoPinSection` effectively uses `pin: true` to hold a video element in place while the user scrolls.
    - **Clip-Path Transitions**: We animate `clip-path` properties to create dynamic reveals, such as expanding a video from a small circle to fill the screen (in `VideoPinSection`) or revealing text blocks.

### 📦 Key Plugins Used
- `ScrollTrigger`: For scroll-driven interactions.
- `ScrollSmoother`: For momentum-based smooth scrolling.
- `SplitText`: For advanced text animation effects.
- `useGSAP`: The React-friendly hook for safe and efficient GSAP implementation in React components.

## Tech Stack

- ⚛️ **React 19**: Utilizing functional components, hooks (`useLayoutEffect`, `useEffect`), and `react-router-dom` for client-side routing.
- 🌀 **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development, configured with custom design tokens.
- 🎞️ **GSAP (GreenSock Animation Platform)**: The industry standard for high-performance web animations.

## Features

This project has been significantly expanded to include:

### 🏠 Home Page
- **Hero Section**: Dynamic split-text reveals and scroll-driven parallax.
- **Marquee & Tickertape**: Continuous scrolling text effects using CSS transforms and GSAP.
- **Pinned Video**: A cinematic video reveal that pins on scroll.

### 📖 About Page (Expanded)
- **Brand Origins (`AboutStory`)**: A narrative section with `SplitText` headlines and subtle 3D rotation (`rotate: ±2deg`) on scroll.
- **Craft & Process (`AboutProcess`)**: A pinned, scrubbing timeline that visualizes the production process card-by-card.
- **Values & Philosophy (`AboutValues`)**: Giant typographic statements that rotate and slide laterally (`xPercent`) as the user scrolls.
- **Sustainability (`AboutSustainability`)**: A color-transitioning section (Green → Dark) with a circular clip-path mask revealing nature imagery.
- **Team (`AboutTeam`)**: Animated team profile cards with springy entrance animations.

### 🥤 Product Ecosystem (New)
- **Product Listing**: A grid of available flavors.
- **Dynamic Product Details (`/products/:slug`)**: A data-driven template that adapts to the selected flavor.
    - **Dynamic Routing**: Uses `react-router-dom` to route URLs like `/products/chocolate-nitro` to a single `ProductDetails` component.
    - **Centralized Data**: All product info (colors, descriptions, ingredients) flows from `src/constants/products.js`.
    - **Cinematic Hero**: "Curtain-style" inset clip-path reveal.
    - **Interactive 3D Can**: A pseudo-3D effect where the product can rotates 360 degrees and scales up as you scroll.
    - **Legacy Support**: Includes automatic redirection for old `/product/:id` links.

## Architecture

- **Routing**: `App.jsx` uses `BrowserRouter` and `Routes`. A `Layout` component wraps all pages to ensure `ScrollSmoother` is persistent and cleans up correctly between navigations.
- **Data**: `src/constants/products.js` serves as the single source of truth for product data, making it easy to add or modify flavors without touching UI code.
- **Folder Structure**:
    - `src/components`: Reusable UI elements (NavBar, Layout).
    - `src/sections`: Page-specific sections organized by feature (about, product, product-details).
    - `src/pages`: Top-level page views.

## Quick Start

```bash
# 1. Clone the repo
git clone [https://github.com/FullStackEmpire/gsap-awwwards-website.git](https://github.com/FullStackEmpire/gsap-awwwards-website.git)

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## Snippets (Code to Copy)

<details>
  <summary>index.css</summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap");
@import "tailwindcss";

@font-face {
  font-family: "ProximaNova, sans-serif";
  src: url("/fonts/ProximaNova-Regular.otf");
}

@theme {
  --color-black: #222123;
  --color-main-bg: #232224;
  --color-white: #ffffff;
  --color-dark-brown: #523122;
  --color-mid-brown: #a26833;
  --color-light-brown: #e3a458;
  --color-red-brown: #7f3b2d;
  --color-yellow-brown: #a26833;
  --color-milk-yellow: #e3d3bc;
  --color-red: #a02128;
  --color-milk: #faeade;
  --font-sans: "Antonio", sans-serif;
  --font-paragraph: "ProximaNova, sans-serif";
}
/* ... rest of css */
```

</details>

## Assets

- 🎥 Videos: [`/public/videos`](https://github.com/Fullstack-Empire/GSAP-Awwwards-Website/tree/main/public/videos)
- 📚 Fonts: [`/public/fonts`](https://github.com/Fullstack-Empire/GSAP-Awwwards-Website/tree/main/public/fonts)
- 🖼️ Images: [`/public/images`](https://github.com/Fullstack-Empire/GSAP-Awwwards-Website/tree/main/public/images)
