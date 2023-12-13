import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar/Sidebar";
import AppBar from "../../components/AppBar/AppBar";
import UpdateAsetPage from "../../pages/UpdateAsetPage/UpdateAsetPage";

export default function UpdateForm () {
    return(
        <Box className="flex h-full">
            <Sidebar className="fixed"/>
            <Box className="w-full">
                <Box className="z-10 fixed w-full h-[3.7rem]">
                    <AppBar/>
                </Box>
                <Box className="mt-12 ">
                    <UpdateAsetPage/>
                </Box>
            </Box>
        </Box>
    );
}