import React from "react";
import { Outlet } from "react-router-dom";

// Assets importation
import "./style.scss";

// Layout importation
import __MAIN_HEADER__ from "@pages/main/layout/header/mainHeader";
import __MAIN_FOOTER__ from "@pages/main/layout/footer/mainFooter";

// Components importation
import ScroolToTop from "@components/ui/scrollToTop/scrollToTop";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";

function main() {
  const [heigth, setheigth] = useState(true);
  const CountainerRef = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.to(CountainerRef.current, {
  //     scale: 1,
  //     delay: 5,
  //     duration: 5,
  //     ease: "bounce",
  //   });
  // });
  return (
    <div
      className="main-container"
      // style={{
      //   scale: "0.6",
      //   height: "100vh",
      // }}
      ref={CountainerRef}
    >
      {/* CONSTANT COMPONENTS */}
      <ScroolToTop />

      <__MAIN_HEADER__ />
      <div className="main-content">
        <Outlet />
      </div>
      <__MAIN_FOOTER__ />
    </div>
  );
}

export default main;
