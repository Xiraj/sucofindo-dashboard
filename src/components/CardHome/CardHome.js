import * as React from 'react';
import { FaFolder } from "react-icons/fa";
import { RiFolderUploadFill } from "react-icons/ri";
import {  useSpring, animated  } from 'react-spring';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 250,
        config: { mass: 1, tension: 20, friction: 10 }, // Corrected 'frinction' to 'friction'
    });

    return (
        <animated.div>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
    );
}

export default function CardHome () {
    const data = [
        { value: 407, label: 'Total Aset', color: '#4E73DF' },
        { value: 10, label: 'Aset Keluar', color: '#FF9839' },
      ];
      
      const size = {
        width: 500,
        height: 500,
      };
    return(
        <Box className="bg-white w-full md:w-[67.291rem] mx-auto md:h-[36.5rem] mt-5 p-5 rounded-xl">
            <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem]">Dashboard</h1>
            <Box className="flex justify-between">
                <Box className="flex flex-col gap-6 ml-[2.5rem] pt-[2.2rem]">
                    <Link to='/Total-Aset'>
                        <Box className="w-[22.25rem] h-[12.5rem] rounded-[1rem] bg-main-color cursor-pointer">
                            <Box className="ml-7 mt-2">
                                <Box className="ml-[0.5rem] pt-[1rem]">
                                    <Box className="bg-white w-[3rem] h-[3rem] rounded-[0.5rem] mt-2">
                                        <FaFolder color="#4E73DF" className='relative left-2 top-2' size={30}/>
                                    </Box>
                                    <Box className="flex text-white text-[4rem] mr-[14.5rem] pt-[0.2rem] font-semibold">
                                        <Box>
                                            <Number n={407} />
                                        </Box>
                                        <Box>
                                            <h1 className="text-white text-[1.5rem] w-[7.25rem] ml-[0.75rem] pt-10 font-medium">Total Aset</h1>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                    <Link to='/Barang-Keluar'>
                        <Box className="w-[22.25rem] h-[12.5rem] rounded-[1rem] bg-[#FF9839] cursor-pointer">
                            <Box className="ml-7 mt-2">
                                <Box className="ml-[0.5rem] pt-[1rem]">
                                    <Box className="bg-white w-[3rem] h-[3rem] rounded-[0.5rem] mt-2">
                                        <RiFolderUploadFill color="#FF9839" className='relative left-2 top-2' size={30}/>
                                    </Box>
                                    <Box className="flex text-white text-[4rem] mr-[14.5rem] pt-[0.2rem] font-semibold">
                                        <Box>
                                            <Number n={10} />
                                        </Box>
                                        <Box>
                                            <h1 className="text-white text-[1.5rem] w-[9.25rem] ml-[0.75rem] pt-10 font-medium">Aset Keluar</h1>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Link>
                </Box>
                <PieChart
                    className="cursor-pointer"
                    series={[
                        {
                        arcLabel: (item) => `${item.label} (${item.value})`,
                        arcLabelMinAngle: 45,
                        data,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                        },
                    }}
                    {...size}
                />
            </Box>
        </Box>
    );
}