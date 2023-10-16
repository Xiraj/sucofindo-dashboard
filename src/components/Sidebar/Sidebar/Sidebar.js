import React, { useState } from 'react';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import SucofindoLogo from '../../../assets/logo-sucofindo.png';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { FaFolder, FaHome } from 'react-icons/fa';
import { RiFolderDownloadFill, RiFolderUploadFill, RiFolderHistoryFill } from 'react-icons/ri'

export default function Sidebar () {
  const [open, setOpen] = useState(true);
  const menuItems = [
    { icon: <FaHome 
        className={`${!open && 'cursor-pointer w-[8rem]'}`} 
        color='white' size={`${ open ? 20 : 24 }`} 
      />, 
      to: '/Home', label: 'Home'
    },
    {   icon: <FaFolder 
                className={`${!open && 'cursor-pointer relative top-[2rem] ml-[1rem] w-[8rem]'}`} 
                color='white' size={`${ open ? 20 : 24 }`} 
        />, 
        to: '/Total-Aset', label: 'Total Aset Tersedia'
    },
    {   icon: <RiFolderUploadFill
          className={`${!open && 'cursor-pointer ml-[1.1rem] relative top-[1rem] w-[8rem]'}`} 
          color='white' size={`${ open ? 20 : 26 }`} 
        />, 
        to: '/Barang-Masuk', label: 'Persetujuan Pengembalian'
    },
    {   icon: <RiFolderDownloadFill
                className={`${!open && 'cursor-pointer ml-[1.1rem] relative top-[1rem] w-[8rem]'}`} 
                color='white' size={`${ open ? 20 : 26 }`} 
        />, 
        to: '/Barang-Keluar', label: 'Persetujuan Peminjaman'
    },
    {   icon: <RiFolderHistoryFill
            className={`${!open && 'cursor-pointer relative top-[1rem] w-[8rem]'}`} 
            color='white' size={`${ open ? 20 : 26 }`} 
        />, 
        to: '/Riwayat', label: 'History'
    },
  ];
  return (
    <aside className='flex z-10'>
      <Box className={`${ open ? "w-[16.8rem]" : "w-[8rem]" } duration-300 bg-main-color`}>
        <Box className={`${ open ? "w-[16rem]" : "w-[8rem]" } fixed`}>
          <Box className='flex'>
            <Box className='mt-[1.5rem] ml-[1.5rem]'>
              <img
                alt='sucofindo-logo'
                className='w-[7.813rem] h-[5.375rem]'
                src={SucofindoLogo}
              />
            </Box>
            <Box className='cursor-pointer mt-[4rem] ml-[4.5rem] mr-[1.5rem]'>
              <button>
                <BsArrowLeftCircleFill
                  color='white'
                  className={`${ open ? "rotate-0" : "rotate-180" } ${open ? "" : "relative"} ${ open ? "" : "right-12" }`}
                  onClick={() => setOpen(!open)}
                  size={`${open ? 24 : 24 }`}
                />
              </button>
            </Box>
          </Box>
          <Box className={
            ` ${ open ? 'mt-[1.5rem] ml-[1.5rem] w-[13rem] h-[0.031rem] bg-white' 
            : 'mt-[0.5rem] ml-[0.5rem] w-[7rem] h-[0.031rem] bg-white' }`}
          />
          <ul className='ml-[1.5rem] mt-[2rem]'>
            {menuItems.map((item, i) => (
              <li key={i} className='flex'>
                {item.icon}
                <Link
                  className={`ml-[0.75rem] text-white mb-[2rem] ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                  to={`${open ? item.to : item.to}`}
                  style={{
                    transitionDelay: `${i + 3}00ms`
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </aside>
  )
}
