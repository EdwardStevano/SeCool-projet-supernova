import React from "react";
import "./perspective.scss";

import imageMoutain from "../../../../../../assets/branding/img/imageparralax/montaigne.png";
import imageColine from "../../../../../../assets/branding/img/imageparralax/COLINE.png";
import imageNuage from "../../../../../../assets/branding/img/imageparralax/nuage.png";
import imageSoleil from "../../../../../../assets/branding/img/imageparralax/soleil.png";
import imageCielBleu from "../../../../../../assets/branding/img/imageparralax/cielBleu.png";
import imageNature from "../../../../../../assets/branding/img/imageparralax/URBANPARK.png";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
const Perspective = () => {
  const bloc = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.to(".soleil-img", {
        scrollTrigger: {
          trigger: ".soleil-img",
          scrub: 3,
          start: "80% center",
          end: "bottom top",
        },

        x: -1000,
        duration: 10,
      });
      tl.to(".mountain-img", {
        scrollTrigger: {
          trigger: ".perspective-bloc",
          scrub: 0.5,
          start: "80% center",
          end: "bottom top",
        },

        x: 500,
        duration: 10,
      });
      tl.to(".mountain-img2", {
        scrollTrigger: {
          trigger: ".perspective-bloc",
          scrub: 0.5,
          start: "80% center",
          end: "bottom top",
        },

        x: -500,
        duration: 10,
      });
      tl.to(".nature-img", {
        scrollTrigger: {
          trigger: ".perspective-bloc",
          scrub: 0.5,
          start: "80% center",
          end: "bottom top",
        },

        y: 500,
        duration: 10,
      });

      // ScrollTrigger.create({
      //   trigger: ".soleil-img",
      //   animation: tl,
      //   start: "top center",
      //   end: "bottom top",
      //   markers: true,
      //   scrub: true,
      // });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="perspective-bloc" ref={bloc}>
      <div
        className="perspecitve-container"
        style={{
          background: `url(${imageCielBleu})`,
        }}
      >
        <div
          className="item soleil-img"
          style={{
            background: `url(${imageSoleil})`,
          }}
        ></div>
        <div className="item mountain-img">
          <img src={imageMoutain} alt="" />
        </div>
        <div className="item mountain-img2">
          <img src={imageColine} alt="" />
        </div>
        <div className="item nuage nuage-img nuage-1">
          <img src={imageNuage} alt="" />
        </div>
        <div className="item nuage nuage-img nuage-2">
          <img src={imageNuage} alt="" />
        </div>
        <div className="item nuage nuage-img nuage-3">
          <img src={imageNuage} alt="" />
        </div>
        <div className="item nature-img">
          <img src={imageNature} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Perspective;
