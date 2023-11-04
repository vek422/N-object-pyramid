import { useEffect, useState } from "react";
import { mergeSort } from "../utilities/mergeSort";
import { AnimatePresence, motion } from "framer-motion";
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

function renderBlocks(objkts) {
  let rowConst = 0,
    blockConst = 0;

  const finalArray = someFunction(objkts);

  return finalArray.map((row) => (
    <motion.div className="row" key={`row-${rowConst++}`}>
      {row.map((block) => (
        <motion.div
          layout
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="obj"
          key={`block-4${blockConst++}`}
        >
          <p className="value">{block}</p>
        </motion.div>
      ))}
    </motion.div>
  ));
}
// eslint-disable-next-line react/prop-types
export default function Canvas({ objkts }) {
  const [x, setX] = useState([]);
  useEffect(() => {
    setX(renderBlocks(objkts));
  }, [objkts]);
  return (
    <div className="canvas">
      <AnimatePresence>{x}</AnimatePresence>
    </div>
  );
}
