import React from "react";
import style from "../styles/skills.module.scss";
import SkillsTab from "./SkillsTab";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Typescript from "../assets/typescript.png";
import NodeJs from "../assets/nodejs.png";
import ExpressJs from "../assets/expressjs.png";
import ReactPng from "../assets/reactjs.png";
import NextJs from "../assets/nextjs.png";
import Sass from "../assets/sass.png";
import Solidity from "../assets/solidity.png";
import Hardhat from "../assets/hardhat.png";
import Docker from "../assets/docker.png";
import Kubernetes from "../assets/kubernetes.png";
import Aws from "../assets/aws.png";
import Nginx from "../assets/ingress-nginx.png";
import Redux from "../assets/redux.png";
import Python from "../assets/python.png";
import Django from "../assets/django.png";
import Pandas from "../assets/pandas.png";
import Numpy from "../assets/numpy.png";
import Scikitlearn from "../assets/scikitlearn.png";
import Tensorflow from "../assets/tensorflow.png";
import Matplotlib from "../assets/matplotlib.png";
import Fastapi from "../assets/fastapi.png";
import MongoDb from "../assets/mongodb.png";
import Sqlite from "../assets/sqlite.png";
import Postgress from "../assets/postgress.png";
import MySql from "../assets/mysql.png";
import Unity from "../assets/unity.png";
import Csharp from "../assets/csharp.png";
import Cplus from "../assets/cplus.png";
import Blender from "../assets/blender.png";
import C from "../assets/c.png";
import Java from "../assets/java.png";
import Photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";

const Skills = () => {
  const skills = [
    {
      image: HTML,
      tooltip: "HTML",
    },
    {
      image: CSS,
      tooltip: "CSS",
    },
    {
      image: Javascript,
      tooltip: "Javascript",
    },
    {
      image: Typescript,
      tooltip: "Typescript",
    },
    {
      image: NodeJs,
      tooltip: "NodeJs",
    },
    {
      image: ExpressJs,
      tooltip: "ExpressJs",
    },
    {
      image: ReactPng,
      tooltip: "ReactJs",
    },
    {
      image: NextJs,
      tooltip: "NextJs",
    },
    {
      image: Sass,
      tooltip: "Sass",
    },
    {
      image: Solidity,
      tooltip: "Solidity",
    },
    {
      image: Hardhat,
      tooltip: "Hardhat",
    },
    {
      image: Docker,
      tooltip: "Docker",
    },
    {
      image: Kubernetes,
      tooltip: "Kubernetes",
    },
    {
      image: Nginx,
      tooltip: "Nginx",
    },
    {
      image: Aws,
      tooltip: "AWS",
    },
    {
      image: Redux,
      tooltip: "Redux",
    },
    {
      image: Python,
      tooltip: "Python",
    },
    {
      image: Django,
      tooltip: "Django",
    },
    {
      image: Pandas,
      tooltip: "Pandas",
    },
    {
      image: Numpy,
      tooltip: "Numpy",
    },
    {
      image: Tensorflow,
      tooltip: "Tensorflow",
    },
    {
      image: Scikitlearn,
      tooltip: "ScikitLearn",
    },
    {
      image: Matplotlib,
      tooltip: "Matplotlib",
    },
    {
      image: Fastapi,
      tooltip: "Fastapi",
    },
    {
      image: MongoDb,
      tooltip: "MongoDB",
    },
    {
      image: Sqlite,
      tooltip: "Sqlite",
    },
    {
      image: Postgress,
      tooltip: "PostgressSQL",
    },
    {
      image: MySql,
      tooltip: "MySQL",
    },
    {
      image: Unity,
      tooltip: "Unity",
    },
    {
      image: Csharp,
      tooltip: "C#",
    },
    {
      image: Cplus,
      tooltip: "C++",
    },
    {
      image: Blender,
      tooltip: "Blender",
    },
    {
      image: C,
      tooltip: "C",
    },
    {
      image: Java,
      tooltip: "Java",
    },
    {
      image: Photoshop,
      tooltip: "Photoshop",
    },
    {
      image: Illustrator,
      tooltip: "Illustrator",
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
