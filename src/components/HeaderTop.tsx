import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { BiHeart } from 'react-icons/bi'
import { HiOutlineShoppingCart } from "react-icons/hi2";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
        <div className='container sm:flex justify-between items-center'>
            <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
                Logo
            </div>

            <div className='w-full sm:w-[70%] relative'>
                <input  className='border-gray-200 border p-2 px-4 rounded-lg w-full'
                   type="text"
                   placeholder='Enter any product name... '/>
                
                <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20}/>
            </div>

            <div className='hidden lg:flex gap-4 text-gray-500 text-[30px] '>
                <BiUser/>
                
                <div className='relative'>
                    <BiHeart className="text-3xl text-gray-600 hover:text-red-500 transition duration-300" />
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                    text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                            0
                </div>
                </div>

                <div className='relative'>
                    <HiOutlineShoppingCart className="text-3xl text-gray-600 hover:text-red-500 transition duration-300" />
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                    text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                            0
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
