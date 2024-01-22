"use client"

import Link from "next/link";
import { Collapse } from "react-collapse";
import { IoMdClose } from "react-icons/io";

const NavbarModal = ({ isOpen, setIsOpen }) => {

     const closeModal = () => {
          setIsOpen(false);
     };

     return (
          <div>
               <Collapse isOpened={isOpen}>

                    {isOpen && (
                         <div className="modal  py-5  transition-all duration-300 absolute   right-[360px] top-16  w-[350px] rounded-xl  z-50 overflow-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  bg-white  ">
                              <div className="modal-container   mx-auto  overflow-hidden">
                                   <div className="modal-content w-full ">
                                        <div className=" px-5 flex items-center justify-between gap-2">
                                             <h1 className=" text-[18px] font-medium primary">Shamim Hossain</h1>
                                             <div onClick={closeModal} className=" cursor-pointer p-1 rounded-md hover:bg-[#F5F5F5]" >
                                                  <IoMdClose size={24} />
                                             </div>
                                        </div>
                                        <div>
                                              {/* account common link  */}
                                             <div className=" py-3">
                                                  <Link onClick={() => setIsOpen(false)} className="   hover:bg-[#F5F5F5] text-[14px]  text-color  px-5 my-1   font-normal py-2 block w-full " href={"/"}>Details and password</Link>
                                                  <Link onClick={() => setIsOpen(false)} className="   hover:bg-[#F5F5F5] text-[14px] text-color  px-5 my-1   font-normal py-2 block w-full " href={"/"}>Membership</Link>
                                                  <Link onClick={() => setIsOpen(false)} className="   hover:bg-[#F5F5F5] text-[14px] text-color  px-5 my-1   font-normal py-2 block w-full " href={"/"}>Orders and returns</Link>
                                                  <Link onClick={() => setIsOpen(false)} className="   hover:bg-[#F5F5F5] text-[14px] text-color  px-5 my-1   font-normal py-2 block w-full " href={"/"}>Preferences</Link>
                                                  <Link onClick={() => setIsOpen(false)} className="   hover:bg-[#F5F5F5] text-[14px] text-color  px-5 my-1   font-normal py-2 block w-full " href={"/"}>Account credit</Link>

                                             </div>
                                              {/* modal action  */}
                                             <div className=" px-3 flex items-center gap-4 justify-end">
                                                  <Link onClick={() => setIsOpen(false)} href={"/"}>   <button className="rounded-[8px] text-[18px] px-4 duration-300  hover:bg-[#0000000e]   py-[6px] flex justify-center items-center  font-medium  capitalize   ">Sign out</button></Link>
                                                  <Link onClick={() => setIsOpen(false)} href={"/useraccount"}>  <button className="rounded-[8px] text-[18px] px-4 duration-300  hover:bg-[#0000007a] py-[6px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg ">My Account</button></Link>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                    )}
               </Collapse>
          </div>
     );
};

export default NavbarModal;
