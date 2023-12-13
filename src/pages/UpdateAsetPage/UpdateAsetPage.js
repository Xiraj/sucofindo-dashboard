import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function UpdateAsetPage () {
    const { _id } = useParams([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
    
          const asetResponse = await axios.get(`https://sima-rest-api.vercel.app/api/v1/data/aset/${_id}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
          });
          const asetData = asetResponse.data.data;
          setData(asetData);
          console.log("Aset Data:", asetData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [_id]);
  
    const handleUpdate = async () => {
      try {
        const response = await axios.put(
          `https://sima-rest-api.vercel.app/api/v1/data/updateAset/${_id}`,
          {
            nama_alat: data.nama_alat,
            tag_number: data.tag_number,
            merek: data.merek,
            tipe: data.tipe,
            nomor_seri: data.nomor_seri,
            penanggung_jawab: data.penanggung_jawab,
            lokasi_aset: data.lokasi_aset,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
          }
        );
    
        console.log('Update Success', response.data);
        toast('Update Sukses!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        navigate('/Total-Aset');
      } catch (error) { 
        console.error('Accept error', error);
      }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        onClose();
      };
    
    
    return(
        <div className="h-screen">
            <div className="relative top-[4rem]">
             <div className="bg-white max-w-5xl max-h-full ml-[2.5rem] rounded-md">
                <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Data Aset</p>
                <div className="flex flex-row ml-[2.5rem] mt-[2.2rem]">
                    {Object.keys(data).length > 0 && (
                    <div className="mb-[2.5rem]" key={data._id}>
                        <p className="text-[1.25rem] font-semibold text-[#515151]">Nama Aset</p>
                        <input
                  type="text"
                  value={data.nama_alat}
                  onChange={(e) => setData({ ...data, nama_alat: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tag Number</p>
                        <input
                  type="text"
                  value={data.tag_number}
                  onChange={(e) => setData({ ...data, tag_number: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Merk</p>
                        <input
                  type="text"
                  value={data.merek}
                  onChange={(e) => setData({ ...data, merek: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem] ">Lokasi Aset</p>
                        <input
                  type="text"
                  value={data.lokasi_aset}
                  onChange={(e) => setData({ ...data, lokasi_aset: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                    </div>
                    )}
                    {Object.keys(data).length > 0 && (
                        <div className="ml-[5rem]" key={data._id}>
                        <p className="text-[1.25rem] font-semibold text-[#515151] ">Tipe</p>
                        <input
                  type="text"
                  value={data.tipe}
                  onChange={(e) => setData({ ...data, tipe: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                        
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Nomor Seri</p>
                        <input
                  type="text"
                  value={data.nomor_seri}
                  onChange={(e) => setData({ ...data, nomor_seri: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                        <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Penanggung Jawab Alat</p>
                        <input
                  type="text"
                  value={data.penanggung_jawab}
                  onChange={(e) => setData({ ...data, penanggung_jawab: e.target.value })}
                  className="py-3 px-3 text-[#515151] bg-[#dddddd] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                    </div>
                    )}
                </div>
              </div>
              </div>
            <div className="flex flex-row mt-[4rem] ml-[40.8rem] gap-4 mb-[3rem] relative bottom-[7.7rem]">
                <Link to='/Total-Aset'>
                    <button className='bg-slate-500 w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold'>
                        Kembali
                    </button>
                </Link>
                <button onClick={handleUpdate} className='bg-[#2AC43A] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold'>
                    Perbarui
                </button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Berhasil Menambahkan Aset Barang
                    </Alert>
                  </Snackbar>
            </div>
        </div>
    );
}