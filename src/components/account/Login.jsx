'use client'

import Link from 'next/link';

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from 'react-icons/fa';
import Input from '../inputfild/Input';
import { useSession, signIn, signOut } from 'next-auth/react';



const Login = () => {

     const { data: session } = useSession()
     console.log(session);

     // const loginHandler = async(e) => {
     //      e.preventDefault();
     //      const form = e.target;
     //      const email = form.email.value;
     //      const password = form.password.value;
     //      console.log(email, password);

     //  try{
     //      const res =await fetch('http://127.0.0.1:8000/api/login', {
     //           method: 'POST',
     //           headers: {
     //                'Content-Type': 'application/json',
     //           },
     //           body: JSON.stringify({
     //                email,
     //                password,
     //           }),
     //          })
     //          const data = await res.json()
     //          console.log(data)
     //  }catch(e){
     //      console.log(e)
     //  }
     
     //    }


        const login_form_handler = async (e) => {
		e.preventDefault();
	//	setLoading(true);
		const target = e.target ;
         const email = target.email.value;
         const password = target.password.value;
      
		try {
			// setLoading(true);
			const result = await signIn('credentials', {
				email,
				password,
				from: 'login',
				redirect: false,
				//callbackUrl: '/',
			});

               console.log(result)
               // setLoading(false);

		} catch (error) {}

		//setLoading(false);
		target.reset();
	};
     return (
          <div>
               <div>
                    <form onSubmit={login_form_handler} action=''>
                         <div className=' py-1'>
                              <label className=' text-[13px] text-color' htmlFor=""> Email address </label>
                              <div className=' py-[2px]'>
                                   <Input type={"email"} name="email" placeholder=''></Input>
                                   {/* <input type={"email"} name="email" placeholder=''/> */}
                              </div>
                         </div>
                         <div className=' py-1'>
                              <label className=' text-[13px] text-color' htmlFor=""> Password </label>
                              <div className=' py-[2px]'>
                                   {/* <input type={"password"} name="password"  placeholder=''/> */}
                                   <Input type={"password"} name="password"  placeholder=''></Input>
                              </div>
                         </div>

                         <div>
                              <div>
                                   <div className=' flex items-start gap-2 '>
                                        <div>
                                             <input type='checkbox' />
                                        </div>
                                        <p className='text-color text-[13px] font-normal'>  Keep me signed in. <Link className='underline hover:opacity-70' href={'/'}> What s this?</Link>  </p>
                                   </div>
                                   <div className='text-color text-[13px] font-normal py-2'>
                                        <Link className='underline hover:opacity-70' href={'/'}>Forgot your password?</Link>
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

export default Login;