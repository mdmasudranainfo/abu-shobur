"use client"

import { toggle } from "@/redux/features/filterToggle/FilterToggle";
import { Collapse } from "react-collapse";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Filter_category from "./Filter_category";
import Filter_size from "./Filter_size";
import Filter_color from "../filter_color/Filter_color";

const FilterBox = () => {
     const { filter } = useSelector((state) => state.filter_toggle);
     const dispatch = useDispatch();
     return (
          <div>
               <div className={` ${filter ? " fixed bg-[#1a161645]" : " md:hidden hidden  bg-transparent"}   z-50  top-0 left-0  bottom-0 h-screen w-screen `}>

                    <div className=" flex items-start  gap-2">
                         <div className=" w-full sm:max-w-[450px]">
                              <Collapse isOpened={filter}>
                                   <div className="   relative max-w-[450px] bg-white  h-screen   shadow   ">
                                        <div className=" relative  px-4 md:px-6  py-3">
                                             <div className=" absolute top-0 w-full pr-11 ">
                                                  <div className=" flex  justify-between items-center">
                                                       <h1 className="text-[22px]    primary font-medium  ">All filter</h1>

                                                       <div className=" cursor-pointer hover:bg-[#F5F5F5]" onClick={() => dispatch(toggle())}>
                                                            <IoMdClose size={24} />
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className=" pt-16 ">
                                                  <div className=" pr-10">
                                                       <div className=" py-3">
                                                            <Filter_category></Filter_category>
                                                       </div>

                                                       <div className=" py-3">
                                                            <Filter_color></Filter_color>
                                                       </div>
                                                       <div className=" py-3">
                                                            <Filter_size></Filter_size>
                                                       </div>
                                                  </div>

                                             </div>

                                        </div>
                                        <div className="  absolute  bottom-0 w-full border-t-[.5px] pt-2 border-[#0000004a]">
                                             <div className=" flex justify-end   gap-3 px-4 md:px-6  py-3">

                                                  <button className="rounded-[7px] text-[16px] px-5 duration-300  hover:bg-[#0000000f]  py-[7px] flex justify-center items-center  font-medium  capitalize  "> Clear all </button>
                                                  <button className="rounded-[7px] text-[16px] px-5 duration-300  hover:bg-[#0000007a] py-[7px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg"> show {10}+ result</button>
                                             </div>
                                        </div>
                                   </div>

                              </Collapse>

                         </div>

                         <div onClick={() => dispatch(toggle())} className=" hidden sm:block sm:w-full  h-screen">

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FilterBox;