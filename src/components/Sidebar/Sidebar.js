import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SucofindoLogo from '../../assets/logo-sucofindo.png';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

export default function Sidebar () {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex'>
        <div className={`${open ? "w-[16rem]" : "w-[8rem]"} duration-300 h-screen bg-main-color relative`}>
            <div className='flex'>
                <div className='mt-[1.5rem] ml-[1.5rem]'>
                    <img
                        alt='sucofindo-logo'
                        className='w-[7.813rem] h-[5.375rem]'
                        src={SucofindoLogo}
                    />
                </div>
                <div className='cursor-pointer mt-[4rem] ml-[4.5rem] mr-[1.5rem]' onClick={() => setOpen(open)}>
                    <BsArrowLeftCircleFill size={20} color='white'/>
                </div>
            </div>
            <div className='mt-[1.5rem] ml-[1.5rem] w-[13rem] h-[0.5px] bg-white'/>
            <ul>
                <li>
                    <Link></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}