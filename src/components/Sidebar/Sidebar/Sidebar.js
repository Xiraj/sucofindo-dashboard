import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SucofindoLogo from '../../../assets/logo-sucofindo.png';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { FaFolder } from 'react-icons/fa';
import { RiFolderDownloadFill, RiFolderUploadFill, RiFolderHistoryFill } from 'react-icons/ri'
import Clock from '../../Clock/Clock';

export default function Sidebar () {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex'>
        <div className={`${open ? "w-[16rem]" : "w-[8rem]"} duration-300 h-full bg-main-color relative`}>
            <div className='flex'>
                <div className='mt-[1.5rem] ml-[1.5rem]'>
                    <img
                        alt='sucofindo-logo'
                        className='w-[7.813rem] h-[5.375rem]'
                        src={SucofindoLogo}
                    />
                </div>
                <div className='cursor-pointer mt-[4rem] ml-[4.5rem] mr-[1.5rem]'>
                    <button onClick={() => setOpen(open)}>
                        <BsArrowLeftCircleFill size={20} color='white'/>
                    </button>
                </div>
            </div>
            <div className='mt-[1.5rem] ml-[1.5rem] w-[13rem] h-[0.5px] bg-white'/>
            <ul className='ml-[1.5rem] mt-[2rem]'>
                <li className='flex'>
                    <FaFolder size={20} color='white'/>
                    <Link className='ml-[0.75rem] text-white mb-[2rem]' to='/Total-Aset'>
                        Total Aset
                    </Link>
                </li>
                <li className='flex'>
                    <RiFolderDownloadFill size={20} color='white'/>
                    <Link className='ml-[0.75rem] text-white mb-[2rem]' to='/Barang-Masuk'>
                        Barang Masuk
                    </Link>
                </li>
                <li className='flex'>
                    <RiFolderUploadFill size={20} color='white'/>
                    <Link className='ml-[0.75rem] text-white mb-[2rem]' to='/Barang-Keluar'>
                        Barang Keluar
                    </Link>
                </li>
                <li className='flex'>
                    <RiFolderHistoryFill size={20} color='white'/>
                    <Link className='ml-[0.75rem] text-white mb-[2rem]' to='/Riwayat'>
                        Riwayat
                    </Link>
                </li>
            </ul>
            <Clock/>
        </div>
    </div>
  )
}