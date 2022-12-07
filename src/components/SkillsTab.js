import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const SkillsTab = ({ style, image, tooltip, delay }) => {
  return (
    <ScrollAnimation
      delay={delay * 220}
      offset={0}
      animateIn="animate__animated animate__bounceInRight"
      animateOut="animate__animated animate__bounceOutLeft"
    >
      <span className={style.skillsTab + " " + style.tooltip}>
        <img src={image} alt="skill-pic" width={90} />
        <span class={style.tooltiptext}>{tooltip}</span>
      </span>
    </ScrollAnimation>
  );
};

export default SkillsTab;
