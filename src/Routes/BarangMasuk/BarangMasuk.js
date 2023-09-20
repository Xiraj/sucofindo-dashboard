import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import User from "../../components/User/User";
import BarangMasukPage from "../../pages/BarangMasukPage/BarangMasukPage";

export default function BarangMasuk () {
    return(
        <div className="flex w-full">
            <Sidebar/>
            <div className="w-full">
                <div className="h-[3.75rem]">
                    <User/>
                </div>
                <div className="">
                    <BarangMasukPage/>
                </div>
            </div>
        </div>
    );
}