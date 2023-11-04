import { useState } from "react";
import Controller from "./components/Controller";
import Canvas from "./components/Canvas";

export default function App() {
  const [objkts, setObjkts] = useState([]);

  console.log(objkts);
  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="heading">N-Pyramid Problem</h1>
      </div>
      <div className="main-container">
        <Controller setObjkts={setObjkts} />
        <Canvas objkts={objkts} />
      </div>
    </div>
  );
}
