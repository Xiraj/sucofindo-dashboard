import React, { useState } from "react";
import Tabs from "../Tab/Tab";
import { Box } from "@mui/material";

export default function CardRiwayat () {
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
        {
            id: 7,
            no: 7,
            nama: 'Administrator7',
            email: 'Admin5@gmail.com',
            unit: 'Admin_Brebes7',
        },
        {
            id: 8,
            no: 8,
            nama: 'Administrator8',
            email: 'Admin6@gmail.com',
            unit: 'Admin_Brebes8',
        },
        {
            id: 9,
            no: 9,
            nama: 'Administrator9',
            email: 'Admin9@gmail.com',
            unit: 'Admin_Brebes9',
        },
        {
            id: 10,
            no: 10,
            nama: 'Administrator10',
            email: 'Admin10@gmail.com',
            unit: 'Admin_Brebes10',
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