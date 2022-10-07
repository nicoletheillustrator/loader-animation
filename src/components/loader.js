import React from "react";

export default function Loader() {
    const wolfref = React.useRef()
    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()
    window.onload = (event) => {
        console.log('page is fully loaded');
        ref1.current.style.animation = headAnimation
        ref2.current.style.animation = earAnimation
        ref2.current.style.animationDelay = "1s"
        ref3.current.style.animation = earAnimation
        ref3.current.style.animationDelay = "1500ms"
        wolfref.current.style.animation = wolfzoom
        wolfref.current.style.animationDelay = "2400ms"
      };
    
   let headAnimation = "dash1 10s cubic-bezier(0.22, 1, 0.36, 1) forwards";
   let earAnimation = "dash2 2750ms cubic-bezier(0.76, 0, 0.30, 1) forwards";
   let wolfzoom = "wolf 1250ms cubic-bezier(0.87, 0, 0.13, 1) forwards"
    return(
        <div className="loader-wrapper">
              <svg className="loader-wolf" ref={wolfref} viewBox="0 0 91 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_233_8)">
            <path className="path-a" ref={ref1} d="M45.2601 24.2701L35.3801 23.9301L10.1401 1.08008L7.75009 46.4401L0.590088 69.3001L29.5801 89.4201L32.3101 100.2L45.2601 103.75L58.2001 100.2L60.9301 89.4201L89.9201 69.3001L82.7601 46.4401L80.3701 1.08008L55.1301 23.9301L45.2601 24.2701Z"/>
            <path className="path-b" ref={ref3} d="M74.39 38.8001L77.12 27.8901L75.76 13.3301L63.48 26.0701L74.39 38.8001Z"/>
            <path className="path-c" ref={ref2} d="M15.26 38.0501L12.53 27.1401L13.89 12.5901L26.18 25.3201L15.26 38.0501Z"/>
            </g>
            </svg>
        </div>
    )
};