import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aset from './Routes/Aset/Aset';
import Home from './Routes/Home/Home';
import BarangMasuk from './Routes/BarangMasuk/BarangMasuk';
import BarangKeluar from './Routes/BarangKeluar/BarangKeluar';
import DetailBarangMasuk from './Routes/DetailBarangMasuk';
import DetailBarangKeluar from './Routes/DetailBarangKeluar';
import Riwayat from './Routes/Riwayat/Riwayat';
import Login from './pages/Login/Login';
import ProtectRoute from './components/ProtectRoute/ProtectRoute'; // Import the ProtectRoute component

const isAuthenticated = false; // Replace with actual authentication logic

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={<ProtectRoute element={<Home />} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/total-aset"
        element={<ProtectRoute element={<Aset />} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/barang-masuk"
        element={<ProtectRoute element={<BarangMasuk />} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/barang-keluar"
        element={<ProtectRoute element={<BarangKeluar />} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/detail-barang-masuk/:_id"
        element={<ProtectRoute element={<DetailBarangMasuk />} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/detail-barang-keluar/:_id"
        element={<ProtectRoute element={<DetailBarangKeluar />} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/riwayat"
        element={<ProtectRoute element={<Riwayat />} isAuthenticated={isAuthenticated} />}
      />
    </Routes>
  </Router>
);
