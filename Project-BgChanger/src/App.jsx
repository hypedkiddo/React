import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive"); //Using usestate hook

  return (
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap text-center justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap text-center justify-center shadow-lg gap-3 bg-white  px-2 py-2">
            <button onClick={()=>{setColor("red")}} className="outline-none px-4 rounded-3xl" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>{setColor("green")}} className="outline-none px-4 rounded-3xl" style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>{setColor("blue")}} className="outline-none px-4 rounded-3xl" style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>{setColor("lavender")}} className="outline-none px-4 rounded-3xl" style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={()=>{setColor("black")}} className="outline-none px-4 rounded-3xl" style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>{setColor("white")}} className="outline-none px-4 rounded-3xl" style={{backgroundColor:"white"}}>White</button>
          </div>
        </div>
      </div>
  );
}

export default App;
