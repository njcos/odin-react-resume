import { useState } from "react";
import "./App.css";
import { Resume } from "./components/Resume";
import { SideBar } from "./components/SideBar";

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
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="wrapper">
      <SideBar
        info={info}
        setInfo={setInfo}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Resume info={info} isActive={isActive} />
    </div>
  );
}

export default App;
