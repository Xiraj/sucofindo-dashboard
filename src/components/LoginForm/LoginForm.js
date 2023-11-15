import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  // const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  const buttonPass = () => {
    setShowPass((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Mohon isi email dan password Anda');
      return;
    }
  
    try {
      const response = await axios.post('https://sima-rest-api.vercel.app/api/v1/auth/signIn', {
        email,
        password,
      });
  
      console.log('Login successful', response.data);
      navigate('/Home');
    } catch (error) { 
      console.error('Login error', error);
      setError('Email atau password salah. Silakan coba lagi.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <p className="text-[1.25rem] font-semibold text-[#515151]">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-3 text-[#515151] bg-[#F3F3F3] border rounded-lg w-[27rem] text-[1rem] mt-4"
          />
          <p className="text-[1.25rem] font-semibold text-[#515151] mt-[1.25rem]">Password</p>
          <div className="relative flex items-center">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-3 text-[#515151] bg-[#F3F3F3] border rounded-lg w-[27rem] text-[1rem] mt-4"
            />
            <span className="absolute ml-[24.5rem] mt-[1rem]" onClick={buttonPass}>
              {showPass ? <AiFillEye color="c4c4c4" size={24} /> : <AiFillEyeInvisible color="c4c4c4" size={24} />}
            </span>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display the error message */}
          <button type="submit" className='bg-main-color w-[27rem] h-[3.25rem] mt-[2.5rem] rounded-md text-white font-semibold'>
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
}