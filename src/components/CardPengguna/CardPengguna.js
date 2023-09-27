import React, { useState } from "react";
import DataTable from "react-data-table-component";

export default function CardPengguna () {
    const columns = [
        {
            id: 1,
            name: 'No',
            selector: row => row.no,
            sortable: true,
        },
        {
            id: 2,
            name: 'Nama',
            selector: row => row.name,
            sortable: true,
        },
        {
            id: 3,
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            id: 4,
            name: 'Unit',
            selector: row => row.unit,
            sortable: true,
        },
    ];
    const data = [
        {
            id: 1,
            no: 1,
            name: 'Administrator',
            email: 'Admin1@gmail.com',
            unit: 'Admin_Brebes',
        },
        {
            id: 2,
            no: 2,
            name: 'Administrator2',
            email: 'Admin2@gmail.com',
            unit: 'Admin_Brebes2',
        },
        {
            id: 3,
            no: 3,
            name: 'Administrator3',
            email: 'Admin3@gmail.com',
            unit: 'Admin_Brebes3',
        },
        {
            id: 4,
            no: 4,
            name: 'Administrator4',
            email: 'Admin4@gmail.com',
            unit: 'Admin_Brebes4',
        },
        {
            id: 5,
            no: 5,
            name: 'Administrator5',
            email: 'Admin5@gmail.com',
            unit: 'Admin_Brebes5',
        },
        {
            id: 6,
            no: 6,
            name: 'Administrator6',
            email: 'Admin6@gmail.com',
            unit: 'Admin_Brebes6',
        },
    ];
    const customStyles = {
        rows: {
          style: {
            backgroundColor: 'white',
          },
        },
        headCells: {
          style: {
            backgroundColor: '#E8E8E8',
            color: 'black',
          },
        },
        cells: {
          style: {
            backgroundColor: 'white',
          },
        },
      };
    const [ open ] = useState(true);

    return(
        <div className={`${open ? 'w-[67.291rem] h-[21.5rem]':'w-[97.291rem] h-[21.5rem]'} bg-white ml-[2.5rem] mt-[3.5rem] rounded-xl`}>
            <div className="flex">
                <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Daftar Pengguna</h1>
                <input className="border-black"></input>
            </div>
            <div className="container w-[62.5rem] ml-[2.5rem] rounded-lg mt-5 overflow-y-auto overflow-x-hidden h-[250px]">
                <DataTable  columns={columns} customStyles={customStyles} data={data}></DataTable>
            </div>
        </div>
    );
}