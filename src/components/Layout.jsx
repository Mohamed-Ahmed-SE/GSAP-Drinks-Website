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
      // Ensure fonts are loaded before initializing heavily dependent plugins if possible, 
      // though ScrollSmoother handles layout. A small delay or check helps.
      // But the primary error "Please gsap.registerPlugin" is fixed by the global register above.

      // Force scroll to top on route change
      window.scrollTo(0, 0);

      // Create ScrollSmoother
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      // Reset any ScrollTrigger pins or state
      ScrollTrigger.refresh();

      return () => {
        if (smoother) smoother.kill();
      };
    },
    { dependencies: [location.pathname] }
  );

  // Use useLayoutEffect for immediate scroll reset before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
