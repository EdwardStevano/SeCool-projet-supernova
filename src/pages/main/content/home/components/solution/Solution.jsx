import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./__solution.scss";
import { InView } from "react-intersection-observer";

// import ImageOne from "../../../../../../assets/image/forme/geometry-2361195_640.png";
// import ImageTwo from "../../../../../../assets/image/logo/LogoSiriusMinimize.png";
// import ImageThre from "../../../../../../assets/image/forme/pattern-1489782_640.png";
// import SautImage from "../../../../../../assets/image/transparentImage/jakob-rosen-CTd5_C7p__8-unsplash-removebg.png";

const Solution = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-210vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "3000 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          pin.kill();
        };
      }
    });
    if (window.innerWidth > 1200) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-210vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "3000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  const [lettersRef, setLetterRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }
  const triggerTextRef = useRef(null);

  useEffect(() => {
    // const reveal = gsap.timeline(lettersRef.current, {
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     scrub: true,
    //     start: "top center",
    //     end: "bottom 80%",
    //   },
    //   opacity: 1,
    //   duration: 5,
    //   stagger: 3,
    // });

    const letters = lettersRef.current;
    gsap.set(letters, { opacity: 0 });

    const reveal = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top top",
        end: "rigth center",
      },
    });

    letters.forEach((letter, index) => {
      reveal.to(letter, { opacity: 1, duration: 0.5, delay: index * 0.1 }, 0);
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const [annimationOne, setAnnimationOne] = useState(false);
  const [annimationTwo, setAnnimationTwo] = useState(false);
  const handlechangeSectionOne = (InView) => {
    if (InView) {
      console.log("component view");
      setAnnimationOne(true);
    }
  };
  const handlechangeSectionTwo = (InView) => {
    if (InView) {
      console.log("component view");
      setAnnimationTwo(true);
    } else {
      setAnnimationTwo(false);
    }
  };

  const [sauter, setSauter] = useState(false);

  const handleSauter = (inview) => {
    if (inview) {
      setTimeout(() => {
        setSauter(true);
      }, 500);
    }
  };
  const text =
    "Apprendre où vous voulez, quand vous voulez, suivant vôtre propre rythme.";
  return (
    <div className="scroll-section-outer" id="solution">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section sction1">
            <h3>Les Solution que nous offrons</h3>
          </div>
          <div className="scroll-section">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              nesciunt! Reiciendis minima, nulla placeat, quidem nihil quia sed
              inventore, laboriosam animi pariatur enim officiis provident eum
              optio necessitatibus ipsam similique?
            </h3>
          </div>
          <div className="scroll-section section-3">
            <div className="section-3-contenu">
              <h3 className="lastTitle">Explorez nos multitudes de cours</h3>
              <p className="smalltext">
                Découvrez un monde d'opportunités éducatives avec notre vaste
                gamme de cours. Explorez nos multitudes de programmes
                soigneusement conçus pour répondre à divers intérêts et besoins
                d'apprentissage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solution;
