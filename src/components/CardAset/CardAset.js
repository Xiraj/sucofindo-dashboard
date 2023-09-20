import React from "react";
import { FaFolder } from "react-icons/fa";

export default function CardAset () {
    return(
        <div className="bg-white w-[67.291rem] h-[21.5rem] ml-[2.5rem]">
            <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Dashboard</h1>
            <div className="flex gap-6 ml-[2.5rem] pt-[2.2rem]">
                <div className="w-[22.25rem] h-[12.5rem] rounded-[1rem] bg-main-color ">
                    <div className="bg-white w-[3rem] h-[3rem] rounded-[0.5rem] ml-8 mt-5">
                        <div className="ml-[0.5rem] pt-[0.5rem]">
                            <FaFolder color="#4E73DF" size={30}/>
                        </div>
                    </div>
                </div>
                <div>
                    random
                </div>
            </div>
        </div>
    );
}