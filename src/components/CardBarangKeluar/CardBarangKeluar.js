import React, { useState } from "react";
import { Box } from "@mui/material";
import TabBarangKeluar from "../TabBarangKeluar";

export default function CardBarangKeluar () {
    const [ open ] = useState(true);

    return(
        <Box className={`${open ? 'w-[67.291rem] h-[102vh]':''} bg-white ml-[2.5rem] mt-[3.5rem] rounded-xl`}>
            <Box className="flex">
                <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Data Barang Keluar</h1>
            </Box>
            <Box className='ml-10 mt-2 '>
                <TabBarangKeluar/>
            </Box>
        </Box>
    );
}