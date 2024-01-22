import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 bg-green-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 ">
        <div className="fixef flex flex-wrap justify-center shadow-3xl bg-white rounded-3xl px-3 py-2 gap-3">
          <button
            onClick={() => setColor("red")}
            className="rounded-full px-3 py-2 shadow-xl bg-red-700 text-black outline-none"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="rounded-full px-3 py-2 shadow-xl bg-green-600 text-black outline-none"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
