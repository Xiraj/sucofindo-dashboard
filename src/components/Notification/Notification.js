import React, { useState, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import axios from "axios";

export default function Notification() {
  const [notificationCount, setNotificationCount] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const peminjamanResponse = await axios.get(`https://sima-rest-api.vercel.app/api/v1/aset/listPeminjam`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
  
      const pengembalianResponse = await axios.get(`https://sima-rest-api.vercel.app/api/v1/aset/listPengembali`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
  
      const peminjamanData = peminjamanResponse.data.peminjaman;
      const pengembalianData = pengembalianResponse.data.pengembalian;
      const notificationData = [...peminjamanData, ...pengembalianData];
  
      const notificationCount = notificationData.length;
  
      setNotificationCount(notificationCount);
      setFilteredData(notificationData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  
useEffect(() => {
    getData('Pending');
  }, []);

  const handleNotificationClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative flex justify-center items-center cursor-pointer">
      <div className="w-9 h-14 pt-[0.8rem] pr-[0.2rem]" onClick={handleNotificationClick}>
        <IoMdNotificationsOutline color="#4E73DF" size={26} />
      </div>
      {notificationCount > 0 && (
  <div className={`absolute text-[12px] w-5 h-5 top-0 right-0 text-center justify-center items-center flex bg-red-500 text-white rounded-full px-2 ${showPopup ? 'visible opacity-100' : 'visible opacity-100'}`}>
    {filteredData.reduce((count, item) => {
      if (item.id_aset?.tag_number != null) {
        return count + 1;
      }
      return count;
    }, 0)}
          {showPopup && (
            <div className="absolute w-[270px] h-[180px] border-2 border-main-color right-10 top-4 bg-white rounded shadow-md">
              <div className="bg-main-color p-1">
                <h1 className="text-white font-bold">NOTIFIKASI</h1>
              </div>
              <div className="overflow-y-scroll max-h-[150px]">
              {filteredData.length > 0 ? (
        filteredData.map((item, index) => {
          // Skip rendering if tag number is null or undefined
          if (item.id_aset?.tag_number == null) {
            return null;
          }

    return (
      <div className="flex justify-start gap-x-3 border-b-2 border-main-color" key={index}>
        <div className="w-[180px] h-[25px] bg-main-color mt-[0.35rem] ml-[0.5rem] rounded-md">
          <h1 className="flex justify-center items-center text-[1rem]">{index + 1}</h1>
        </div>
        <div className="w-[750px] grid grid-col justify-start">
          <h1 className="text-zinc-600">
            {item.tanggal_peminjaman}
            {item.tanggal_pengembalian}
          </h1>
          <h1 className="text-black relative left-[14px]">{item.id_aset?.tag_number}</h1>
        </div>
        <h1 className={`pr-2 ${item.id_pengembalian?.status === 'Pending' ? 'text-yellow-500' : (item.status === 'Approved' ? 'text-green-500' : 'text-red-500')}`}>
          {item.status}
        </h1>
      </div>
    );
  })
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">Tidak ada notifikasi</p>
          </div>
        )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
