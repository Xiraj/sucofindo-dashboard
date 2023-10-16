import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import AppBar from "../../components/AppBar/AppBar";
import RiwayatPage from "../../pages/RiwayatPage/RiwayatPage";
import { Box } from "@mui/material";

export default function Riwayat () {
    return(
        <Box className="flex h-full">
            <Sidebar className="fixed"/>
            <Box className="w-full">
                <Box className="z-10 fixed w-full h-[3.7rem]">
                    <AppBar/>
                </Box>
                <Box className="pt-12">
                    <RiwayatPage/>
                </Box>
            </Box>
        </Box>
    );
}