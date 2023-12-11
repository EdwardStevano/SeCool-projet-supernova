import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Style importation
import "./band.scss";
import { ScrollTrigger } from "gsap/all";

function Band() {
  const animateRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const bannerAnimate = gsap.context(() => {
      gsap.to(".marquee", {
        opacity: 1,
        delay: 3,
      });
      const timeline = gsap.timeline();
      timeline.to(".marquee-wrapper", {
        x: -5000,
        ease: "sine.inOut",
        duration: 1,
      });
      ScrollTrigger.create({
        animation: timeline,
        scrub: 3,
        start: "top center",
      });
    });
  }, animateRef);

  return (
    <div class="marquee" ref={animateRef}>
      <h3>
        <div class="marquee-wrapper">
          <div class="marquee-title">
            / We think <span class="text-stroke-black">creative</span>
            &amp; make them
            <span class="text-stroke-black">" easy </span> / We think
            <span class="text-stroke-black">creative</span>
            &amp; make them
            <span class="text-stroke-black"> easy "</span>
          </div>
          <div class="marquee-title">
            / We think <span class="text-stroke-black">creative</span>
            &amp; make them
            <span class="text-stroke-black">easy</span> / We think
            <span class="text-stroke-black">creative</span>
            &amp; make them
            <span class="text-stroke-black">easy</span>
          </div>
          <div class="marquee-title">
            / We think <span class="text-stroke-black">creative</span>
            &amp; make them
            <span class="text-stroke-black">easy</span> / We think
            <span class="text-stroke-black">creative</span>
            &amp; make them
            <span class="text-stroke-black">easy</span>
          </div>
        </div>
      </h3>
    </div>
  );
}

export default Band;
