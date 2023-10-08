import React, { useState } from 'react';
import Data from '../../Data.json';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

function DataTable() {
    const [ currentPage, setCurrentPage ] = useState(1);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(Data.length / recordPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    return (
        <Box>
            <table className='container'>
                <thead className='w-[62.5rem] h-[3.5rem] bg-[#F3F3F3]'>
                    <tr>
                        <td className='w-[1.5rem] pl-2 border-l-2 border-y-2 border-y-[#E8E8E8]'>
                            No
                        </td>
                        <td className='w-[18.625rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>
                            Nama
                        </td>
                        <td className='w-[20.625rem] border-y-2 border-[#e8e8e8]'>
                            Email
                        </td>
                        <td className='w-[20.625rem] border-r-2 border-y-2 border-[#e8e8e8]'>
                            Unit
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, index) => (
                        <tr key={index}>
                            <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{item.no}</td>
                            <td className='w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>
                                <Link to="/Detail-Barang-Masuk">
                                    {item.nama}
                                </Link>
                            </td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.email}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]'>{item.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
}

export default DataTable;