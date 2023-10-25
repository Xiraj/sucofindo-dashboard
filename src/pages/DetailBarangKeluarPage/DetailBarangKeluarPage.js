import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function DetailBarangKeluarPage () {
    const { _id } = useParams([]);
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(`https://sima-rest-api.vercel.app/api/v1/aset/peminjaman/${_id}`);
          setData(response.data.peminjaman);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      getData();
    }, [_id]);
    return(
        <div className="max-h-full">
            <div className="relative top-[4rem]">
             <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md">
                <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Data Aset</p>
                <div className="flex flex-row ml-[2.5rem] mt-[2.2rem]">
                    {Object.keys(data).length > 0 && (
                    <div className="mb-[2.5rem]" key={data._id}>
                        <p className="text-[1.25rem] font-semibold text-[#515151]">Nama Aset</p>
                        <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                          <p>{data.id_aset.nama_alat}</p>
                        </div>
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tag Number</p>
                          <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                        <p>{data.id_aset.tag_number}</p>
                        </div>
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Merk</p>
                        <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                          <p>{data.id_aset.merek}</p>
                        </div>
                    </div>
                    )}
                    {Object.keys(data).length > 0 && (
                        <div className="ml-[5rem]" key={data._id}>
                        <p className="text-[1.25rem] font-semibold text-[#515151] ">Tipe</p>
                        <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                            <p>{data.id_aset.merek}</p>
                        </div>
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Nomor Seri</p>
                        <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                            <p>{data.id_aset.nomor_seri}</p>
                        </div>
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Penanggung Jawab Alat</p>
                        <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                            <p>{data.id_aset.penanggung_jawab}</p>
                        </div>
                    </div>
                    )}
                </div>
              </div>
              </div>
            <div className="mt-[8.5rem]">
            <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md ">
          <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Status Aset</p>
          <div className=" flex flex-row ml-[2.5rem] mt-[2.2rem]">
            {Object.keys(data).length > 0 && (
              <div className="mb-[2.5rem]" key={data.id}>
              <p className="text-[1.25rem] font-semibold text-[#515151] ">Lokasi Alat</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>{data.lokasi}</p>
                </div>
                <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Kondisi Alat</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                  <p>{data.kondisi_aset}</p>
                </div>
              </div>
            )}
            {Object.keys(data).length > 0 && (
               <div className="ml-[5rem]" key={data.id}>
               <p className="text-[1.25rem] font-semibold text-[#515151] ">Tanggal Peminjaman</p>
                 <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                   <p>{data.tanggal_peminjaman}</p>
                 </div>
               <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tujuan Peminjaman</p>
                 <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                   <p>{data.tujuan_peminjaman}</p>
                 </div>
             </div>
            )}
          </div>
        </div>
            </div>
            <div className="flex flex-row mt-[1rem] ml-[50rem] mb-[2rem]">
                <button className='bg-[#FF0404] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold mr-[2rem]'>
                    Tolak
                </button>
                <button className='bg-[#2AC43A] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold'>
                    Terima
                </button>
            </div>
        </div>
    );
}