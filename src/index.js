import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Aset from './Routes/Aset/Aset';
import Home from './Routes/Home/Home';
import UserAppBar from './components/AppBar/AppBar';
import BarangMasuk from './Routes/BarangMasuk/BarangMasuk';
import BarangKeluar from './Routes/BarangKeluar/BarangKeluar';
import DetailBarangMasuk from './Routes/DetailBarangMasuk';
import Riwayat from './Routes/Riwayat/Riwayat';
import Login from './pages/Login/Login';

function App() {
  const [username, setUsername] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UserAppBar username={username} />
              <Login setUsername={setUsername} />
            </>
          }
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/Total-Aset" element={<Aset />} />
        <Route path="/Barang-Masuk" element={<BarangMasuk />} />
        <Route path="/Barang-Keluar" element={<BarangKeluar />} />
        <Route path="/Detail-Barang-Masuk" element={<DetailBarangMasuk />} />
        <Route path="/Riwayat" element={<Riwayat />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
