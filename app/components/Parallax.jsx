"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";

const Parallax = ({ className, children, speed = 1, id = "parallax" }) => {
  const trigger = useRef();
  const target = useRef();
  const timeline = useRef();
  const {width: windowWidth} = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const y = windowWidth * speed * 0.1

    const setY = gsap.quickSetter(target.current, "y", "px");


    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
/*************  ✨ Codeium Command ⭐  *************/
        // ScrollTrigger's onUpdate callback, gets called every time the scroll position is updated
        // and the ScrollTrigger is active. The callback is passed an object with a `progress`
        // property which is a normalized value between 0 and 1 indicating the progress of the
        // scrollTrigger. Here we use this progress to set the y position of the element.
/******  400e3dde-ef5d-4407-9bc7-6a9817776178  *******/
        onUpdate: (e)=>{
            setY(e.progress * y);
        }
      },
    });
    return () => {
        timeline?.current.kill();
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} className="className">
      <div ref={target}>{children}</div>
    </div>
  );
};

export default Parallax;
