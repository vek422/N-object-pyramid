import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Controller({ setObjkts }) {
  const [objInput, setObjInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (objInput !== "") {
      addObject(parseInt(objInput));
    }
  };
  const handleObjInputChange = (e) => {
    setObjInput(e.target.value);
  };
  const addObject = (_obj) => {
    console.log("added");
    setObjkts((state) => [...state, _obj]);
    setObjInput("");
  };
  return (
    <div className="controller">
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          id="obj_input"
          value={objInput}
          onChange={handleObjInputChange}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}
