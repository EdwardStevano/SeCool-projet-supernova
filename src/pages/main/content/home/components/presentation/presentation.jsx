import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {Tilt} from 'react-tilt';

// Style importation
import './presentation.scss'

// Assets importation
import Mogule1 from '@assets/branding/Illustration/mogule5-1.png'

function Presentation() {
  const animateRef = useRef();

  const tiltOptions ={
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)", 
  }

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
        const bannerAnimate = gsap.context(() =>{
            const timeline = gsap.timeline();
            timeline.fromTo(".presentation-title1", {
                x: -200,
                y: 300,
                opacity:0,
                duration: 1,
            }, {
                x: 0,
                y: 0,
                opacity:1,
                ease: 'expo.in',
                duration: 0.5,
            });
            timeline.fromTo(".presentation-title2", {
              x: 1000,
              y: 300,
              opacity:0,
              duration: 0.3,
          }, {
              x: 0,
              y: 0,
              opacity:1,
              ease: 'expo.out',
              duration: 0.5,
          });
            ScrollTrigger.create({
              animation: timeline,
              scrub: 3,
              start: 'top bottom',
            })
        })
    

    }, animateRef)

  return (
    <div className='super-global-container presentation' ref={animateRef}>
        <div className="fade-transition"></div>
        <div className="super-container">
          <div className="super-container-p80 presentation">

            <div className="presentation-title1">
              <img src={Mogule1} alt="mogule1" className='mogule1' width={'250px'}/>
              <h1>Votre avenir commence ici : <span>découvrez les meilleures écoles adaptées à vos ambitions.</span>"</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam perspiciatis deleniti aut beatae autem. Fuga doloremque nisi impedit soluta ad, delectus eveniet, excepturi distinctio ducimus placeat molestiae corporis mollitia!</p>
            </div> 

            <Tilt options={tiltOptions}>
              <div className="presentation-title2">
                <div className="inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam vel facilis excepturi corrupti, autem amet sapiente, porro doloremque illo natus ex quaerat voluptate incidunt numquam, dolor tenetur architecto explicabo.
                </div>
              </div> 
            </Tilt>

          </div>
        </div>
        
    </div>
  )
}

export default Presentation
