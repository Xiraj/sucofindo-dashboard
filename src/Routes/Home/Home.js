import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import HomePage from "../../pages/HomePage/HomePage";
import AppBar from "../../components/AppBar/AppBar";

export default function Home () {
    return(
        <Box className="flex h-full">
            <Sidebar className="fixed"/>
            <Box className="w-full">
                <Box className="z-10 fixed w-full h-[3.7rem]">
                    <AppBar/>
                </Box>
                <Box className="mt-3">
                    <HomePage/>
                </Box>
            </Box>
        </Box>
    );
}