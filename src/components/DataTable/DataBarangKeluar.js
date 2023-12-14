import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { BsSearch } from "react-icons/bs";
import NoData from "../../assets/NoData.png";
import { ThreeDots } from "react-loader-spinner";

export default function DataTableKeluar() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Array.isArray(filteredData)
    ? filteredData.slice(firstIndex, lastIndex)
    : [];
  const totalRecords = Array.isArray(filteredData) ? filteredData.length : 0;
  const totalPages = Math.ceil(totalRecords / recordPerPage);

  const getData = async () => {
    try {
      const response = await axios
        .get("https://sima-rest-api.vercel.app/api/v1/aset/peminjamanHistory", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then(
            response=> {
                console.log(response.data.peminjamanHistory)
                setData(response.data.peminjamanHistory)
                setFilteredData(response.data.peminjamanHistory)
        });
      setData(response.data.peminjamanHistory);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.id_peminjaman?.id_aset?.nama_alat.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setRecordPerPage(newItemsPerPage);
    setCurrentPage(1);
  };
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="w-full md:w-[116rem] mx-auto overflow-y-auto overflow-x-auto">
      <div className="flex justify-start mb-4">
        <div className="flex">
          <input
            className="bg-transparent pl-4 border rounded-lg border-black w-[150px] h-[30px] sm:w-[250px] focus:outline-none "
            type="text"
            placeholder="Masukkan Nama Aset"
            onChange={Filter}
          />
          <BsSearch className="relative right-7 top-2" size={15} />
        </div>
      </div>
      {loading ? (
        <div className="text-center mt-4">
          <ThreeDots type="ThreeDots" color="#555555" height={50} width={50} />
        </div>
      ) : (
        <>
          {" "}
          {totalRecords == 0 ? (
            <div className="flex flex-row justify-start items-center mt-4">
              <img
                className="w-[40rem] h-[40rem]"
                src={NoData}
                alt="No-Data-Access"
              />
              <div className="flex flex-col gap-5">
                <h1 className="text-[1.5rem] font-semibold">
                  No Data Available
                </h1>
                <p className="text-[1rem] font-normal">
                  Tidak Ada Data Yang Dapat Ditampilkan{" "}
                </p>
              </div>
            </div>
          ) : (
            <table>
              <thead className="w-[86.5rem] h-[3.5rem] font-bold bg-[#F3F3F3]">
                <tr>
                  <th className="w-[18.625rem] pl-3 py-2 border-l-2 border-y-2 border-y-[#E8E8E8] text-left">
                    No
                  </th>
                  <th className="w-[88.625rem] py-2 border-bottom-2 border-[#e8e8e8] text-left">
                    Nama Aset
                  </th>
                  <th className="w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                    Tag Number
                  </th>
                  <th className="w-[64.625rem] pl-[1rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                    Merek
                  </th>
                  <th className="w-[18.625rem] border-y-2 border-[#e8e8e8] text-left">
                    Tipe
                  </th>
                  <th className="w-[48.625rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                    Nomor Seri
                  </th>
                  <th className="w-[108.625rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                    Penanggung Jawab Aset
                  </th>
                  <th className="w-[98.625rem] py-2 pl-[2rem] border-y-2 border-[#e8e8e8] text-left">
                    Lokasi Aset
                  </th>
                  <th className="w-[48.625rem] border-y-2 border-[#e8e8e8] text-left">
                    Kondisi Aset
                  </th>
                  <th className="w-[98.625rem] pl-[1rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                    Tanggal Peminjaman
                  </th>
                  <td className="w-[88.625rem] border-y-2 border-[#e8e8e8]">
                    Tujuan Peminjaman
                  </td>
                  <td className="w-[78.625rem] border-y-2 border-[#e8e8e8]">
                    Diajukan Oleh
                  </td>
                  <td className="w-[78.625rem] border-y-2 border-[#e8e8e8]">
                    Admin
                  </td>
                  <td className="w-[58.625rem] pl-[1rem] border-r-2 border-y-2 border-[#e8e8e8]">
                    Status
                  </td>
                </tr>
              </thead>
              <tbody>
                {records.map((item, index) => (
                  <tr key={index}>
                    <td className="w-[1.8rem] h-[3.5rem] pl-[1rem] border-l-2 border-y-2 border-y-[#E8E8E8]">
                      {index + 1 + firstIndex}
                    </td>
                    <td className="w-[78.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.id_aset?.nama_alat}
                    </td>
                    <td className="w-[58.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.id_aset?.tag_number}
                    </td>
                    <td className="w-[64.625rem] pl-[1rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                      {item.id_peminjaman?.id_aset?.merek}
                    </td>
                    <td className="w-[38.625rem] border-y-2 border-[#e8e8e8] text-left">
                      {item.id_peminjaman?.id_aset?.tipe}
                    </td>
                    <td className="w-[20.625rem] py-2 border-y-2 border-[#e8e8e8] text-left">
                      {item.id_peminjaman?.id_aset?.nomor_seri}
                    </td>
                    <td className="w-[108.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.id_aset?.penanggung_jawab}
                    </td>
                    <td className="w-[98.625rem] pl-[2rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.lokasi}
                    </td>
                    <td className="w-[48.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.kondisi_aset}
                    </td>
                    <td className="w-[98.625rem] pl-[1rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.tanggal_peminjaman}
                    </td>
                    <td className="w-[88.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_peminjaman?.tujuan_peminjaman}
                    </td>
                    <td className="w-[68.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_user.username}
                    </td>
                    <td className="w-[68.625rem] h-[3.5rem] border-y-2 border-[#e8e8e8]">
                      {item.id_admin.username}
                    </td>
                    <td
                      className={`w-[58.625rem] pl-[1rem] h-[3.5rem] border-r-2 border-y-2 border-[#e8e8e8] ${
                        item.id_peminjaman?.status === "Pending"
                          ? "text-yellow-500"
                          : item.id_peminjaman?.status === "Approved"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.id_peminjaman?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
      <nav className="z-10">
        <ul className="grid justify-items-stretch pagination">
          <div className="justify-self-start">
            <label className="flex relative top-6">
              <select
                className="border border-black rounded-lg cursor-pointer"
                value={recordPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <p className="ml-4">Menampilkan Riwayat Barang Keluar</p>
            </label>
          </div>
          <div className="flex justify-center">
            <li className="page-item">
              <a
                className="page-link cursor-pointer"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ArrowBackIosSharpIcon />
              </a>
            </li>
            {pageNumbers
              .filter(
                (number) => number >= currentPage && number < currentPage + 5
              )
              .map((number) => (
                <li
                  className={`cursor-pointer page-link ${
                    currentPage === number ? "active" : ""
                  }`}
                  key={number}
                >
                  <a
                    className='hover:border-main-color hover:rounded-xl hover:border-2 hover:w-2 page-item hover:text-center text-[1.1rem] p-2'
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </a>
                </li>
              ))}
            <li className="page-item">
              <a
                className="page-link cursor-pointer "
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ArrowForwardIosSharpIcon />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
