import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sos from "./Components/Sos";

function App() {
  return (
    <div className=" bg-zinc-900 flex-wrap w-screen h-screen flex justify-center items-center">
      <div className="text-[5vw]  flex justify-center items-center h-[10vh] w-[90%] text-white">DO YOU NEED HELP ?</div>
      <Sos />
    </div>
  );
}

export default App;
