import { useState } from "react";
import Controller from "./components/Controller";
import Canvas from "./components/Canvas";

export default function App() {
  const [objkts, setObjkts] = useState([]);
  const [height, setHeight] = useState();
  const handleRemoveObject = (obj_id) => {
    let new_objkts = objkts.filter((obj) => {
      if (obj.id != obj_id) {
        return obj;
      }
    });
    setObjkts([...new_objkts]);
  };
  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="heading">N-Pyramid Problem</h1>
      </div>
      <div className="main-container">
        <Controller
          setObjkts={setObjkts}
          objkts={objkts}
          height={height}
          totalObjects={objkts.length}
        />
        <Canvas
          objkts={objkts}
          setHeight={setHeight}
          handleRemoveObject={handleRemoveObject}
        />
      </div>
    </div>
  );
}
