"use client"
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Register from './Register';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { account_toggle } from '@/redux/features/SingInSignOutToggle/SignInSingOutToggle';


const AccountModal = () => {
     const [active, setActive] = useState(1);
     const { SingInSingOut } = useSelector((state) => state?.Account_toggle);
     const dispatch = useDispatch();
  

     return (
          <div className={` ${SingInSingOut ? "fixed w-full block " : " hidden w-0 "}  duration-700   flex justify-center items-center z-50  gap-1 h-screen top-0 left-0 bottom-0 bg-[#a7a7a760]`}>
               <div className=' w-full md:max-w-[420px] bg-white p-4  shadow-md rounded-lg '>

                    <div className=' relative '>
                         <div className=' py-2 absolute bg-white w-full'>
                              <div className=' flex justify-between items-center gap-2'>
                                   <h1 className=' text-[20px] font-medium'>Come in   up</h1>
                                   <div onClick={()=>dispatch(account_toggle())} className=" cursor-pointer p-1 rounded-md hover:bg-[#F5F5F5]" >
                                        <IoMdClose size={24} />
                                   </div>
                              </div>
                              <div className='border-b  pt-4  border-[#00000021]  flex items-center gap-3 md:gap-6 text-[16px] text-color'>
                                   <div onClick={() => setActive(1)} className={` ${active == 1 ? " border-b-[2px] border-[#000]" : ""} duration-200 pb-1 text-color text-[15px] cursor-pointer `}>SIGN IN</div>
                                   <div onClick={() => setActive(2)} className={`  ${active == 2 ? " border-b-[2px] border-[#000]" : ""}  pb-1 duration-200 text-color text-[15px] cursor-pointer `}>{"I'M NEW HERE"}</div>
                              </div>
                         </div>

                         <div className=' pb-3  pt-24  px-1  max-h-[80vh] overflow-y-auto'>
                              {
                                   active == 1 ? <Login /> : <Register />
                              }

                         </div>
                    </div>

               </div>
          </div>
     );
};

export default AccountModal;