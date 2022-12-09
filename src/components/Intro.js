import React from "react";
import style from "../styles/intro.module.scss";
import ProfilePic from "../assets/editedImage.png";
function Intro() {
  return (
    <div className={style.introContainer}>
      <div className={style.imageContainer}>
        <img src={ProfilePic} alt="my-image" className={style.imageContainer} />
      </div>
      <div className={style.infoContainer}>
        <span>Hi, I am</span>
        <h1>Debajyoti</h1>
        <p>
          I am a professional software engineer & a proficient-
          <p className={style.wordCarousel}>
            <div>
              <ul className={style.flip5}>
                <li>Blockchain Developer</li>
                <li>Full Stack Web Developer</li>
                <li>Game Developer</li>
                <li>Web3 Game Developer</li>
                <li>AI/ML Developer</li>
              </ul>
            </div>
          </p>
        </p>
      </div>
      <div className={style.containerChevron}>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <div className={style.scrollText}>Scroll Down</div>
      </div>
    </div>
  );
}

export default Intro;
