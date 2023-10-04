import React, { useState } from "react";
import { Box } from "@mui/material";
import DataTable from "../DataTable/DataTable";

export default function CardPengguna () {
    const data = [
        {
            id: 1,
            no: 1,
            nama: 'Administrator',
            email: 'Admin1@gmail.com',
            unit: 'Admin_Brebes',
        },
{
            id: 2,
            no: 2,
            nama: 'Administrator2',
            email: 'Admin2@gmail.com',
            unit: 'Admin_Brebes2',
        },
        {
            id: 3,
            no: 3,
            nama: 'Administrator3',
            email: 'Admin3@gmail.com',
            unit: 'Admin_Brebes3',
        },
        {
            id: 4,
            no: 4,
            nama: 'Administrator4',
            email: 'Admin4@gmail.com',
            unit: 'Admin_Brebes4',
        },
        {
            id: 5,
            no: 5,
            nama: 'Administrator5',
            email: 'Admin5@gmail.com',
            unit: 'Admin_Brebes5',
        },
        {
            id: 6,
            no: 6,
            nama: 'Administrator6',
            email: 'Admin6@gmail.com',
            unit: 'Admin_Brebes6',
        },
    ];
    
    const columns = [
        { 
            Header: "No", 
            accessor: "no",
            selector: row => row.no,
        },
        {   Header: "Nama", 
            accessor: "nama",
            selector: row => row.nama,
            className: 'custom-header',
        },
        {   Header: "Email",
            accessor: "email",
            selector: row => row.email, 
        },
        {   Header: "Unit", 
            accessor: "unit",
            selector: row => row.unit,
        },
    ];
    const [ open ] = useState(true);

    return(
        <Box className={`bg-white w-full md:w-[67.291rem] mx-auto md:h-[36.5rem] mt-5 p-5 rounded-xl`}>
            <Box className="flex">
                <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Daftar Pengguna</h1>
            </Box>
            <Box className="container w-full md:w-[62.5rem] ml-2 md:ml-[2.5rem] rounded-lg mt-5 pb-2 overflow-y-auto overflow-x-hidden md:h-[450px]">
                <DataTable data={data} columns={columns} />
            </Box>
        </Box>
    );
}