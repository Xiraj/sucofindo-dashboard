import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Data from '../../DataPengguna.json';
import { Box } from "@mui/material";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { BsSearch } from 'react-icons/bs';

export default function DataTablePengguna() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordPerPage, setRecordPerPage] = useState(5); // Initially set to 5
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Array.isArray(filteredData) ? filteredData.slice(firstIndex, lastIndex) : [];
    const totalRecords = Array.isArray(filteredData) ? filteredData.length : 0;
    const totalPages = Math.ceil(totalRecords / recordPerPage);

    const getData = async () => {
        try {
            const response = await axios.get("https://sima-rest-api.vercel.app/api/v1/auth/users")
                .then(
                    response=> {
                        setData(response.data.data)
                        setFilteredData(response.data.data)
                });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

     const Filter = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = data.filter((item) => item.username.toLowerCase().includes(searchTerm));
        setFilteredData(filtered);
        setCurrentPage(1); 
    }

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    const handleItemsPerPageChange = (event) => {
        const newItemsPerPage = parseInt(event.target.value, 10);
        setRecordPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to the first page when changing the number of items per page
    };
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <Box>
            <div className='flex justify-end mb-4'>
                <div className='flex'>
                    <input 
                        className='bg-transparent border rounded-lg border-black w-[150px] h-[30px] sm:w-[250px] focus:outline-none ' 
                        type='text' 
                        placeholder='   Masukkan username' 
                        onChange={Filter}
                    />
                    <BsSearch className='relative right-7 top-2' size={15}/>
                </div>
            </div>
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
                        <tr key={index+1}>
                            <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{index+firstIndex+1}</td>
                            <td className='w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>{item.username}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.email}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]'>{item.unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className='z-10'>
                <ul className= 'grid justify-items-stretch  pagination'>
                    <div className='justify-self-start'>
                        <label className='flex relative top-6'>
                            <select className='border border-black rounded-lg cursor-pointer' value={recordPerPage} onChange={handleItemsPerPageChange}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <p className='ml-4'>
                                Menampilkan data pengguna
                            </p>
                        </label>
                    </div>
                    <div className='flex justify-end'>
                        <li className='page-item'>
                            <a 
                                className='page-link cursor-pointer'
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                <ArrowBackIosSharpIcon/>
                            </a>
                        </li>
                        {pageNumbers.map((number) => (
                            <li className={`cursor-pointer page-link ${currentPage === number ? 'active' : ''}`} key={number}>
                                <a 
                                    className='page-item text-[1.1rem] m-4'
                                    onClick={() => handlePageChange(number)}
                                >
                                    {number}
                                </a>
                            </li>
                        ))}
                        <li className='page-item'>
                            <a 
                                className='page-link cursor-pointer '
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                <ArrowForwardIosSharpIcon/>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </Box>
    );
}