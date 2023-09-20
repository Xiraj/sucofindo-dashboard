import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import User from "../../components/User/User";
import BarangKeluarPage from "../../pages/BarangKeluarPage/BarangKeluarPage";

export default function BarangKeluar () {
    return(
        <div className="flex w-full">
            <Sidebar/>
            <div className="w-full">
                <div className="h-[3.75rem]">
                    <User/>
                </div>
                <div className="">
                    <BarangKeluarPage/>
                </div>
            </div>
        </div>
    );
}