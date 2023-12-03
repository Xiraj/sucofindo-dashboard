import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { ThreeDots } from 'react-loader-spinner';

export default function DataTableKeluarPending() {
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

    const getData = async (status) => {
        try {
            const response = await axios.get(`https://sima-rest-api.vercel.app/api/v1/aset/listPeminjam?status=${status}`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
              },
            });
            
            console.log("Peminjaman", response.data.peminjaman);
            
            const filteredData = response.data.peminjaman.filter(item => item.status === status);
            setData(filteredData);
            setFilteredData(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
    };
    
    useEffect(() => {
        getData('Pending');
    }, []);

    const Filter = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = data.filter((item) => item.nama_alat.toLowerCase().includes(searchTerm));
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
        <div className='w-full md:w-[127.5rem] mx-auto overflow-y-auto overflow-x-auto md:mr-[2.5rem]'>
             <div className='flex justify-start mt-4 mb-4'>
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
            {
                loading ? (
                  <div className="text-center mt-4">
                    <ThreeDots type="ThreeDots" color="#555555" height={50} width={50} />
                  </div>
                ) : (
                  <>
                    {totalRecords == 0 ? (
                      <div className="mt-4">
                        Tidak ada data.
                      </div>
                    ) : (
                      <table>
                    <thead className='w-[86.5rem] h-[3.5rem] font-bold bg-[#F3F3F3]'>
                        <tr>
                            <th className='w-[18.625rem] pl-3 py-2 border-l-2 border-y-2 border-y-[#E8E8E8] text-left'>No</th>
                            <th className='w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Nama Aset</th>
                            <th className='w-[48.625rem] pl-[2rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Tag Number</th>
                            <th className='w-[4.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Merek</th>
                            <th className='w-[18.625rem] border-y-2 border-[#e8e8e8] text-left'>Tipe</th>
                            <th className='w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Nomor Seri</th>
                            <th className='w-[80.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Penanggung Jawab Aset</th>
                            <th className='w-[98.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Lokasi Aset</th>
                            <th className='w-[48.625rem] border-y-2 border-[#e8e8e8] text-left'>Kondisi Aset</th>
                            <th className='w-[58.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>Tanggal Peminjaman</th>
                            <td className='w-[48.625rem] border-y-2 border-[#e8e8e8]'>Tujuan Peminjaman</td>
                            <td className='w-[48.625rem] border-r-2 border-y-2 border-[#e8e8e8]'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((item, index) => (
                            <tr key={index}>
                                <td className='w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]'>{index+1+firstIndex}</td>
                                <Link to={`/Detail-Barang-Keluar/${item._id}`}>
                                  <td className='w-[108.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.id_aset.nama_alat}</td>
                                </Link>
                                <td className='w-[58.625rem] pl-[2rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.id_aset.tag_number}</td>
                                <td className='w-[54.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>{item.id_aset.merek}</td>
                                <td className='w-[38.625rem] border-y-2 border-[#e8e8e8] text-left'>{item.id_aset.tipe}</td>
                                <td className='w-[20.625rem] py-2 border-y-2 border-[#e8e8e8] text-left'>{item.id_aset.nomor_seri}</td>
                                <td className='w-[80.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.id_aset.penanggung_jawab}</td>
                                <td className='w-[98.625rem] h-[3.5rem] pl-[1.25rem] border-y-2 border-[#e8e8e8]'>{item.id_aset.lokasi_aset}</td>
                                <td className='w-[48.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.kondisi_aset}</td>
                                <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tanggal_peminjaman}</td>
                                <td className='w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]'>{item.tujuan_peminjaman}</td>
                                <td className='w-[48.625rem] h-[3.5rem] text-yellow-500 border-r-2 border-y-2 border-[#e8e8e8]'>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    )}
                  </>
                )
            }
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
