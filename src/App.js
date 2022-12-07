import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import style from "./styles/app.module.scss";

function App() {
  return (
    <>
      <div className={style.container}>
        <Intro></Intro>
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
