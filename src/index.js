import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import TotalAset from './Routes/TotalAset/TotalAset';
import BarangMasuk from './Routes/BarangMasuk/BarangMasuk';
import BarangKeluar from './Routes/BarangKeluar/BarangKeluar';
import Riwayat from './Routes/Riwayat/Riwayat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<TotalAset/>}/>
      <Route path='/Total-Aset' element={<TotalAset/>}/>
      <Route path='/Barang-Masuk' element={<BarangMasuk/>}/>
      <Route path='/Barang-Keluar' element={<BarangKeluar/>}/>
      <Route path='/Riwayat' element={<Riwayat/>}/>
    </Routes>
  </Router>
);
