import { useEffect, useState } from "react";
import { mergeSort } from "../utilities/mergeSort";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
function solveK(n) {
  let a = 1,
    b = 1,
    c = -2 * n;
  let desc = b - 4 * a * c;

  if (desc < 0) return 0;
  if (desc == 0) return -b / (2 * a);

  let x1 = Math.ceil((-b + Math.sqrt(desc)) / (2 * a));

  return x1;
}

const someFunction = (objkts) => {
  let newObjkts = mergeSort(objkts);
  let finalArray = [];
  let n = newObjkts.length;

  console.log("sorted array", newObjkts);
  let k;
  let obj_ptr = n - 1;
  while (n != 0) {
    k = solveK(n);
    n = n - k;
    let x = [];
    while (k != 0) {
      x.push(newObjkts[obj_ptr]);
      k--;
      obj_ptr--;
    }

    finalArray.push(x);
  }

  return finalArray;
};

function renderBlocks(objkts, handleRemoveObject) {
  let rowConst = 0;
  const finalArray = someFunction(objkts);

  let height = finalArray.length;
  let elements = finalArray.map((row) => (
    <motion.div className="row" key={`row-${rowConst++}`} layoutRoot>
      {row.map((block) => (
        <motion.div
          layout
          transition={{ duration: 0.5, ease: "backInOut" }}
          initial={{ y: -100, scale: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="obj"
          key={block.id}
          onDoubleClick={() => {
            handleRemoveObject(block.id);
          }}
        >
          <p className="value">{block.wt}</p>
        </motion.div>
      ))}
    </motion.div>
  ));
  return {
    height,
    elements,
  };
}
// eslint-disable-next-line react/prop-types
export default function Canvas({ objkts, setHeight, handleRemoveObject }) {
  const [x, setX] = useState([]);
  useEffect(() => {
    let { elements, height } = renderBlocks(objkts, handleRemoveObject);
    setHeight(height);
    setX(elements);
  }, [objkts]);
  console.log(x);
  return (
    <div className="canvas">
      <AnimatePresence>
        <LayoutGroup>{x}</LayoutGroup>
      </AnimatePresence>
    </div>
  );
}
