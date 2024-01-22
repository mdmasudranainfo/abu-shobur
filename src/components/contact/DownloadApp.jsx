import Link from 'next/link';
import React from 'react';
import Input from '../inputfild/Input';
import Button from '../button/Button';
import download from "../../../public/images/category/scan.png"
import Image from 'next/image';

const DownloadApp = () => {
     return (
          <div className=' py-14 px-3'>
               <div className=' grid md:grid-cols-2   gap-2 md:gap-8'>
                    <div>
                         <h1 className='text-[22px]  tracking-wide uppercase  font-bold primary md:text-[30px]'>DOWNLOAD THE FARFETCH APP</h1>
                         <h5 className='text-[14px] secondary font-normal'>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS.  <Link className=' underline' href={"/"}>More about the app</Link> </h5>
                    </div>
                    <div className=' flex  flex-col md:flex-row items-start gap-2 md:gap-3'>
                         <div>
                              {/* send email  */}
                              <h5 className='text-[18px]  pb-3 font-medium secondary  uppercase'>EMAIL ME</h5>
                              <div className=' flex flex-col gap-2'>
                                   <p className='text-[14px] secondary font-normal'>Enter your email and we ll send you a link to download the free app
                                   </p>
                                   <div className=' md:max-w-[70%]'>
                                        <Input type="email" name={"email"} placeholder={"exam@gmail.com"}></Input>
                                   </div>

                                   <div>
                                        <Button type={"submit"} text={"send"}></Button>
                                   </div>

                              </div>

                         </div>
                         <div className=' sm:border-l sm:border-[#c4c2c2] p-4'>
                              <h1 className='text-[14px]  uppercase font-medium '>SCAN QR CODE</h1>
                              <div className=' py-1'>
                                   <Image className=' ' width={100} height={100} src={download} alt='image' />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DownloadApp;