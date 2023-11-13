import React, { useState } from "react";
import Country_TIme from "./Country_TIme";
import AnalogClock from "./AnalogClock";
import Navbar from "./navbar";
export default function Clock() {
  const [ind,setnat] = useState(true);
  return (
    <>
    <Navbar state = {setnat}/>
      <div className="w-[90vw] font-butto rounded-[5%] mt-10 h-[80vh]  bg-slate-800 flex justify-around items-center">
      {ind?<AnalogClock/>:<Country_TIme/>}
      </div>
    </>
  );
}
