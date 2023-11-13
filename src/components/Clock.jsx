import React, { useState } from "react";
import CountryTIme from "./CountryTIme";
import AnalogClock from "./AnalogClock";
import Navbar from "./navbar";
export default function Clock() {
  const [ind,setnat] = useState(true);
  return (
    <>
    <Navbar state = {setnat}/>
      <div className="w-[90vw] font-butto rounded-[5%] mt-10 h-[80vh]  bg-slate-800 flex justify-around items-center">
      {ind?<AnalogClock/>:<CountryTIme/>}
      </div>
    </>
  );
}
