import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTableMasuk() {
    const [data, setData] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length / recordPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    useEffect(() => {
        axios.get('https://sima-rest-api.vercel.app/api/v1/data/aset')
          .then((response) => {
            setData(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
    return (
        <div className='w-full md:w-[116rem] mx-auto overflow-y-auto overflow-x-auto'>
            <table className=''>
                <thead className='w-[66.5rem] h-[3.5rem] bg-[#F3F3F3]'>
                <tr>
                    <th className='px-4 py-2 border-l-2 border-y-2 border-y-[#E8E8E8] text-left'>No</th>
                    <th className='px-2 py-2 border-y-2 border-[#e8e8e8] text-left'>Nama Aset</th>
                    <th className='px-4 py-2 border-y-2 border-[#e8e8e8] text-left'>Tag Number</th>
                    <th className='px-4 py-2 border-y-2 border-[#e8e8e8] text-left'>Merek</th>
                    <th className='py-2 border-y-2 border-[#e8e8e8] text-left'>Tipe</th>
                    <th className='px-2 py-2 border-y-2 border-[#e8e8e8] text-left w-[8rem]'>Nomor Seri</th>
                    <th className='px-2 py-2 border-y-2 border-[#e8e8e8] text-left'>Penanggung Jawab Aset</th>
                    <th className='px-2 py-2 border-y-2 border-[#e8e8e8] text-left w-[8rem]'>Lokasi Aset</th>
                    <th className='px-2 py-2 border-y-2 border-[#e8e8e8] text-left'>Kondisi Aset</th>
                    <th className='px-2 py-2 border-y-2 border-[#e8e8e8] text-left'>Tanggal Peminjaman</th>
                    <th className='px-2 py-2 border-r-2 border-y-2 border-[#e8e8e8] text-left'>Tujuan Peminjaman</th>
                </tr>
                </thead>
                <tbody>
                    {records.map((item, index) => (
                        <tr key={index}>
                            <td className='px-4 py-2 border-l-2 border-y-2 border-y-[#E8E8E8]'>{index + 1}</td>
                            <td className='px-2 py-2 border-y-2 border-[#e8e8e8]'>{item.nama_alat}</td>
                            <td className='px-4 py-2 border-y-2 border-[#e8e8e8]'>{item.tag_number}</td>
                            <td className='px-4 py-2 border-y-2 border-[#e8e8e8] w-[10rem]'>{item.merek}</td>
                            <td className='px-2 py-2 border-y-2 border-[#e8e8e8] w-[14rem]'>{item.tipe}</td>
                            <td className='py-2 border-y-2 border-[#e8e8e8] w-[6rem]'>{item.nomor_seri}</td>
                            <td className='px-2 py-2 border-y-2 border-[#e8e8e8]'>{item.penanggung_jawab}</td>
                            <td className='px-2 py-2 border-y-2 border-[#e8e8e8] w-[8rem]'>lokasi_item</td>
                            <td className='px-2 py-2 border-y-2 border-[#e8e8e8]'>item.kondisi_item</td>
                            <td className='px-2 py-2 border-y-2 border-[#e8e8e8]'>tanggal_peminjaman</td>
                            <td className='px-2 py-2 border-r-2 border-y-2 border-[#e8e8e8]'>tujuan_peminjaman</td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTableMasuk;