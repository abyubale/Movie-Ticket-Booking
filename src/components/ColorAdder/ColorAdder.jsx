import { useState } from "react";

const ColorAdder = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const getPattern = (n) => {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
      pattern += "&";
      console.log(pattern);
    }
  };

  console.log(getPattern(4));
  return (
    <>
      <div>
        <div
          className=""
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: `rgb(${r},${g},${b})`,
          }}
        ></div>
      </div>

      <input
        type="range"
        max="240"
        min="0"
        value={r}
        onChange={(e) => setR(e.target.value)}
      />
      <input
        type="range"
        max="240"
        min="0"
        value={g}
        onChange={(e) => setG(e.target.value)}
      />
      <input
        type="range"
        max="240"
        min="0"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
    </>
  );
};

export default ColorAdder;
