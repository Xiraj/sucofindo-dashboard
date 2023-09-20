import React, { useState } from "react";

export default function Clock () {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000);
    return(
        <div className="bg-white  ml-[1.5rem] w-[13rem] h-[3rem] rounded-xl ">
            <h1 className="text-main-color text-2xl p-2 font-bold text-center ">{currentTime}</h1>
        </div>
    );
}