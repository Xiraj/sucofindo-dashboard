import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CardStatusBarangKeluar () {
  const [data,setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://sima-rest-api.vercel.app/api/v1/aset/listpinjam");
        setData(response.data.peminjaman);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
    }, []);

    return(
        <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md ">
          <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Status Aset</p>
          <div className=" flex flex-row ml-[2.5rem] mt-[2.2rem]">
            {data.map((item) => (
              <div className="mb-[2.5rem]" key={item.id}>
              <p className="text-[1.25rem] font-semibold text-[#515151] ">Lokasi Alat</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>{item.lokasi}</p>
                </div>
                <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Kondisi Alat</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                  <p>{item.kondisi_aset}</p>
                </div>
              </div>
            ))}
            {data.map((item) => (
               <div className="ml-[5rem]" key={item.id}>
               <p className="text-[1.25rem] font-semibold text-[#515151] ">Tanggal Peminjaman</p>
                 <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                   <p>{item.tanggal_peminjaman}</p>
                 </div>
               <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tujuan Peminjaman</p>
                 <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                   <p>{item.tujuan_peminjaman}</p>
                 </div>
             </div>
            ))}
          </div>
        </div>
    );
}