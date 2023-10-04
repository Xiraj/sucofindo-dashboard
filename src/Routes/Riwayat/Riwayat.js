import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import AppBar from "../../components/AppBar/AppBar";
import RiwayatPage from "../../pages/RiwayatPage/RiwayatPage";
import { Box } from "@mui/material";

export default function Riwayat () {
    return(
        <Box className="flex w-full">
            <Sidebar/>
            <Box className="w-full">
                <Box className="h-[3.75rem]">
                    <AppBar/>
                </Box>
                <Box className="relative bottom-5">
                    <RiwayatPage/>
                </Box>
            </Box>
        </Box>
    );
}