import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import TotalAsetPage from "../../pages/TotalAsetPage/TotalAsetPage";
import AppBar from "../../components/AppBar/AppBar";

export default function TotalAset () {
    return(
        <Box className="flex h-full">
            <Sidebar className="fixed"/>
            <Box className="w-full">
                <Box className="z-10 fixed w-full h-[3.7rem]">
                    <AppBar/>
                </Box>
                <Box className="mt-3 ">
                    <TotalAsetPage/>
                </Box>
            </Box>
        </Box>
    );
}