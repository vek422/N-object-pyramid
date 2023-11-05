/* eslint-disable react/prop-types */
import { useState } from "react";
let idConst = 0;
// eslint-disable-next-line react/prop-types
export default function Controller({ setObjkts, height, totalObjects }) {
  const [objInput, setObjInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (objInput !== "") {
      addObject({ wt: parseInt(objInput), id: `obj-${idConst++}` });
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
  const popObj = () => {
    setObjkts((state) => [...state.splice(0, state.length - 1)]);
  };
  const handleReset = () => {
    setObjkts([]);
  };
  return (
    <>
      <div className="controller">
        <form onSubmit={handleFormSubmit}>
          <input
            type="number"
            id="obj_input"
            value={objInput}
            onChange={handleObjInputChange}
          />
          <input type="submit" value="ADD" />
          <input type="button" onClick={handleReset} value="RESET" />
          <input type="button" onClick={popObj} value={"POP"} />
        </form>

        <div className="stats">
          <h2>Stats</h2>
          <p>
            <span>Height</span> : {height}
          </p>
          <p>Total Objects : {totalObjects}</p>
          <p className="helpertext">double click to remove object</p>
        </div>
      </div>
    </>
  );
}
