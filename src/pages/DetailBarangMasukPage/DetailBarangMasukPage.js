import { useState, useEffect } from "react";
import ImageView from "../../components/ImageView";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function DetailBarangMasukPage () {
  const { _id } = useParams([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('https://sima-rest-api.vercel.app/api/v1/user/profile', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
  
        const userId = userResponse.data.id;
        setUserId(userId);
        console.log("User ID:", userId);
  
        const asetResponse = await axios.get(`https://sima-rest-api.vercel.app/api/v1/aset/listPengembali/${_id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        const asetData = asetResponse.data.pengembalian;
        setData(asetData);
        console.log("Aset Data:", asetData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [_id]);

  const handleAccept = async () => {
    try {
      const response = await axios.post(
        `https://sima-rest-api.vercel.app/api/v1/aset/acceptPengembalian/${_id}`,
        {
          adminId: userId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );
  
      console.log('Accept Success', response.data);
      toast.success('Pengembalian Diterima!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      navigate('/Barang-Masuk');
    } catch (error) { 
      console.error('Accept error', error);
    }
  };    

  const handleDecline = async () => {
    try {
      const response = await axios.post(
        `https://sima-rest-api.vercel.app/api/v1/aset/rejectPengembalian/${_id}`,
        {
          adminId: userId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
        }
      );
  
      console.log('Reject Success', response.data);
      toast.success('Pengembalian Ditolak!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      navigate('/Barang-Masuk');
    } catch (error) { 
      console.error('Accept error', error);
    }
  };
  

    return(
        <div className="max-h-full">
            <div className="relative top-[4rem]">
            <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md">
              <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Data Aset</p>
              <div className=" flex flex-row ml-[2.5rem] mt-[2.2rem]">
              {Object.keys(data).length > 0 && (
                <div className="mb-[2.5rem]" key={data._id}>
                  <p className="text-[1.25rem] font-semibold text-[#515151] ">Nama Alat</p>
                    <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                        <p>{data.id_aset.nama_alat}</p>
                    </div>
                    <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Tag Number</p>
                    <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                        <p>{data.id_aset.tag_number}</p>
                    </div>
                  </div>
              )}
              {Object.keys(data).length > 0 && (
                  <div className="ml-[5rem]" key={data._id}>
                    <p className="text-[1.25rem] font-semibold text-[#515151] ">Penanggung Jawab Alat</p>
                      <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                        <p>{data.id_aset.penanggung_jawab}</p>
                      </div>
                  </div>
              )}
                </div>
              </div>
            </div>
            <div className="mt-[8.5rem]">
            <div className="bg-white max-w-6xl max-h-full ml-[2.5rem] rounded-md ">
          <p className="ml-[2.5rem] pt-[1.5rem] text-[2rem] font-Montserrat font-semibold">Status Aset</p>
          <div className=" flex flex-row ml-[2.5rem] mt-[2.2rem]">
          {Object.keys(data).length > 0 && (
            <div className="mb-[2.5rem]" key={data._id}>
              <p className="text-[1.25rem] font-semibold text-[#515151] ">Lokasi Aset</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>{data.lokasi}</p>
                </div>
                <p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Kondisi Aset Saat Dikembalikan</p>
                <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>{data.kondisi_aset}</p>
                </div>
              </div>
          )}
          {Object.keys(data).length > 0 && (
              <div className="ml-[5rem]" key={data._id}>
                <p className="text-[1.25rem] font-semibold text-[#515151] ">Tanggal Pengembalian</p>
                  <div className="py-3 px-3 text-[#515151] bg-[#C4C4C4] border rounded-lg w-[27rem] text-[1rem] mt-4">
                    <p>{data.tanggal_pengembalian}</p>
                  </div>
									<p className="text-[1.25rem] font-semibold text-[#515151] mt-[2.2rem]">Foto Aset</p>
										<div className="bg-white p-4 border-2 rounded-lg w-[27rem] h-[20rem] overflow-y-scroll mb-[2rem] mt-4">
											<ImageView imageUrl={data.foto}/>
										</div>
              </div>
          )}
          </div>
        </div>
            </div>
            <div className="flex flex-row mt-[1rem] ml-[50rem] mb-[2rem]">
                <button onClick={handleDecline} className='bg-[#FF0404] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold mr-[2rem]'>
                    Tolak
                </button>
                <button onClick={handleAccept} className='bg-[#2AC43A] w-[11.25rem] h-[2.875rem] mt-[2.5rem] rounded-lg text-white font-semibold'>
                    Terima
                </button>
            </div>
        </div>
    );
}