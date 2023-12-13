import React from "react";
import imageLogin from "../../assets/illustration-login.png";
import logo from "../../assets/sucofinfo-login.png";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-row justify-center items-center">
        <div className="mt-[12.5rem] ml-[2.125rem]">
          <img alt="LoginImage" src={imageLogin} />
        </div>
        <div className="relative right-12 mt-[2rem] ml-[8rem]">
          <img alt="SucofindoLogin" src={logo} />
          <div className="mt-[3rem]">
            <p className="text-[2rem] font-semibold">
              Selamat Datang di Sucofindo
            </p>
            <p className="text-[1.25rem] font-regular mt-[1.25rem]">
              Silakan masukkan akun Anda!
            </p>
          </div>
          <div className="mt-[2rem]">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
