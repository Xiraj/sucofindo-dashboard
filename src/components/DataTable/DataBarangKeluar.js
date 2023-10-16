import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { BsSearch } from 'react-icons/bs';

export default function DataTableKeluar() {
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
            const response = await axios.get("https://sima-rest-api.vercel.app/api/v1/aset/listpinjam")
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
        <div className='w-full md:w-[116rem] mx-auto overflow-y-auto overflow-x-auto'>
            <div className='flex justify-start mb-4'>
                <div className='flex'>
                    <input 
                        className='bg-transparent border rounded-lg border-black w-[150px] h-[30px] sm:w-[250px] focus:outline-none ' 
                        type='text' 
                        placeholder='   Masukkan Nama Aset' 
                        onChange={Filter}
                    />
                    <BsSearch className='relative right-7 top-2' size={15}/>
                </div>
            </div>
            <table>
                <thead className='w-[86.5rem] h-[3.5rem] font-bold bg-[#F3F3F3]'>
                    <tr>
                        <th className='w-[18.625rem] pl-3 py-2 border-l-2 border-y-2 border-y-[#E8E8E8] text-left'>No</th>
                        <th className='w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Nama Aset</th>
                        <th className='w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Tag Number</th>
                        <th className='w-[4.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Merek</th>
                        <th className='w-[18.625rem] border-y-2 border-[#e8e8e8] text-left'>Tipe</th>
                        <th className='w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Nomor Seri</th>
                        <th className='w-[80.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Penanggung Jawab Aset</th>
                        <th className='w-[50.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Lokasi Aset</th>
                        <th className='w-[48.625rem] border-y-2 border-[#e8e8e8] text-left'>Kondisi Aset</th>
                        <th className='w-[58.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Tanggal Peminjaman</th>
                        <td className='w-[48.625rem] border-y-2 border-[#e8e8e8]'>Tujuan Peminjaman</td>
                        <td className='w-[78.625rem] border-r-2 border-y-2 border-[#e8e8e8]'>Disetujui Oleh</td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, index) => (
                        <tr key={index}>
                            <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{index+1+firstIndex}</td>
                            <td className='w-[78.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.nama_alat}</td>
                            <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tag_number}</td>
                            <td className='w-[54.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>{item.merek}</td>
                            <td className='w-[38.625rem] border-y-2 border-[#e8e8e8] text-left'>{item.tipe}</td>
                            <td className='w-[20.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>{item.nomor_seri}</td>
                            <td className='w-[80.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.penanggung_jawab}</td>
                            <td className='w-[40.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.lokasi_aset}</td>
                            <td className='w-[48.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.kondisi_aset}</td>
                            <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tanggal_peminjaman}</td>
                            <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tujuan_peminjaman}</td>
                            <td className='w-[68.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]'>{item.disetujui}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className='z-10'>
                <ul className= 'grid justify-items-stretch pagination'>
                    <div className='justify-self-start'>
                        <label className='flex relative top-6'>
                            <select className='border border-black rounded-lg cursor-pointer' value={recordPerPage} onChange={handleItemsPerPageChange}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <p className='ml-4'>
                                Menampilkan Riwayat Barang Masuk
                            </p>
                        </label>
                    </div>
                    <div className='flex justify-center '>
                        <li className='page-item'>
                            <a 
                                className='page-link cursor-pointer'
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
                                        className='page-item text-[1.1rem] m-4'
                                        onClick={() => handlePageChange(number)}
                                    >
                                        {number}
                                    </a>
                                </li>
                            ))
                        }
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
        </div>
    );
}
