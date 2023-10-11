import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aset from './Routes/Aset/Aset';
import Home from './Routes/Home/Home';
import BarangMasuk from './Routes/BarangMasuk/BarangMasuk';
import BarangKeluar from './Routes/BarangKeluar/BarangKeluar';
import DetailBarangMasuk from './Routes/DetailBarangMasuk';
import Riwayat from './Routes/Riwayat/Riwayat';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Total-Aset' element={<Aset/>}/>
      <Route path='/Barang-Masuk' element={<BarangMasuk/>}/>
      <Route path='/Barang-Keluar' element={<BarangKeluar/>}/>
      <Route path='/Detail-Barang-Masuk' element={<DetailBarangMasuk/>}/>
      <Route path='/Riwayat' element={<Riwayat/>}/>
    </Routes>
  </Router>
);