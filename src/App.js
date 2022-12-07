import Intro from "./components/Intro";
import Skills from "./components/Skills";
import style from "./styles/app.module.scss";

function App() {
  return (
    <>
      <div className={style.container}>
        <Intro></Intro>
        <Skills />
      </div>
    </>
  );
}

export default App;
