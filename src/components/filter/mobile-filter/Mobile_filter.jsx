"use client"
import { filterCategory } from "@/utils/filter/filter_category";
import { quickSort } from "@/utils/filter/quickSort";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Mobile_sub_category from "./Mobile_sub_category";
import { toggle } from "@/redux/features/filterToggle/FilterToggle";


const Mobile_filter = () => {
     const dispatch = useDispatch();
     const [active, setActive] = useState(false)
     const [categoryValue, setCategoryValue] = useState([]);
     const { filter } = useSelector((state) => state.filter_toggle);
     const [selectedOption, setSelectedOption] = useState(null);

     return (
          <div className={`${filter ? "w-full block" : " w-[0] hidden"} pt-10 transition-all `}>
               <div className={`    block md:hidden`}>
                    <div className=" w-full bg-white z-50   h-screen fixed top-0 bottom-0 p-4 sm:p-12 ">
                         {active ?
                              <Mobile_sub_category categoryValue={categoryValue} setActive={setActive} ></Mobile_sub_category>

                              : <div className=" relative">
                                   <div>
                                        <div className="    w-full pr-11 ">
                                             <div className=" flex  justify-end items-center">

                                                  <div className=" cursor-pointer hover:bg-[#F5F5F5]" onClick={() => dispatch(toggle())}>
                                                       <IoMdClose size={24} />
                                                  </div>
                                             </div>
                                        </div>

                                        <div>
                                             <div>
                                                  <div className=" flex  flex-col gap-2  py-2">
                                                       <h1 className="text-[18px]    primary font-semibold  ">Sort by</h1>

                                                       <div className=' relative flex items-start justify-start  h-[1px] bg-[#110e0e47] w-full'>
                                                            <div className={`   flex justify-start items-center  py-[1.5px]  rounded-sm bg-black  w-[20%] `}>

                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div>
                                                       {quickSort?.map((item, index) => <div className=" py-2" key={index}>
                                                            <label className=" flex items-center gap-2" htmlFor={item?.name}>
                                                                 <input checked={selectedOption == item?.name} onChange={(e) => setSelectedOption(e.target.value)} setSelectedOption type="radio" value={item?.name} name="" id={item?.name} />
                                                                 <p>{item?.name} </p>
                                                            </label>

                                                       </div>)
                                                       }
                                                  </div>
                                             </div>
                                             {/* filter section  */}
                                             <div>
                                                  <div className=" flex  flex-col gap-2  py-4">
                                                       <h1 className="text-[18px]    primary  font-semibold  ">Filter</h1>

                                                       <div className=' relative flex items-start justify-start  h-[1px] bg-[#110e0e47] w-full'>
                                                            <div className={`   flex justify-start items-center  py-[1.5px]  rounded-sm bg-black  w-[20%] `}>

                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div>
                                                       {
                                                            filterCategory?.map((item, index) => <div onClick={() => { setActive(true), setCategoryValue(item?.sub) }} key={index}>
                                                                 <div className='hover:bg-[#F5F5F5]  text-start px-2  py-[10px] duration-150 cursor-pointer'>
                                                                      <p className='text-[15px] capitalize'> {item?.name} </p>
                                                                 </div>
                                                            </div>)
                                                       }
                                                  </div>

                                             </div>
                                        </div>
                                   </div>
                              </div>
                         }



                    </div>
               </div>
          </div>
     );
};

export default Mobile_filter;