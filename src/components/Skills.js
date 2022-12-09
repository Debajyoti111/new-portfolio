import React from "react";
import style from "../styles/skills.module.scss";
import SkillsTab from "./SkillsTab";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import HTML from "../assets/html.png";
const Skills = () => {
  const skills = [
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: HTML,
      tooltip: "HTML",
    },
  ];
  return (
    <div className={style.skillsContainer}>
      <ScrollAnimation
        animateIn="animate__animated animate__bounceInRight"
        animateOut="animate__animated animate__bounceOutLeft"
        offset={0}
      >
        <h1>SKILLS</h1>
      </ScrollAnimation>
      <div className={style.tabContainer}>
        {skills.map((skill, index) => {
          return (
            <SkillsTab
              key={index}
              style={style}
              image={skill.image}
              tooltip={skill.tooltip}
              delay={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
