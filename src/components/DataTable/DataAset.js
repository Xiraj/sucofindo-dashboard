import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { BsFillPlusSquareFill, BsSearch } from 'react-icons/bs';
import PopupForm from '../PopUp/PopUp';

function DataAset() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordPerPage, setRecordPerPage] = useState(5);
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Array.isArray(filteredData) ? filteredData.slice(firstIndex, lastIndex) : [];
    const totalRecords = Array.isArray(filteredData) ? filteredData.length : 0;
    const totalPages = Math.ceil(totalRecords / recordPerPage);

    const getData = async () => {
        try {
            const response = await axios.get('https://sima-rest-api.vercel.app/api/v1/data/aset', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
              },
            })
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
        const filtered = data.filter((item) => {
            if (item && item.nama_alat) {
                return item.nama_alat.toLowerCase().includes(searchTerm);
            }
            return false;
        });
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
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data);
    };
    
    return (
        <div className='w-full md:w-[107.5rem] mx-auto overflow-y-auto overflow-x-auto md:mr-[2.5rem]'>
            <div className='grid justify-items-stretch mb-3'>
                <div className='flex justify-start'>
                    <div className='flex justify-start relative top-6'>
                        <input 
                            className='bg-transparent border rounded-lg border-black w-[150px] h-[30px] sm:w-[250px] focus:outline-none ' 
                            type='text' 
                            placeholder='   Masukkan Nama Aset' 
                            onChange={Filter}
                        />
                        <BsSearch className='relative right-7 top-2' size={15}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button
                    className='bg-[#2AC43A] w-[9.4rem] h-[2.875rem] rounded-lg'
                    onClick={() => setIsPopupOpen(true)}
                    >
                    <div className='flex justify-between'>
                        <p className='flex justify-between text-white font-semibold pl-3 pt-1'>
                        Tambah Aset
                        </p>
                        <BsFillPlusSquareFill className='w-[2rem] h-[2rem] text-white pr-3' size={24} />
                    </div>
                    </button>
                </div>

                <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onSubmit={handleFormSubmit} />
            </div>
            <table>
                
                <thead className='w-[66.5rem] h-[3.5rem] bg-[#F3F3F3]'>
                    <tr>
                        <td className='w-[1.5rem] pl-3 border-l-2 border-y-2 border-y-[#E8E8E8]'>
                            No
                        </td>
                        <td className='w-[58.625rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>
                            Nama Aset
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Tag Number
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Serial Number
                        </td>
                        <td className='w-[40.625rem] border-y-2 border-[#e8e8e8]'>
                            Merek
                        </td>
                        <td className='w-[40.625rem] border-y-2 border-[#e8e8e8]'>
                            Tipe
                        </td>
                        <td className='w-[40.625rem] border-y-2 border-[#e8e8e8]'>
                            Lokasi Aset
                        </td>
                        <td className='w-[32.625rem] border-y-2 border-[#e8e8e8]'>
                            Penanggung Jawab
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, id) => (
                        <tr key={id}>
                            <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{id+firstIndex+1}</td>
                            <td className='w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>{item.nama_alat}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tag_number}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.nomor_seri}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.merek}</td>
                            <td className='w-[50.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tipe}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.lokasi_aset}</td>
                            <td className='w-[50.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.penanggung_jawab}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className='z-10'>
                <ul className= 'grid justify-items-stretch mt-5 mb-3 pagination'>
                    <div className='justify-self-start'>
                        <label className='flex relative top-6'>
                            <select className='border border-black rounded-lg cursor-pointer' value={recordPerPage} onChange={handleItemsPerPageChange}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <p className='ml-4'>
                                Menampilkan Data Aset
                            </p>
                        </label>
                    </div>
                    <div className='flex justify-center'>
                        <li className='page-item'>
                            <a 
                                className='cursor-pointer page-link'
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                <ArrowBackIosSharpIcon/>
                            </a>
                        </li>
                        {pageNumbers
                            .filter((number) => number >= currentPage && number < currentPage + 5)
                            .map((number) => (
                                <li className={`cursor-pointer page-link ${currentPage === number ? 'active' : ''}`} key={number}>
                                    <a 
                                        className='hover:border-2 hover:border-main-color rounded-xl hover:w-4 page-item text-[1.1rem] p-2'
                                        onClick={() => handlePageChange(number)}
                                    >
                                        {number}
                                    </a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a 
                                className='cursor-pointer page-link'
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                <ArrowForwardIosSharpIcon/>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default DataAset;