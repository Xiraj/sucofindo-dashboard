import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Aset from './Routes/Aset/Aset';
import Home from './Routes/Home/Home';
import BarangMasuk from './Routes/BarangMasuk/BarangMasuk';
import BarangKeluar from './Routes/BarangKeluar/BarangKeluar';
import DetailBarangMasuk from './Routes/DetailBarangMasuk';
import DetailBarangKeluar from './Routes/DetailBarangKeluar';
import Riwayat from './Routes/Riwayat/Riwayat';
import Login from './pages/Login/Login';
import Layout from './components/Layout/Layout';
import RequireAuth from './components/RequireAuth/RequireAuth';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public Routing */}
        <Route path='/Login' element={<Login/>}/>
        {/* Private Routing */}
        <Route element={<RequireAuth/>}>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Total-Aset' element={<Aset/>}/>
          <Route path='/Barang-Masuk' element={<BarangMasuk/>}/>
          <Route path='/Barang-Keluar' element={<BarangKeluar/>}/>
          <Route path='/Detail-Barang-Masuk/:_id' element={<DetailBarangMasuk/>}/>
          <Route path='/Detail-Barang-Keluar/:_id' element={<DetailBarangKeluar/>}/>
          <Route path='/Riwayat' element={<Riwayat/>}/>
        </Route>
      </Route>
    </Routes>
  )
}