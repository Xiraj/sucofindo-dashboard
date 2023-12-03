import { useState, useEffect } from "react";
import { FaFolder } from "react-icons/fa";
import { RiFolderUploadFill } from "react-icons/ri";
import {  useSpring, animated  } from 'react-spring';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom'
import axios from "axios";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 250,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
        <animated.div>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
    );
}

export default function CardAset () {
    const [data, setData] = useState([]);
      
      const size = {
        width: 500,
        height: 500,
      };

      useEffect(() => {
        axios.get('https://sima-rest-api.vercel.app/api/v1/data/aset', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        })
          .then((response) => {
            setData(response.data.data);
            console.log(response.data.data)
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

      const borrowedAssets = data.filter(asset => asset.is_borrowed);
      const borrowedAssetsCount = borrowedAssets.length;
      const itemCount = data.length - borrowedAssetsCount;

    return(
        <Box className="bg-white w-full md:w-[67.291rem] mx-auto md:h-[36.5rem] mt-5 p-5 rounded-xl">
            <h1 className="ml-[2.5rem] pt-[1.5rem] text-[2rem] ">Dashboard</h1>
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
                                            <Number n={itemCount} />
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
                                            <Number n={borrowedAssetsCount} />
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
                          data: [
                              { label: 'Total Aset', value: itemCount, color: '#4E73DF'},
                              { label: 'Aset Keluar', value: borrowedAssetsCount,  color: '#FF9839' },
                          ],
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