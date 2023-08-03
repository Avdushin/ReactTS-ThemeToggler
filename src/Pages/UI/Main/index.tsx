import { Link } from "react-router-dom";
import DarkMode from "../../../Components/Share/DarkMode/DarkMode";
import './main.scss'
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

const Main = () => {
  return (
    <>
      <div className="stack">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <DarkMode />
      <h1>Main Page</h1>
      <Link to="/settings">Settings</Link>
      <p>
        This app working with <code>.css</code>, <code>.scss</code>,{" "}
        <code>.js</code> and <code>.ts</code>
      </p>
      <a href="https://github.com/Avdushin" target="_blank">
        github.com/Advushin
      </a>
    </>
  );
};

export default Main;
