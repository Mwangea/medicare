import React from 'react'
import { BiMenu } from "react-icons/bi";

const Tabs = ({tab, setTab}) => {
  return (
    <div>
        <span className='lg:hidden'>
            <BiMenu className="w-6 h-6 cursor-pointer"/>
        </span>
        <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
          <button>Overview</button>
        </div>
    </div>
  )
}

export default Tabs;