import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import AppBar from "../../components/AppBar/AppBar";
import BarangMasukPage from "../../pages/BarangMasukPage/BarangMasukPage";

export default function BarangMasuk () {
    return(
        <Box className="flex w-full">
            <Sidebar/>
            <Box className="w-full">
                <Box className="h-[3.75rem]">
                    <AppBar/>
                </Box>
                <Box className="">
                    <BarangMasukPage/>
                </Box>
            </Box>
        </Box>
    );
}