import { useState } from "react";
// import img from "./images/qasr.jpg";

function App() {
  let img = [
    "./images/qasr.jpg",
    "./images/akahon.jpg",
    "./images/relax.jpg",
    "./images/sakura-daraht.jpg",
  ];
  let [number, setNumber] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          if (number > 0) {
            setNumber(number - 1);
          }
        }}
      >
        &lt; Back
      </button>
      <img src={img[number]} width={300}></img>
      <button
        onClick={() => {
          if (number < 3) {
            setNumber(number + 1);
          }
        }}
      >
        Next &gt;
      </button>
    </div>
  );
}

export default App;
