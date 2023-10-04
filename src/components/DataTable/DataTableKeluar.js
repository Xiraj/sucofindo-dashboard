import React, { useState } from 'react';
import Data from '../../DataKeluar.json';

function DataTableKeluar() {
    const [ currentPage, setCurrentPage ] = useState(1);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = Data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(Data.length / recordPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    return (
        <div className='w-full md:w-[107.5rem] mx-auto overflow-y-auto overflow-x-auto md:mr-[2.5rem]'>
            <table className=''>
                <thead className='w-[66.5rem] h-[3.5rem] bg-[#F3F3F3]'>
                    <tr>
                        <td className='w-[1.5rem] pl-2 border-l-2 border-y-2 border-y-[#E8E8E8]'>
                            No
                        </td>
                        <td className='w-[58.625rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>
                            Nama Asset
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Tag Number
                        </td>
                        <td className='w-[60.625rem] border-y-2 border-[#e8e8e8]'>
                            Penanggung Jawab Aset
                        </td>
                        <td className='w-[50.625rem] border-y-2 border-[#e8e8e8]'>
                            Lokasi Aset
                        </td>
                        <td className='w-[88.625rem] border-y-2 border-[#e8e8e8]'>
                            Kondisi Aset Saat Dikembalikan
                        </td>
                        <td className='w-[69.625rem] border-y-2 border-[#e8e8e8]'>
                           Tanggal Pengembalian
                        </td>
                        <td className='w-[98.625rem] border-r-2 border-y-2 border-[#e8e8e8]'>
                            Foto Aset
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, index) => (
                        <tr key={index}>
                            <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{item.no}</td>
                            <td className='w-[18.625rem] h-[3.5rem] pl-[2rem] border-y-2 border-[#e8e8e8]'>{item.nama_aset}</td>
                            <td className='w-[18.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tag_number}</td>
                            <td className='w-[50.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.penanggung_jawab_aset}</td>
                            <td className='w-[20.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.lokasi_aset}</td>
                            <td className='w-[48.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.kondisi_aset_saat_dikembalikan}</td>
                            <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tanggal_pengembalian}</td>
                            <td className='w-[98.625rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8]'>{item.foto_aset}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTableKeluar;