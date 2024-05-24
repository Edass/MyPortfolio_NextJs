
import React, { useEffect, useRef, useState } from "react";
import './timeline-component.scss'
import data from '../../data/story.json'
import InsideLi from "./inside-li";
import InfoCard from "./info-card";

const TimelineComponent = () => {
    const [status,setStatus] = useState(null)
  const timelineRef = useRef(null);

  useEffect(() => {
    function isElementInViewport(el) {  
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

  

    function callbackFunc() {
      const items = timelineRef.current.querySelectorAll("li");
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);


  return (
    <section className="timeline" ref={timelineRef}>

{data.map(item =>(
  status==item.id ? <InfoCard key={item.id} {...item}/> : null
))}

      <ul>
      <h1 className="time-title">Experiences</h1>
<div style={{height:"35px"}}></div>

        {data.map((item,index) => (
          <li key={index} onClick={()=>setStatus(item.id)}>
            <InsideLi 
              key={item.id}
              time={item.time}
              image={item.image}
              paraf={item.paraf} 
              />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TimelineComponent