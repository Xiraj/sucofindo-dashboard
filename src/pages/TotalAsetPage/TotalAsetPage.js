import React, { useState } from "react";
import { Box } from "@mui/material";
import CardAset from "../../components/CardAset/CardAset";
import CardPengguna from "../../components/CardPengguna/CardPengguna";

export default function TotalAsetPage () {
    const [open] = useState(true);
    return(
        <Box className="w-full h-full">
            <Box className={`${ open ? 'pt-[2rem] ' : 'justify-center items-center' }`}>
                <CardAset />
            </Box>
            <Box className={`${ open ? 'pb-[2rem] ' : 'justify-center items-center' }`}>
                <CardPengguna/>
            </Box>
        </Box>
    );
}