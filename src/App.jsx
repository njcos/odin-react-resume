import { useState } from "react";
import "./App.css";
import { Resume } from "./components/Resume";
import { SideBar } from "./components/SideBar";
import { Loading } from "./components/Loading";

function App() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    degree: "",
    date: "",
    company: "",
    role: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="wrapper">
      <SideBar
        info={info}
        setInfo={setInfo}
        isActive={isActive}
        setIsActive={setIsActive}
        setIsLoaded={setIsLoaded}
      />
      <Loading isLoaded={isLoaded} />
      <Resume info={info} isActive={isActive} isLoaded={isLoaded} />
    </div>
  );
}

export default App;
