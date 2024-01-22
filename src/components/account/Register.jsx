import React from 'react';

import Link from 'next/link';

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from 'react-icons/fa';
import Input from '../inputfild/Input';


const Register = () => {
     return (
          <div>
               <div>
                    <form action=" ">
                         <div className=' py-1'>
                              <label className=' text-[13px] text-color' htmlFor=""> Name </label>
                              <div className='py-[2px]'>
                                   <Input type={"text"} name="name"></Input>
                              </div>
                         </div>
                         <div className=' py-1'>
                              <label className=' text-[13px] text-color' htmlFor=""> Email address </label>
                              <div className=' py-[2px]'>
                                   <Input type={"email"} name="email"></Input>
                              </div>
                         </div>
                         <div className=' py-1'>
                              <label className=' text-[13px] text-color' htmlFor=""> Password </label>
                              <div className=' py-[2px]'>
                                   <Input type={"password"} name="password"></Input>
                              </div>
                         </div>

                         <div>
                              <div>
                                   <p className=' text-[13px] font-normal  text-color'>Must have at least 8 characters
                                        Use at least 1 letter and 1 special character or number</p>
                                   <div className=' py-2'>
                                        <p className='text-[13px]   duration-150  font-normal capitalize text-color'>By registering, you agree to our   <Link className='underline hover:opacity-70' href={'/'}>Terms & Conditions</Link> , Privacy and Cookie Policy, and to <Link className='underline hover:opacity-70' href={'/'}>join our loyalty programme</Link>  </p>
                                   </div>

                                   <div className=' flex items-start gap-2 '>
                                        <div>
                                             <input type='checkbox' />
                                        </div>
                                        <p className='text-color text-[13px] font-normal'> Sign up and never miss out on exclusive member rewards, tailored new arrivals and new launches. Unsubscribe at the bottom of our emails. Find out more</p>
                                   </div>

                                   <div className=' py-3'>
                                        <button type='submit' className='rounded-[8px] w-full text-[18px] px-6 duration-300  hover:bg-[#0000007a] py-[6px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg'> Register</button>
                                   </div>
                              </div>
                         </div>
                    </form>

                    <div className=' text-center font-semibold'>OR</div>
                    <div className=' space-y-3'>
                         <div className=' flex p-2 gap-4 md:gap-10 cursor-pointer rounded-md border-[1px] border-black  hover:bg-[#F5F5F5] duration-200 transition'>
                              <div>
                                   <FcGoogle size={24}></FcGoogle>
                              </div>
                              <h1 className=' text-[15px] primary font-semibold'> Continue With Google</h1>
                         </div>
                         <div className=' flex p-2 gap-4 md:gap-10 cursor-pointer rounded-md border-[1px] border-black  hover:bg-[#F5F5F5] duration-200 transition'>
                              <div>
                                   <FaApple size={24}></FaApple>
                              </div>
                              <h1 className=' text-[15px] primary font-semibold'> Continue With Apple</h1>
                         </div>
                         <div className=' flex p-2 gap-4 md:gap-10 cursor-pointer rounded-md border-[1px] border-black  hover:bg-[#F5F5F5] duration-200 transition'>
                              <div>
                                   <FaFacebook className=' text-blue-500' size={24}></FaFacebook>
                              </div>
                              <h1 className=' text-[15px] primary font-semibold'> Continue With Facebook</h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;