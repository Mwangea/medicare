
import { formateDate } from '../../utils/FormatDate'
const DoctorAbout = () => {
  return (
    <>
    <div>
        <h3 className=' text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of 
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Musa Mwangea</span>
        </h3>
        <p className='text__para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
         ex ea commodo consequat
        </p>
    </div>
    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
        Education
        </h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                    {formateDate("07-06-2016")} - {formateDate("12-04-2018")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Agakhan Hospital, Nairobi.
                </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                    {formateDate("12-04-2010")} - {formateDate("12-04-2014")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        PHD in Surgeon
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Agakhan Hospital, Nairobi.
                </p>
            </li>
        </ul>
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate("12-04-2010")} - {formateDate("12-04-2014")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  Sr. Surgeon
                 </p>
                 <p className='text-[14px] leading-6 font-medium text-textColor'>
                   Aghakhan Hospital, Nairobi
                 </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate("12-04-2010")} - {formateDate("12-04-2014")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  Sr. Surgeon
                 </p>
                 <p className='text-[14px] leading-6 font-medium text-textColor'>
                   Aghakhan Hospital, Nairobi
                 </p>
            </li>
        </ul>
    </div>
    </>
  )
}

export default DoctorAbout