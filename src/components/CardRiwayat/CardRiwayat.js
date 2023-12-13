import React from "react";
import Tabs from "../TabRiwayat/TabRiwayat";
import { Box } from "@mui/material";

export default function CardRiwayat() {
  return (
    <Box className="bg-white w-full md:w-[67.291rem] mx-auto md:h-[94.5rem] mt-12 p-5 rounded-xl">
      <Box className="flex">
        <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Riwayat</h1>
      </Box>
      <Box className="ml-10 mt-2 ">
        <Tabs />
      </Box>
    </Box>
  );
}
