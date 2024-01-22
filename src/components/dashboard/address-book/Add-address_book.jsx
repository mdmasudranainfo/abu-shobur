"use client"
import Image from 'next/image';
import { IoIosArrowUp } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { countryData } from '@/utils/country/country';
import { Collapse } from 'react-collapse';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import image from "../../../../public/images/category/bagnladesh.jpg"
const Add_Address_book = () => {
     const [selectCountry, setSelectCountry] = useState({ name: "bangladesh", image: image });
     const [activeCountry, setActiveCountry] = useState(false);
     const [selectPhone, setSelectPhone] = useState({ name: "bangladesh", image: image, phoneCode: "+088" });
     const [activePhone, setActivePhone] = useState(false);
    
     return (
          <div>
               <div className=' py-5'>
                    <div>
                         <p className='text-[16px] font-medium text-black '>You currently have no addresses saved</p>
                         <p className='text-[15px] font-medium text-color py-1 '>Add an address for a quicker checkout experience</p>
                    </div>

                    <div className=' border border-[#2e2e2eaf] p-4 '>
                         <div>
                              <h4 className='text-[16px] font-medium text-black '>Add Address</h4>
                              <p className='text-[14px] font-medium text-color py-1 '>* Required fields</p>
                              <p className=' py-2 text-[14px] text-color'>Please complete the form in alphanumeric characters only</p>
                         </div>

                         <div className='  lg:max-w-[70%]'>
                              <div className=' flex md:flex-row flex-col items-start gap-4'>
                                   <div className=' w-full'>
                                        <label className='text-[15px]   secondary' htmlFor="">Fist Name *</label>
                                        <input type="text" name="name" className=' mt-1 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                   </div>
                                   <div className=' w-full'>
                                        <label className='text-[15px]   secondary' htmlFor="">Last name *</label>
                                        <input type="text" name="name" className=' mt-1 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                   </div>
                              </div>

                              <div>
                                   <div className=' py-4'>
                                        <label className='text-[15px]   secondary' htmlFor="">Country/region *</label>
                                        {/* your  country select  */}

                                        <div className=' relative'>
                                             <div onClick={() => setActiveCountry(!activeCountry)} className=' border border-[#3331318c] flex justify-between gap-2   rounded-[5px] cursor-pointer '>
                                                  <div className='flex items-center gap-2 py-2 px-3'>
                                                       <Image className=' object-fill h-[20px] w-[20px] rounded-full' src={selectCountry?.image} alt='image' />
                                                       <p className=' capitalize text-[14px] font-normal'>{selectCountry?.name}</p>
                                                  </div>
                                                  <div className=' border-l border-[#3331318c] py-2 px-3'>
                                                       <IoIosArrowUp
                                                            className={`${activeCountry ? '' : "rotate-180"}   text-colo duration-500`}
                                                            size={20}
                                                       />
                                                  </div>
                                             </div>
                                             <Collapse isOpened={activeCountry}>
                                                  {
                                                       activeCountry ? <div className='   z-40 absolute w-full border-b border-l border-r border-[#0000003b] bg-white'>
                                                            <div className=' relative  my-2 border-b  border-[#00000039] '>
                                                                 <input className='   w-full    outline-0   border-[#0000003b]       py-[6px] px-10 ' type="search" placeholder='Search' name="" id="" />
                                                                 <CiSearch className=' absolute top-[6px] left-1' size={24} />
                                                            </div>
                                                            <div>
                                                                 {
                                                                      countryData?.map((item, index) => <div onClick={() => { setActiveCountry(false), setSelectCountry(item) }} className=' hover:bg-[#F5F5F5] duration-100 cursor-pointer  my-2' key={index}>
                                                                           <div className='flex items-center gap-2 py-2 px-3'>
                                                                                <Image className=' object-fill h-[20px] w-[20px] rounded-full' src={item?.image} alt='image' />
                                                                                <p className=' text-[14px] font-normal'> {item?.name} </p>
                                                                           </div>

                                                                      </div>)
                                                                 }
                                                            </div>

                                                       </div> : null
                                                  }

                                             </Collapse>
                                        </div>
                                   </div>
                                   <div className=' py-3'>
                                        <label className='text-[15px]   secondary' htmlFor="">Address *</label>
                                        <input type="text" name="name" className=' mt-2 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                        <input type="text" name="name" className=' mt-2 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                        <input type="text" name="name" className=' mt-2 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                        <p className='text-[13px] secondary py-1'>Please note that for security reasons we cannot deliver to PO boxes addresses</p>
                                   </div>

                                   <div className=' flex md:flex-row flex-col items-start gap-4'>
                                        <div className=' w-full'>
                                             <label className='text-[15px]   secondary' htmlFor="">City *</label>
                                             <input type="text" name="name" className=' mt-1 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                        </div>
                                        <div className=' w-full'>
                                             <label className='text-[15px]   secondary' htmlFor="">State (Recommended)</label>
                                             <input type="text" name="name" className=' mt-1 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                        </div>
                                   </div>
                                   <div className=' flex md:flex-row flex-col items-start gap-4'>
                                        <div className=' w-full'>
                                             <label className='text-[15px]   secondary' htmlFor="">Postal or zip code *</label>
                                             <input type="text" name="name" className=' mt-1 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                        </div>
                                        <div className=' w-full'>
                                             <label className='text-[15px] secondary' htmlFor="">Phone *</label>
                                             <div className=' flex items-center gap-1'>
                                                  <div className=' relative'>
                                                       <div onClick={() => setActivePhone(!activePhone)} className=' border border-[#3331318c] flex justify-between gap-2   rounded-[5px] cursor-pointer '>
                                                            <div className='flex items-center gap-1 py-2 px-3 w-full'>
                                                                 <Image className=' object-fill h-[17px] w-[17px] rounded-full' src={selectPhone?.image} alt='image' />
                                                                 <p className=' capitalize text-[14px] font-normal'>{selectPhone?.phoneCode}</p>
                                                            </div>
                                                            <div className=' border-l border-[#3331318c] py-[10px] px-3'>
                                                                 <IoIosArrowUp
                                                                      className={`${activePhone ? '' : "rotate-180"}   text-colo duration-500`}
                                                                      size={20}
                                                                 />
                                                            </div>
                                                       </div>
                                                       <Collapse isOpened={activePhone}>
                                                            {/* select phone code  */}
                                                            {
                                                                 activePhone ? <div className='  max-h-[250px]  overflow-y-scroll absolute z-40 w-full border-b border-l border-r border-[#0000003b] bg-white'>
                                                                      <div className=' relative  my-2 border-b  border-[#00000039] '>
                                                                           <input className='   w-full    outline-0   border-[#0000003b] py-[6px] px-7 ' type="text" placeholder='Search' name="" id="" />
                                                                           <CiSearch className=' absolute top-[7px] left-1' size={20} />
                                                                      </div>
                                                                      <div>
                                                                           {
                                                                                countryData?.map((item, index) => <div onClick={() => { setActivePhone(false), setSelectPhone(item) }} className=' hover:bg-[#F5F5F5] duration-100 cursor-pointer  my-2' key={index}>
                                                                                     <div className='flex items-center gap-2 py-2 px-3'>
                                                                                          <Image className=' object-fill h-[20px] w-[20px] rounded-full' src={item?.image} alt='image' />
                                                                                          <p className=' text-[14px] font-normal'> {item?.phoneCode} </p>
                                                                                     </div>

                                                                                </div>)
                                                                           }
                                                                      </div>

                                                                 </div> : null
                                                            }

                                                       </Collapse>
                                                  </div>
                                                  <div className=' w-full pb-1'>
                                                       <input type="text" name="name" className=' mt-1 w-full rounded-[5px] border  outline-[#0000009b]  border-[#3331318c] py-2 px-3' value="" />
                                                  </div>

                                             </div>
                                             <p className='text-[13px] secondary py-1'>Just in case we need to contact you about your order</p>

                                        </div>

                                   </div>
                                   <div className=' py-2'>
                                        <div className=' flex items-center gap-4'>
                                             <input type="checkbox" name="" id="" />
                                             <span className='text-[15px] secondary'>Make preferred delivery address</span>
                                        </div>
                                        <div className=' flex items-center gap-4'>
                                             <input type="checkbox" name="" id="" />
                                             <span className='text-[15px] secondary'>Make preferred billing address</span>
                                        </div>

                                   </div>

                              </div>
                         </div>

                         <div className=' flex justify-end'>
                              <button className=' text-[16px] rounded-[8px] px-6 duration-300  hover:bg-[#0000007a] py-[8px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg '>  <span>Save address</span> <MdOutlineKeyboardArrowRight className=' text-white' size={24}></MdOutlineKeyboardArrowRight  > </button>
                         </div>

                    </div>


               </div>
          </div>
     );
};

export default Add_Address_book;