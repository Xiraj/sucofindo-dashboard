import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CardDataBarangKeluar() {
  const [data, setData] = useState([]);

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

  return (
    <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md">
      <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Data Aset</p>
      <div className="flex flex-row ml-[2.5rem] mt-[2.2rem]">
        {data.map((item) => (
          <div className="mb-[2.5rem]" key={item.id}>
            <p className="text-[1.25rem] font-semibold text-[#515151]">Nama Aset</p>
            <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
              <p>{item.id_aset.nama_alat}</p>
            </div>
            <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tag Number</p>
            <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
              <p>{item.id_aset.tag_number}</p>
            </div>
            <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Merk</p>
            <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
              <p>{item.id_aset.merek}</p>
            </div>
          </div>
          
        ))}
        {data.map((item) => (
            <div className="ml-[5rem]" key={item.id}>
            <p className="text-[1.25rem] font-semibold text-[#515151] ">Tipe</p>
              <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                <p>{item.id_aset.merek}</p>
              </div>
            <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Nomor Seri</p>
              <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                <p>{item.id_aset.nomor_seri}</p>
              </div>
            <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Penanggung Jawab Alat</p>
            <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                <p>{item.id_aset.penanggung_jawab}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
