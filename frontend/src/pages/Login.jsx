import { useState, useContext } from "react";
import { Link, useNavigate} from 'react-router-dom';
import {BASE_URL } from '../config';
import {toast} from 'react-toastify';
import { AuthContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);


  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const submitHandler = async event=>{

    
    event.preventDefault();
    setLoading(true)

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json()

      if(!res.ok){
        throw new Error(result.message)
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user:result.data,
          token:result.token,
          role:result.role,
        },
      });

      console.log(result, "login data")

      setLoading(false);
      toast.success(result.message);
      navigate('/home')
    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
    
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-5"> {/* Adjusted padding here */}
        <h3 className="text-headingColor text-[22px] text-center leading-9 font-bold mb-7"> {/* Adjusted margin here */}
          Hello! <span className="text-primaryColor">Welcome</span> Back
        </h3>
        <form className="py-2 md:py-0" onSubmit={submitHandler}>
          <div className="mb-3"> {/* Adjusted margin here */}
            <input type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email} onChange={handleInputChange}
              className="w-full py-2 border-b border-solid border-[#0066ff61]
                focus:outline-none focus:border-b-primaryColor text-[16px] leading-6
                text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mb-3"> {/* Adjusted margin here */}
            <input type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password} onChange={handleInputChange}
              className="w-full py-2 border-b border-solid border-[#0066ff61]
                focus:outline-none focus:border-b-primaryColor text-[16px] leading-6
                text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mt-4"> {/* Adjusted margin here */}
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-30px rounded-lg px-4 py-2">
               {/* Adjusted padding and height here */}
              { loading ? <HashLoader size={25} color="#ffff"/> : 'login'}
            </button>
          </div>
          <p className="mt-4 text-textColor text-center"> {/* Adjusted margin here */}
            Don&apos;t  have an account? <Link to='/register' className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;
