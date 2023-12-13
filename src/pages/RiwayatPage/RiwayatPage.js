import React from "react";
import CardRiwayat from "../../components/CardRiwayat/CardRiwayat";
import { Box } from "@mui/material";

export default function RiwayatPage() {
  return (
    <Box className="bg-[#f3f3f3] w-full max-h-full">
      <Box className="relative bottom-4">
        <CardRiwayat />
      </Box>
    </Box>
  );
}
