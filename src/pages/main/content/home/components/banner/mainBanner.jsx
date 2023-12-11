import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

// Styles importation
import './mainBanner.scss'

// Assets importation
import box3d_Float from '@assets/branding/Illustration/3DFloatRound.png'
import SeCool_Star from '@assets/branding/Illustration/EpicRound1.png'
import BannerImage from '@assets/branding/SignIn_Image.png'

function MainBanner() {

    const animateRef = useRef();

    // useEffect(() => {
    //     const bannerAnimate = gsap.context(() =>{
    //         const timeline = gsap.timeline();

    //         timeline.fromTo(".line1-text", {
    //             opacity: 0,
    //             delay: 1,
    //             color: '#primaryColor',
    //             x: -400,
    //             duration: 0.6,
    //         },
    //         {
    //             opacity: 1,
    //             delay: 1,
    //             ease: 'power3.inOut',
    //             x: 1,
    //             duration: 0.6,
    //         })
    //     })
    

    // }, animateRef)
    
    
  return (
    <div className='super-global-container banner' ref={animateRef}>
        <div className="super-container-p80">
            <div className="side-50">
                <div className="title-content">
                    <div className="line1">
                        <h1 className='line1-text'>Naviguez à</h1>
                    </div>
                    <div className="line1-prime">
                        <h1>travers</h1> <span className='border-radius-px100'><img src={box3d_Float} alt="3D floating box" width={'125px'}/></span>
                    </div>
                    <div className="line2">
                        <h1>les <span>meilleures</span></h1>
                    </div>

                    <div className="end-line">
                        <h1>écoles.</h1><span><img src={SeCool_Star} alt="3D floating box" width={'60px'}/></span>
                    </div>



                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quaerat omnis in fugit. Molestiae, laboriosam quo, minima at dolor iste, pariatur aliquam dolorum eum </p>

                    <div className="form-banner flex box-shadow1">
                        <input type="text" placeholder='exemple: informatique, agronimie,...' name="search" id="searc" className='w-p70' />
                        <button className='w-p30'>Decouvrir</button>
                    </div>
                </div>
                <h1></h1>
            </div>
            <div className="side-50 spline">
                <img src={BannerImage} alt="" width={'500px'} />
            </div>
        </div>
    </div>
  )
}

export default MainBanner
