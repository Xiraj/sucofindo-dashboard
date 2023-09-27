import React from "react";
import { FaFolder } from "react-icons/fa";
import { RiFolderUploadFill } from "react-icons/ri";
import {  useSpring, animated  } from 'react-spring';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


function Number({n}) {
    const { number } = useSpring({
        from: {number: 0},
        number: n, 
        delay: 250,
        config: {mass: 1, tension: 20, frinction: 10},
    });
    return <animated.div>
        {number.to((n) => n.toFixed(0))}
    </animated.div>
}

export default function CardAset () {
    const data = [
        { value: 407, label: 'Total Aset', color: '#4E73DF' },
        { value: 10, label: 'Aset Keluar', color: '#FF9839' },
      ];
      
      const size = {
        width: 500,
        height: 500,
      };
    return(
        <div className="bg-white w-[67.291rem] h-[36.5rem] ml-[2.5rem] rounded-xl">
            <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Dashboard</h1>
            <div className="flex justify-between">
                <div className="flex flex-col gap-6 ml-[2.5rem] pt-[2.2rem]">
                    <div className="w-[22.25rem] h-[12.5rem] rounded-[1rem] bg-main-color ">
                        <div className="bg-white w-[3rem] h-[3rem] rounded-[0.5rem] ml-8 mt-5">
                            <div className="ml-[0.5rem] pt-[0.5rem]">
                                <FaFolder color="#4E73DF" size={30}/>
                                <div className="flex text-white text-[4rem] mr-[14rem] pt-[0.9rem] font-semibold">
                                    <div>
                                        <Number n={407} />
                                    </div>
                                    <div>
                                        <h1 className="text-white text-[1.5rem] w-[7.25rem] ml-[0.75rem] pt-10 font-medium">Total Aset</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[22.25rem] h-[12.5rem] rounded-[1rem] bg-[#FF9839] ">
                        <div className="bg-white w-[3rem] h-[3rem] rounded-[0.5rem] ml-8 mt-5">
                            <div className="ml-[0.5rem] pt-[0.5rem]">
                                <RiFolderUploadFill color="#FF9839" size={30}/>
                                <div className="flex text-white text-[4rem] mr-[14rem] pt-[0.9rem] font-semibold">
                                    <div>
                                        <Number n={10}/>
                                    </div>
                                    <div>
                                        <h1 className="text-white text-[1.5rem] w-[8.4rem] ml-[0.75rem] pt-10 font-medium">Aset Keluar</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    );
}