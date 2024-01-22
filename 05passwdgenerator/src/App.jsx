import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const copyPasswordToClipboard =() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const generatorPassword = useCallback(() => {
    let pass=''
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    const num = "0123456789";
    const chars = "!@#$%^&*()_+-=.,/";

    if (numberAllowed) str += num;
    if (charAllowed) str += chars;
    
    for(let i=1; i<=length; i++) {
      const ch = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(ch)
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed]);

  useEffect(()=> {
    generatorPassword()
  }, [length, numberAllowed, charAllowed])
  return (
    <div className="bg-gray-700 w-full h-screen">
      <div className="bg-gray-700 w-full text-orange-500 mx-auto max-w-lg bold rounded-lg px-3 py-3">
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden h-9">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="bg-blue-500 outline-none text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 my-3">
          <div className=" items-center flex gap-x-1">
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label className=" font-medium" htmlFor="length">
              Length: {length}
            </label>
          </div>
          <div className=" items-center flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className=" items-center flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
