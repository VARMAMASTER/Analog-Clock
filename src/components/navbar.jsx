import React, { useState } from "react";

export default function Navbar({state}) {
  const [India,SetNational]= useState(true);

  const Toggle_Country = ()=>{
    console.log(India);
    if(India===true){
      SetNational(false);
      state(false);
    }else{
      SetNational(true);
      state(true);
    }
  }
  
  return (
    <nav className="nav m-3 rounded-[30px] bg-violet-900 h-[5rem] flex justify-between items-center">
      <div className=" logo  text-blue-500 bg-[url('./images/logo.png')] h-[100%] w-[80px] bg-contain bg-no-repeat "></div>
      <div>
      <span className="text-red-600 font-butto text-[20px] font-bold">
      {"Click Me! -->>"}
      </span>
      {
        India?(<button onClick={Toggle_Country} className="ml-[10px] w-[150px] rounded-[30px] h-[40px] bg-violet-800 active:bg-slate-900 hover:bg-slate-800 text-white font-mono hover:scale-95 duration-300 ease-out shrink-100 " >International</button>):(
          <button onClick={Toggle_Country} className="ml-[10px] w-[150px] rounded-[30px] h-[40px] bg-violet-800 active:bg-slate-900 hover:bg-slate-800 text-white font-mono hover:scale-95 duration-300 ease-out shrink-100 ">India</button>
        )
      }
        
        
      </div>

      <div  className="mr-[650px]  font-Satisfy text-cyan-400 text-[50px]">
        Analog Clock
      </div>
    </nav>
  );
}
