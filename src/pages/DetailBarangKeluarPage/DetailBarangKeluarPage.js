import React from "react";
import CardDataBarangKeluar from "../../components/CardDataBarangKeluar";
import CardStatusBarangKeluar from "../../components/CardStatusBarangKeluar";
import { useParams } from 'react-router-dom';

export default function DetailBarangKeluarPage () {
    const { id } = useParams();
    return(
        <div className="max-h-full">
            <div className="relative top-[4rem]">
                <CardDataBarangKeluar/>
            </div>
            <div className="mt-[8.5rem]">
                <CardStatusBarangKeluar/>
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