import React from "react";

export default function CardDataBarangMasuk () {
    return(
        <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md">
          <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Data Aset</p>
          <div className=" flex flex-row ml-[2.5rem] mt-[2.2rem]">
            <div className="mb-[2.5rem]">
              <p className="text-[1.25rem] font-semibold text-[#515151] ">Nama Alat</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>Dummy</p>
                </div>
                <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tag Number</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>Dummy</p>
                </div>
              </div>
              <div className="ml-[5rem]">
                <p className="text-[1.25rem] font-semibold text-[#515151] ">Penanggung Jawab Alat</p>
                  <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>Dummy</p>
                </div>
              </div>
          </div>
        </div>
    );
}