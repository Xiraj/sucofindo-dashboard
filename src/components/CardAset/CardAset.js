import React from "react";
import { Box } from "@mui/material";
import DataAset from "../DataTable/DataAset";

export default function CardAset () {
    return(
        <Box className="bg-white w-full md:w-[67.291rem] mx-auto md:h-[94.5rem] mt-12 p-5 rounded-xl">
            <Box className="flex">
                <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Total Aset</h1>
            </Box>
            <Box className='md:w-[63rem] overflow-x-auto pl-10 pt-3'>
                <DataAset/>
            </Box>
        </Box>
    );
}