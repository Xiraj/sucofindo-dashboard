import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Notification from "../Notification/Notification";
import { MdWavingHand } from "react-icons/md";
// import Clock from "../Clock/Clock";
import { Badge } from "@mui/material";

export default function User () {
    return(
        <div className="bg-[#ffff] w-full h-12">
            <div className="flex justify-between m-[1.5rem] ">
                <div className="flex gap-4 ml-[1rem] pt-3">
                    <h1 className="text-main-color font-extrabold ">Selamat Datang</h1>
                    <MdWavingHand color="#E9B824" size={24}/>
                </div>
                <div className="flex justify-end">
                    {/* <div className="mr-16">
                        <Clock/>
                    </div> */}
                    <div className="mr-[2.5rem] pt-3 cursor-pointer">
                        <Badge badgeContent={4} color="primary">
                            <Notification size={20} />
                        </Badge>
                    </div>
                    <div className="flex">
                        <div className="text-main-color font-normal mr-[0.9rem] mt-3 border-r-2 border-r-main-color"/>
                        <h1 className="text-main-color mr-[1rem] mt-3 ">Nurul</h1>
                    </div>
                    <div className="mr-[1.5rem] mt-3">
                        <FaUserCircle color="#4E73DF" size={26}/>
                    </div>
                </div>
            </div>
        </div>
    );
}