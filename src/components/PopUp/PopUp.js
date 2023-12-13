import React, { useState, useEffect } from 'react';
import Logo from '../../assets/sucofinfo-login.png';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    nama_alat: '',
    tag_number: '',
    nomor_seri: '',
    merek: '',
    tipe: '',
    lokasi_aset: '',
    penanggung_jawab: '',
  });

  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios
        .get("https://sima-rest-api.vercel.app/api/v1/data/aset", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
          setFilteredData(response.data.data);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post('https://sima-rest-api.vercel.app/api/v1/data/addAset', formData);
      getData();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['nama_alat', 'tag_number', 'nomor_seri', 'merek', 'tipe', 'lokasi_aset', 'penanggung_jawab'];
    const hasNullValues = requiredFields.some(field => formData[field] == null || formData[field] === '');
  
    if (hasNullValues) {
      setError('Please fill in all required fields.');
      setOpen(true);
      return;
    }
  
    try {
      await postData();
      onSubmit(formData);
      onClose();
      setFormData({
        nama_alat: '',
        tag_number: '',
        nomor_seri: '',
        merek: '',
        tipe: '',
        lokasi_aset: '',
        penanggung_jawab: '',
      });
    } catch (error) {
      console.error('Error posting or handling data:', error);
      setError('An error occurred. Please try again.');
      setOpen(true);
    }
  
    try {
      await getData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

useEffect(() => {
    getData();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    onClose();
  };
  
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-3xl sm:w-full sm:p-6">
        <div className='flex justify-end'>
              <button className='w-8 border-2 border-zinc-700 rounded-xl' onClick={() => {
                handleClose();
              }}>
                <h1 className='text-[1.2rem]'>
                  X
                </h1>
              </button>
            </div>
          <form onSubmit={handleSubmit}>
            <div className='grid justify-items-stretch my-4'>
                <div className='flex justify-between'>
                    <img alt="logo" className='w-[14rem] h-[9rem]' src={Logo}/>
                </div>
                <div className='flex justify-end relative bottom-7'>
                    <h1 className='w-[12rem] h-[2rem] bg-main-color rounded-xl text-center pt-1 text-white'>
                        Form Tambah Aset
                    </h1>
                </div>
            </div>
            <div className="mb-4">
              <label htmlFor="nama_alat" className="block text-gray-700 text-sm font-bold mb-2">
                Nama Aset
              </label>
              <input
                type="text"
                id="nama_alat"
                name="nama_alat"
                value={formData.nama_alat}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tag_number" className="block text-gray-700 text-sm font-bold mb-2">
                Tag Number
              </label>
              <input
                type="tag_number"
                id="tag_number"
                name="tag_number"
                value={formData.tag_number}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nomor_seri" className="block text-gray-700 text-sm font-bold mb-2">
                Serial Number
              </label>
              <input
                type="nomor_seri"
                id="nomor_seri"
                name="nomor_seri"
                value={formData.nomor_seri}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="merek" className="block text-gray-700 text-sm font-bold mb-2">
                Merek
              </label>
              <input
                type="merek"
                id="merek"
                name="merek"
                value={formData.merek}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tipe" className="block text-gray-700 text-sm font-bold mb-2">
                Tipe
              </label>
              <input
                type="tipe"
                id="tipe"
                name="tipe"
                value={formData.tipe}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lokasi_aset" className="block text-gray-700 text-sm font-bold mb-2">
                Lokasi Aset
              </label>
              <input
                type="lokasi_aset"
                id="lokasi_aset"
                name="lokasi_aset"
                value={formData.lokasi_aset}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="penanggung_jawab" className="block text-gray-700 text-sm font-bold mb-2">
                Penanggung Jawab
              </label>
              <input
                type="penanggung_jawab"
                id="penanggung_jawab"
                name="penanggung_jawab"
                value={formData.penanggung_jawab}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="text-center">
              <Stack spacing={10} sx={{ width: '100%' }}>
                  <Button variant="outlined" onClick={handleClick}
                  className='hover:text-main-color hover:font-bold'
                  sx={{ backgroundColor: '#4E73DF', color: '#FFFF', justifyContent: 'center' }}
                  type="submit"
                  >
                    SUBMIT
                  </Button>
                  <Snackbar open={open} onClose={handleClose}>
            {error ? (
              <Alert onClose={() => { handleClose(); setError(null); }} severity="error" sx={{ width: '100%' }}>
                {error}
              </Alert>
            ) : (
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Berhasil Menambahkan Aset Barang
              </Alert>
            )}
          </Snackbar>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
