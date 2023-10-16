import React, { useState, useEffect } from 'react';
import Logo from '../../assets/sucofinfo-login.png';
import axios from 'axios';

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nama_alat: '',
    tag_number: '',
    nomor_seri: '',
    merek: '',
    tipe: '',
    lokasi_aset: '',
    penanggung_jawab: '',
  });

  const postData = async () => {
    try {
        const response = await axios.post('https://sima-rest-api.vercel.app/api/v1/data/aset', formData);
        console.log('Data posted successfully:', response.data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
    postData();
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData();
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Error posting data:', error);
    }
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
          <form onSubmit={handleSubmit}>
            <div className='flex justify-end'>
              <button className='w-8 border-2 border-zinc-700 rounded-xl'>
                <h1 className='text-[1.2rem]'>
                  X
                </h1>
              </button>
            </div>
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
              <button
                type="submit"
                className="bg-main-color hover:bg-blue-700 text-white font-bold w-[12.5rem] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
