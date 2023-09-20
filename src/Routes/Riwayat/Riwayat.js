import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import User from "../../components/User/User";
import RiwayatPage from "../../pages/RiwayatPage/RiwayatPage";

export default function Riwayat () {
    return(
        <div className="flex w-full">
            <Sidebar/>
            <div className="w-full">
                <div className="h-[3.75rem]">
                    <User/>
                </div>
                <div className="">
                    <RiwayatPage/>
                </div>
            </div>
        </div>
    );
}