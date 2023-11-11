import React, { useState } from "react";

export default function Clock() {
    const [time,SetTime] = useState({
        sec: "0deg",
        min: "0deg",
        hour: "0deg",
    });

    setInterval(() => {
        const date = new Date();
        SetTime({
            sec: `${(date.getSeconds() / 60) * 360}deg`,
            min: `${((date.getMinutes() + date.getSeconds() / 60) / 60) * 360}deg`,
            hour: `${((date.getHours() % 12 + date.getMinutes() / 60) / 12) * 360}deg`,
        })
    }, 1000);

  const numbers = [
    { num: 1, degree: 120 },
    { num: 2, degree: 150 },
    { num: 3, degree: 180 },
    { num: 4, degree: 210 },
    { num: 5, degree: 240 },
    { num: 6, degree: 270 },
    { num: 7, degree: 300 },
    { num: 8, degree: 330 },
    { num: 9, degree: 0 },
    { num: 10, degree: 30 },
    { num: 11, degree: 60 },
    { num: 12, degree: 90 },
  ];
  return (
    <>
      <div className="w-[100%] mt-10 h-[600px] bg-slate-800 flex justify-center items-center">
        <div className="clock w-[500px] h-[500px] bg-slate-900 rounded-[50%] flex items-center ">
          {numbers.map((items) => {
            return (
              <div
                className={`p-[30px] absolute rounded-[30px]  text-white font-bold text-[30px] w-[250px] origin-right`}
                style={{
                  transform: `rotate(${items.degree}deg)`,
                }}>
                <span
                  className=" inline bg-cyan-400 border-2 w-[20px] border-solid border-red-800 rounded-[50%]"
                  style={{ transform: `rotate(${items.degree}deg)` }}>
                  {/* {items.num} */}📍
                </span>
              </div>
            );
          })}
          <div className="w-[100%] z-[100] h-[25px] pl-[235px] align-middle ">
            🟡
          </div>
          <div
            className=" seconds  relative bottom-[88px] right-[242px] hours w-[1%] h-[35%] rounded-[5px] bg-slate-50 opacity-[0.6] origin-bottom"
            style={{ rotate: time.sec }}></div>
          <div
            className="minutes  relative bottom-[64px] right-[247px] hours w-[1%] h-[25%] rounded-[5px] bg-slate-50 opacity-[0.8] origin-bottom"
            style={{ rotate: time.min }}></div>
          <div
            className="sec relative bottom-[52px] right-[251px] hours w-[1%] h-[20%] rounded-[5px] bg-slate-50 opacity-[1] origin-bottom"
            style={{ rotate: time.hour }}></div>
        </div>
      </div>
    </>
  );
}
