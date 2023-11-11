import React from "react";

export default function Navbar() {
  return (
    <nav className="nav bg-violet-900 h-[3.8rem] flex justify-between items-center">
      <div className=" logo  text-blue-500 bg-[url('./images/logo.png')] h-[60px] w-[80px] bg-contain bg-no-repeat "></div>
      {/* <form
        className="search  h-[100%] w-[20rem] flex items-center mr-40"
        action="">
        <input
          className="w-[100%] focus:outline-none focus:border-[3px] border-solid border-cyan-400 focus:bg-slate-800 font-serif focus:text-cyan-400 h-[70%] rounded-[30px] p-4"
          type="text"
          placeholder="Please enter the country name"
        />
      </form> */}

      <div className="mr-[650px] text-cyan-400 font-serif text-[50px]">
        Analog Clock
      </div>
    </nav>
  );
}
