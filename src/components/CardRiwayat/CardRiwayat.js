import React, { useState } from "react";
import Tabs from "../TabRiwayat/TabRiwayat";
import { Box } from "@mui/material";

export default function CardRiwayat () {
    const [ open ] = useState(true);
    return(
        <Box className={`${open ? 'w-[67.291rem] h-[102vh]':''} bg-white ml-[2.5rem] mt-[3.5rem] rounded-xl`}>
            <Box className="flex">
                <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Riwayat</h1>
            </Box>
            <Box className='ml-10 mt-2 '>
                <Tabs/>
            </Box>
        </Box>
    );
}