import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import '../App.css';

function Test(){

  let block = useRef(null)


  useEffect(() =>{
    console.log()
    TweenMax.from(block,1,{})

  })
  return(
    <div className="letter-container">
      <div className="block-reveal">
        <span ref={el => block = el}>HEY</span>
        <span>THIS</span>
        <span>ANIMATION</span>
      </div>
    </div>
  )
}

export default Test;