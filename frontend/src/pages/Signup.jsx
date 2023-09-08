import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/doctor-img01.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState('')

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    photo:'',
    gender:'',
    role:'patient'
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleFileInputChange = async (event) =>{

    const file = event.target.files[0]
  // later we will use cloudinary to upload images
    {/* console.log(file) */}
  }

  const submitHandler = async event=>{
    event.preventDefault();
    
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 '> {/* Added 'gap-6' to create space */}
          {/* Image box */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg' style={{ width: '400px', height: '300px' }}>
            <figure className='rounded-l-lg'>
               <img src={signupImg} alt='' className='w-full h-full rounded-l-lg'/>
            </figure>
          </div>
          {/* SIGN UP FORM */}
          <div className="rounded-l-lg lg:pl-16 py-1">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">Create an <span className='text-primaryColor'>account</span></h3>
            {/* Your signup form content here */}
          <form onSubmit={submitHandler}>
          <div className="mb-1"> {/* Adjusted margin here */}
            <input type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full py-2 border-b border-solid border-[#0066ff61]
                focus:outline-none focus:border-b-primaryColor text-[16px] leading-6
                text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mb-1"> {/* Adjusted margin here */}
            <input type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-2 border-b border-solid border-[#0066ff61]
                focus:outline-none focus:border-b-primaryColor text-[16px] leading-6
                text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mb-3"> {/* Adjusted margin here */}
            <input type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-2 border-b border-solid border-[#0066ff61]
                focus:outline-none focus:border-b-primaryColor text-[16px] leading-6
                text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mb-5 flex items-center justify-between">
            <label 
            className='text-headingColor font-bold text-[15px] leading-7 px-4 py-3 focus:outline-none'
            >
             Are you a:
             <select 
             name='role'
             value={formData.role}
             onChange={handleInputChange}
             className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
             >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
             </select>
            </label>

            <label 
            className='text-headingColor font-bold text-[15px] leading-7 px-4 py-2 focus:outline-none'
            >
             Gender:
             <select 
             name='gender'
             value={formData.gender}
             onChange={handleInputChange}
             className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
             >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="custom">Custom</option>

             </select>
            </label>
          </div>
          <div className='mb-3 flex items-center gap-3'>
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
              <img src={avatar} alt=''  className='w-full rounded-full'/>
            </figure>
            <div className='relative w-[160px] h-[50px]'>
              <input
               type='file'
               name='photo'
               id='customFile'
               onChange={handleFileInputChange}
               accept='.jpg, .png'
               className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
               />
               <label htmlFor='customFile' 
               className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff45]
               text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                Upload Photo
               </label>
            </div>
          </div>
          <div className="mt-3"> {/* Adjusted margin here */}
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-30px rounded-lg px-4 py-2"> {/* Adjusted padding and height here */}
              Sign Up
            </button>
          </div>
          <p className="mt-3 text-textColor text-center"> {/* Adjusted margin here */}
            Already have an account? <Link to='/login' className="text-primaryColor font-medium ml-1">Login</Link>
          </p>
           </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;