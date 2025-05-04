import { Input } from "./Input";
import { useState } from "react";
import { TextArea } from "./TextArea";

export function SideBar({ info, setInfo, isActive, setIsActive, setIsLoaded }) {
  const [formData, setFormData] = useState(info);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo(formData);
    setIsActive(!isActive);
    setIsLoaded(true);
    console.log(info);
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  return (
    <div className={`sidebar-with-menu ${isActive ? "" : "done"}`}>
      <div className="sidebar">
        <h1>Details</h1>
        <h3 className="form-section">Basic Info</h3>
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            label="Full Name"
            changeHandler={inputChange}
            type="text"
          />
          <Input
            name="email"
            label="Email"
            changeHandler={inputChange}
            type="email"
          />
          <Input
            name="phone"
            label="Phone"
            changeHandler={inputChange}
            type="tel"
          />
          <h3 className="form-section">Education</h3>
          <Input
            name="school"
            label="School"
            changeHandler={inputChange}
            type="text"
          />
          <Input
            name="degree"
            label="Degree"
            changeHandler={inputChange}
            type="text"
          />
          <Input
            name="date"
            label="Date Graduated"
            changeHandler={inputChange}
            type="date"
          />
          <h3 className="form-section">Work History</h3>
          <Input
            name="company"
            label="Company"
            changeHandler={inputChange}
            type="text"
          />
          <Input
            name="role"
            label="Role"
            changeHandler={inputChange}
            type="text"
          />
          <TextArea
            name="responsibilities"
            label="Responsibilites"
            changeHandler={inputChange}
          />
          <Input
            name="startDate"
            label="Date Started"
            changeHandler={inputChange}
            type="date"
          />
          <Input
            name="endDate"
            label="Date Finished"
            changeHandler={inputChange}
            type="date"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="menu">
        <img
          className={`menu-button ${isActive ? "rotated" : ""}`}
          src="imgs/menu.svg"
          alt="menu button"
          onClick={toggleClass}
        />
      </div>
    </div>
  );
}
