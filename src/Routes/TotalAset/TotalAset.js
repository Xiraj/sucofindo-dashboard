import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import TotalAsetPage from "../../pages/TotalAsetPage/TotalAsetPage";
import User from "../../components/User/User";

export default function TotalAset () {
    return(
        <div className="flex w-full">
            <Sidebar/>
            <div className="w-full">
                <div className="h-[3.75rem]">
                    <User/>
                </div>
                <div className="">
                    <TotalAsetPage/>
                </div>
            </div>
        </div>
    );
}