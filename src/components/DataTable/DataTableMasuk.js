import React, { useState } from 'react';
import Data from '../../DataMasuk.json';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

function DataTableMasuk() {
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 5;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Data.slice(firstIndex, lastIndex);
    const totalRecords = Data.length;
    const totalPages = Math.ceil(totalRecords / recordPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className='w-full md:w-[107.5rem] mx-auto overflow-y-auto overflow-x-auto md:mr-[2.5rem]'>
            <table>
                <thead className='w-[66.5rem] h-[3.5rem] bg-[#F3F3F3]'>
                    <tr>
                        <td className='w-[1.5rem] pl-3 border-l-2 border-y-2 border-y-[#E8E8E8]'>
                            No
                        </td>
                        <td className='w-[58.625rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>
                            Nama Asset
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Tag Number
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Merek
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Tipe
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Nomor Seri
                        </td>
                        <td className='w-[72.625rem] border-y-2 border-[#e8e8e8]'>
                            Penanggung Jawab Aset
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Lokasi Aset
                        </td>
                        <td className='w-[68.625rem] border-y-2 border-[#e8e8e8]'>
                            Kondisi Aset
                        </td>
                        <td className='w-[69.625rem] border-y-2 border-[#e8e8e8]'>
                           Tanggal Peminjaman
                        </td>
                        <td className='w-[78.625rem] border-r-2 border-y-2 border-[#e8e8e8]'>
                            Tujuan Peminjaman
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, id) => (
                        <tr key={id}>
                            <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{item.no}</td>
                            <td className='w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>{item.nama_aset}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tag_number}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.merek}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tipe}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.nomor_seri}</td>
                            <td className='w-[50.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.penanggung_jawab_aset}</td>
                            <td className='w-[20.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.lokasi_aset}</td>
                            <td className='w-[48.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.kondisi_aset}</td>
                            <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tanggal_peminjaman}</td>
                            <td className='w-[98.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]'>{item.tujuan_peminjaman}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className='z-10'>
                <ul className= 'flex justify-center mt-7 pagination'>
                    <li className='page-item'>
                        <a 
                            className='page-link'
                            href='#'
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <ArrowBackIosSharpIcon/>
                        </a>
                    </li>
                    {pageNumbers.map((number) => (
                        <li className={`page-link ${currentPage === number ? 'active' : ''}`} key={number}>
                            <a 
                                className='page-item text-[1.1rem] m-3'
                                href='#'
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </a>
                        </li>
                    ))}
                    <li className='page-item'>
                        <a 
                            className='page-link'
                            href='#'
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <ArrowForwardIosSharpIcon/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DataTableMasuk;