import React from "react";
import CardBarangMasuk from "../../components/CardBarangMasuk";

export default function BarangMasukPage () {
    return(
        <div className="max-h-full">
            <div className="relative top-[3rem]">
              <CardBarangMasuk/>
            </div>
            <div className="flex justify-between mt-[1rem] ml-[50rem] mb-[2rem] relative right-16">
                <button className='bg-[#FF0404] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold'>
                    Tolak
                </button>
                <button className='bg-[#2AC43A] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold'>
                    Terima
                </button>
            </div>
        </div>
    );
}