import React from "react";
import PageNotFoundError from '../../assets/PageNotFound.png';


export default function PageNotFound() {
    return(
        <div className="bg-white w-full h-full">
        <div className="grid grid-rows-2 grid-flow-col justify-center items-center">
            <div className="w-[31.438rem] h-[28.875rem]">
                <img src={PageNotFoundError} alt="Page not found" />
            </div>
            <div className="grid justify-center text-center items-center gap-4 relative bottom-20">
                <div className="ml-[54px]">
                    <h1 className="mr-[60px] text-4xl font-bold text-gray-800">404</h1>
                    <p className="relative right-7 text-lg text-gray-600">Page not found</p>
                </div>
                <p className="w-[26.75rem] h-[4.875rem] text-center text-lg text-gray-600">
                    Kami tidak dapat menemukan halaman yang anda ingin akses. 
                    Segera hubungi penanggung jawab untuk mengakses SIMA Dashboard
                </p>
            </div>
        </div>
        </div>
    );
}
