import React, { useState } from "react";
import { Box } from "@mui/material";
import CardAset from "../../components/CardAset/CardAset";

export default function HomePage () {
    const [open] = useState(true);
    return(
        <Box className="bg-[#f3f3f3] w-full h-screen ">
            <Box className="relative top-20">
                <CardAset/>
            </Box>
        </Box>
    );
}