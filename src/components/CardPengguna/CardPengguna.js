import React from "react";
import { Box } from "@mui/material";
import DataTable from "../DataTable/DataTablePengguna";

export default function CardPengguna() {
  return (
    <Box
      className={`bg-white w-full md:w-[67.291rem] mx-auto md:h-[56.5rem] mt-5 p-5 rounded-xl`}
    >
      <Box className="flex">
        <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">
          Daftar Pengguna
        </h1>
      </Box>
      <Box className="container w-full md:w-[62.5rem] ml-2 md:ml-[2.5rem] md:pr-[2.5rem] rounded-lg mt-5 pb-2 overflow-y-auto overflow-x-hidden md:h-[48.125rem]">
        <DataTable />
      </Box>
    </Box>
  );
}
