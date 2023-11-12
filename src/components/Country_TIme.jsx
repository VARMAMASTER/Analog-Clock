import React from "react";
import axios from "axios";
export default function Country_TIme() {
    
  const Countries = [
    { name: "India", endpoint: "Asia/Kolkata" },
    { name: "USA", endpoint: "America/New_York" },
    { name: "Germany", endpoint: "Europe/Berlin" },
    { name: "Russia", endpoint: "Europe/Moscow" },
    { name: "Japan", endpoint: "Asia/Tokyo" },
    { name: "France", endpoint: "Europe/Paris" },
    { name: "Thailand", endpoint: "Asia/Bangkok" },
    { name: "Spain", endpoint: "Europe/Madrid" },
    { name: "Canada", endpoint: "America/Toronto" },
    { name: "SouthKorea", endpoint: "Asia/Seoul" },
    { name: "Italy", endpoint: "Europe/Rome" },
    { name: "UK", endpoint: "Europe/London" },
    { name: "UAE",endpoint: "Asia/Dubai" },
    { name: "Australia", endpoint: "Australia/Sydney" },
    { name: "Nigeria", endpoint: "Africa/Lagos" },
    { name: "Brazil", endpoint: "America/Sao_Paulo" },
    { name: "Mexico", endpoint: "America/Mexico_City" },
    { name: "Singapore", endpoint: "Asia/Singapore" },
    { name: "SouthAfrica", endpoint: "Africa/Johannesburg" },
    { name: "NewZealand", endpoint: "Pacific/Auckland" },
    { name: "Turkey", endpoint: "Europe/Istanbul" },
    { name: "Egypt", endpoint: "Africa/Cairo" },
  ];

  const clickHandler = (endpoint)=>{
    axios.get(`/api/Time/current/zone?timeZone=${endpoint}`).then((response)=>{
        const data = response.data;
        const sec= data.seconds;
        const min=data.minute;
        const hour=data.hour;
    }).catch((error)=>{
        console.log(error);
    })
}
  return (
    <>
      <div className="w-[40vw] p-10 h-[70vh] flex flex-wrap overflow-auto justify-between border-[3px] border-solid rounded-[20px] border-cyan-400">
        {Countries.map((items) => {
          return <button onClick={()=>{
            clickHandler(items.endpoint);
          }} className="btn bg-purple-800 font-butto h-[40px] rounded-[15px] font- ease-in duration-300 hover:bg-violet-800 hover:scale-90 active:bg-slate-400 active:text-red-600  w-[100px] text-white text-[15px] border-[2px] border-solid border-green-600">{items.name}</button>;
        })}
      </div>
    </>
  );
}
