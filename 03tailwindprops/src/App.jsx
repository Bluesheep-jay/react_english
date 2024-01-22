import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div>
      <img src="" alt="" />
      <h1 className=" text-2xl bg-green-700 p-3 text-slate-50 rounded-md">
        Hello Tailwind CSS
      </h1>
      <Card user="hukhan"/>
      <Card user="foo" post="SW Engineer"/>
      <Card />

    </div>
  );
}

export default App;
