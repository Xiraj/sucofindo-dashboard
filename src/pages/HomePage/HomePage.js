import React, { useState } from "react";
import { Box } from "@mui/material";
import CardHome from "../../components/CardHome/CardHome";
import CardPengguna from "../../components/CardPengguna/CardPengguna";

export default function HomePage () {
    const [open] = useState(true);
    
    return(
        <Box className="w-full h-full pt-8">
            <Box className={`${ open ? 'pt-[2rem] ' : 'justify-center items-center' }`}>
                <CardHome />
            </Box>
            <Box className={`${ open ? 'pb-[2rem] ' : 'justify-center items-center' }`}>
                <CardPengguna/>
            </Box>
        </Box>
    );
}