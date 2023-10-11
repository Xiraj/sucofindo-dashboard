import React, { useState } from "react";
import { Box } from "@mui/material";
import TabBarangMasuk from "../TabBarangMasuk";

export default function CardBarangMasuk () {
    const [ open ] = useState(true);

    return(
        <Box className={`${open ? 'w-[67.291rem] h-[152vh]':''} bg-white ml-[2.5rem] mt-[3.5rem] rounded-xl`}>
            <Box className="flex">
                <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Data Barang Masuk</h1>
            </Box>
            <Box className='ml-10 mt-2 '>
                <TabBarangMasuk/>
            </Box>
        </Box>
    );
}