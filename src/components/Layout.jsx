import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import FooterSection from "../sections/FooterSection";

gsap.registerPlugin(ScrollSmoother);

const Layout = () => {
  const location = useLocation();

  useGSAP(
    () => {
      // Force scroll to top immediately
      window.scrollTo(0, 0);

      // Normalize scroll for mobile stability
      ScrollTrigger.normalizeScroll(true);

      // Create ScrollSmoother
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1, // Slight smoothing on touch for better feel
        normalizeScroll: true, // Auto-enable normalizeScroll
        ignoreMobileResize: true, // Prevents jitters on address bar toggle
      });

      // Refresh ScrollTrigger after a slight delay to ensure layout is ready
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(timer);
        if (smoother) smoother.kill();
        ScrollTrigger.normalizeScroll(false); // Clean up normalization
      };
    },
    { dependencies: [location.pathname] }
  );

  // Use useLayoutEffect for immediate scroll reset before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // Explicitly refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default Layout;
