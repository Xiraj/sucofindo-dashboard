import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from "@mui/material";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { BsSearch } from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';
import NoData from '../../assets/NoData.png';

export default function DataTablePengguna() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordPerPage, setRecordPerPage] = useState(5);
    const [loading, setLoading] = useState(true);
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Array.isArray(filteredData) ? filteredData.slice(firstIndex, lastIndex) : [];
    const totalRecords = Array.isArray(filteredData) ? filteredData.length : 0;
    const totalPages = Math.ceil(totalRecords / recordPerPage);

    const getData = async (role) => {
      try {
          const response = await axios.get(`https://sima-rest-api.vercel.app/api/v1/auth/users?=role${role}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
          });
          
          const filteredData = response.data.filter(item => item.role === role);
          setData(filteredData);
          setFilteredData(filteredData);
      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
          setLoading(false);
      }
  };

    useEffect(() => {
        getData('user');
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
        setCurrentPage(1);
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
            {
              loading ? (
                <div className="text-center mt-4">
                  <ThreeDots type="ThreeDots" color="#555555" height={50} width={50} />
                </div>
              ) : (
                <> {totalRecords == 0 ? (
                    <div className="flex flex-row justify-start items-center mt-4">
                        <img className='w-[40rem] h-[40rem]' src={NoData} alt='No-Data-Access'/>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-[1.5rem] font-semibold'>No Data Available</h1>
                            <p className='text-[1rem] font-normal'>Tidak Ada Data Yang Dapat Ditampilkan </p>
                        </div>
                    </div>
                ) : (
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
                                Tanggal Terdaftar 
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((item, index) => (
                            <tr key={index+1}>
                                <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{index+firstIndex+1}</td>
                                <td className='w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>{item.username}</td>
                                <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.email}</td>
                                <td className='w-[18.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]'>
                                    {new Date(item.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
                </>
                
              )
            }
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
                                    className='hover:border-main-color hover:rounded-xl hover:border-2 hover:w-2 page-item hover:text-center text-[1.1rem] p-2'
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