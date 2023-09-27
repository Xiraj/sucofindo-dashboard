import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SucofindoLogo from '../../../assets/logo-sucofindo.png';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { FaFolder } from 'react-icons/fa';
import { RiFolderDownloadFill, RiFolderUploadFill, RiFolderHistoryFill } from 'react-icons/ri'

export default function Sidebar () {
  const [open, setOpen] = useState(true);
  const menuItems = [
    {   icon: <FaFolder 
                className={`${!open && 'cursor-pointer ml-3 w-[8rem]'}`} 
                color='white' size={`${ open ? 20 : 26 }`} 
        />, 
        to: '/Total-Aset', label: 'Total Aset'
    },
    {   icon: <RiFolderDownloadFill
                className={`${!open && 'cursor-pointer ml-3 w-[8rem]'}`} 
                color='white' size={`${ open ? 20 : 28 }`} 
        />, 
        to: '/Barang-Masuk', label: 'Barang Masuk'
    },
    {   icon: <RiFolderUploadFill
                className={`${!open && 'cursor-pointer ml-3 w-[8rem]'}`} 
                color='white' size={`${ open ? 20 : 28 }`} 
        />, 
        to: '/Barang-Keluar', label: 'Barang Keluar'
    },
    {   icon: <RiFolderHistoryFill
            className={`${!open && 'cursor-pointer ml-1 w-[8rem]'}`} 
            color='white' size={`${ open ? 20 : 28 }`} 
        />, 
        to: '/Riwayat', label: 'Riwayat'
    },
  ];
  return (
    <aside className='flex z-10'>
      <div className={`${ open ? "w-[16rem]" : "w-[8rem]" } duration-300 bg-main-color`}>
        <div className='flex'>
          <div className='mt-[1.5rem] ml-[1.5rem]'>
            <img
              alt='sucofindo-logo'
              className='w-[7.813rem] h-[5.375rem]'
              src={SucofindoLogo}
            />
          </div>
          <div className='cursor-pointer mt-[4rem] ml-[4.5rem] mr-[1.5rem]'>
            <button>
              <BsArrowLeftCircleFill
                color='white'
                className={`${ open ? "rotate-0" : "rotate-180" } ${open ? "" : "relative"} ${ open ? "" : "right-12" }`}
                onClick={() => setOpen(!open)}
                size={`${open ? 24 : 24 }`}
              />
            </button>
          </div>
        </div>
        <div className={
          ` ${ open ? 'mt-[1.5rem] ml-[1.5rem] w-[13rem] h-[0.031rem] bg-white' 
          : 'mt-[0.5rem] ml-[0.5rem] w-[7rem] h-[0.031rem] bg-white' }`}
        />
        <ul className='ml-[1.5rem] mt-[2rem]'>
          {menuItems.map((item, i) => (
            <li key={i} className='flex '>
              {item.icon}
              <Link
                className={`ml-[0.75rem] text-white mb-[2rem] ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                to={item.to}
                style={{
                  transitionDelay: `${i + 3}00ms`
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
