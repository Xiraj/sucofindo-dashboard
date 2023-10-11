import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function LoginForm () {
    const [showPass, setShowPass] = useState(false);
    const buttonPass = () => {
      setShowPass((prevState) => !prevState);
    };
  return (
    <div>
        <form>
            <div>
                <p className="text-[1.25rem] font-semibold text-[#515151] ">Email</p>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="py-3 px-3 text-[#515151] bg-[#F3F3F3] border rounded-lg w-[27rem] text-[1rem] mt-4"
                />
                <p className="text-[1.25rem] font-semibold text-[#515151] mt-[1.25rem] ">Password</p>
                <div className="relative flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="py-3 px-3 text-[#515151] bg-[#F3F3F3] border rounded-lg w-[27rem] text-[1rem] mt-4"
                  />
                  <span className="absolute ml-[24.5rem] mt-[1rem]" onClick={buttonPass} >
                    { showPass? <AiFillEye color="c4c4c4" size={24} /> : <AiFillEyeInvisible color="c4c4c4" size={24} /> }
                  </span>
                </div>
                <Link to='/Home'>
                  <button className='bg-main-color w-[27rem] h-[3.25rem] mt-[2.5rem] rounded-md text-white font-semibold'>
                    Masuk
                  </button>
                </Link>
            </div>
        </form>
    </div>
  )
}
