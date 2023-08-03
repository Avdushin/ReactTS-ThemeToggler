import { Link } from "react-router-dom";
import DarkMode from "../../../Components/Share/DarkMode/DarkMode";

const Settings = () => {
  return (
    <>
      <DarkMode />
      <h1>Settings</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default Settings;
