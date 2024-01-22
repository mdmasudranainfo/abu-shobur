'use client';
import { products } from '@/utils/product';
import Image from 'next/image';
import React, { useState } from 'react';
import { TiHeartFullOutline, TiHeartOutline } from 'react-icons/ti';
import { IoIosArrowUp } from 'react-icons/io';
import { Collapse } from 'react-collapse';
import Why_onedrob from '@/components/why_onedrob/Why_onedrob';
import Contact_us from '@/components/contact/Contact_us';
import DownloadApp from '@/components/contact/DownloadApp';
import Recommendations from '@/components/recommendations/Recommendations';

const ProductDetail = ({ params }) => {
  const allProduct = products;
  const product = allProduct.find(product => product.id == params.id);
  const [heart, setHeart] = useState(false);
  const size = ["36 IT", "37 IT", "38 IT", "39 IT", "40 IT", "41 IT"]
  const [showDetail, setShowDetail] = useState(false);
  const [showSelectionOption, setShowSelectionOption] = useState(false);
  const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);
  var discountPrice = (product?.discount / 100) * product?.price;
  const [selectSize, setSelectSize] = useState("Select size (Rick Owens Italy)")
  return (

    <div className=' py-10 px-2'>
      <div className="container">
        {/* Product detail section */}
        <div className="flex  flex-col md:flex-row gap-10">
          {/* image section */}
          <div className=" w-full md:w-[70%]">
            <div className="grid grid-cols-2 py-1">
              {/* image 1 */}
              <div className="">
                <Image
                  width={500}
                  src={product.image1}
                  alt=" Picture of the Product"
                />
              </div>
              {/* image 2 */}
              <div className="">
                <Image
                  width={500}
                  src={product.image2}
                  alt=" Picture of the Product"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 py-2">
              <Image
                width={500}
                src={product?.image1}
                alt=" Picture of the Product"
              />
              <Image
                width={500}
                src={product?.image2}
                alt=" Picture of the Product"
              />
              <Image
                width={500}
                src={product?.image1}
                alt=" Picture of the Product"
              />
            </div>
          </div>
          {/* content section */}
          <div className=" full md:w-[30%] ">
            <h1 className="text-[#727272]">{product?.category}</h1>
            <h2 className=" font-semibold text-[22px] primary">Miu Miu</h2>
            <h1 className="text-color text-[16px]  font-normal">V-neck melanie-effect cardigan</h1>
            <div className=' py-2'>
              <span className=' line-through  '>${product?.price} </span> <span className='px-1'>  -{product?.discount}%</span>
            </div>
            <div>
              <h1 className=' text-[18px]    font-medium text-[#e71d34] ' s> ${product?.price - discountPrice} </h1>
            </div>
            <div className='  my-8 cursor-pointer inline-block bg-[#F5F5F5] py-3 px-4 rounded-lg'>
              <p className='text-[14px] font-bold  secondary underline'>Shop All Sale</p>
            </div>
            <p className="text-right underline text-sm">Size guide</p>

            {/*  */}
            <div className=" mt-2">

              <div className='  relative  bg-white '>
                <div className='w-full border  bg-white   z-30 absolute border-stone-800 rounded-md   '>
                  <div onClick={() => setShowSelectionOption(!showSelectionOption)} className='p-2 flex justify-between items-center gap-3 cursor-pointer'>
                    <h1> {selectSize} </h1>
                    <div>
                      <IoIosArrowUp
                        className={`${showSelectionOption ? '' : "rotate-180"}   text-colo duration-500`}
                        size={20}
                      />
                    </div>
                  </div>
                  <Collapse isOpened={showSelectionOption}>
                    {
                      showSelectionOption ? <div className='  bg-white border border-[#d8d2d26f] py-2'>
                        {
                          size?.map((item, index) => <p onClick={()=> {setSelectSize(item),setShowSelectionOption(false)}} key={index} className='hover:bg-[#F5F5F5] w-full flex justify-between items-center cursor-pointer  px-3  duration-200  secondary p-[9px] '> {item} </p>)
                        }
                      </div> : null
                    }
                  </Collapse>
                </div>
              </div>

            </div>

            {/* buttons */}
            <div className="flex mt-20 gap-4 justify-between">
              <button className=" rounded-[8px] w-[50%] text-[18px] px-6 duration-300  hover:bg-[#0000007a] py-[6px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg ">
                Add To Bag
              </button>
              <button className=" rounded-[8px] w-[50%] text-[18px] px-6 duration-300 py-[6px] flex justify-center items-center  font-medium  capitalize primary border-black border ">
                <span>Wishlist</span>
                <div
                  onMouseLeave={() => setHeart(false)}
                  onMouseMoveCapture={() => setHeart(true)}
                  className=""
                >
                  {heart ? (
                    <TiHeartFullOutline size={24} />
                  ) : (
                    <TiHeartOutline size={24} />
                  )}
                </div>
              </button>
            </div>

            <div className="mt-8">
              <p className="  text-base uppercase text-color ">ESTIMATED DELIVERY</p>
              <p className=' text-[14px] font-normal text-color'>Jan 19 - Jan 23</p>
            </div>
          </div>
        </div>

        {/* tab  */}

        <div className="flex items-center gap-2 flex-wrap py-2  ">
          <p className="hover:underline text-[14px] cursor-pointer">Women Home</p>
          <span className='text-[12px]'>{'>'}</span>
          <p className="hover:underline text-[14px] cursor-pointer">Miu Miu</p>
          <span className='text-[12px]'>{'>'}</span>
          <p className="hover:underline text-[14px] cursor-pointer">Clothing</p>
          <span className='text-[12px]'>{'>'}</span>
          <p className="hover:underline text-[14px] cursor-pointer">Cardigans</p>
        </div>

        {/* the detail accordion */}
        <div className="mt-10 py-2 border-b">
          <div
            onClick={() => setShowDetail(!showDetail)}
            className="flex justify-between cursor-pointer"
          >
            <h2 className="font-medium text-[17px] text-color">THE DETAILS</h2>
            <IoIosArrowUp
              className={`${!showDetail && 'rotate-180'}   text-colo duration-500`}
              size={20}
            />
          </div>
          <Collapse isOpened={showDetail}>
            <div className="grid grid-cols-3 py-4">
              <div className="">
                <h1 className="  text-[#727272]">{product?.category}</h1>
                <h2 className="font-bold text-[22px] secondary  uppercase  tracking-wider ">Miu Miu</h2>
                <h1 className=" text-[14px] font-normal  text-color ">V-neck melanie-effect cardigan</h1>
                <div className="mt-5">
                  <h2 className=" text-[18px] font-medium secondary">Highlights</h2>
                  <ul className=" pt-2  space-y-[2px]">
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px] bg-black' />
                      <span className=' text-color text-[15px] font-normal'>lavender purple</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>virgin wool-cashmere blend</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>knitted construction</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>mélange effect</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>V-neck</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>front button fastening</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>drop shoulder</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>long sleeves</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>ribbed cuffs and hem</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>two front patch pockets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className=' w-[4px] h-[5px]   bg-black' />
                      <span className=' text-color text-[15px] font-normal'>straight hem</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="">
                  <h2 className=" text-[18px] font-medium  primary">Composition</h2>
                  <p className="pt-1 text-[14px]">
                    Cashmere 62%, Virgin Wool 38%
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className=" text-[18px] font-medium  primary">Wearing</h2>
                  <p className="pt-1 text-[14px]">
                    The model is wearing size 42.
                  </p>
                </div>
                <div className="mt-8">
                  <h2 className=" text-[18px] font-medium  primary">Product IDs</h2>
                  <p className="pt-1 text-[14px]">FARFETCH ID: 22503679</p>
                  <p className="pt-1 text-[14px]">
                    Brand style ID: MMF759S232138F
                  </p>
                </div>
              </div>

              <div className="">
                <Image src={product?.image1} alt="" />
              </div>
            </div>
          </Collapse>
        </div>

        {/* DELIVERY & RETURNS accordion */}

        <div className="mb-10 py-3 border-b ">
          <div
            onClick={() => setShowDeliveryDetails(!showDeliveryDetails)}
            className="flex justify-between cursor-pointer"
          >
            <h2 className="font-medium text-[17px] text-color">DELIVERY & RETURNS</h2>
            <IoIosArrowUp
              className={`${!showDeliveryDetails && 'rotate-180'} duration-500`}
              size={20}
            />
          </div>
          <Collapse isOpened={showDeliveryDetails}>
            <div className="grid grid-cols-3 py-4 gap-3">
              <div className="">
                <div className="mt-5">
                  <h2 className="font-semibold">We ve got your back</h2>
                  <ul className="">
                    <li className="flex  items-start gap-3 ">
                      <div>
                        <div className=' mt-2 w-[4px] h-[5px] bg-black'>
                        </div>
                      </div>
                      <span className='  '>
                        One delivery fee to most locations (check our Orders &
                        Delivery page)
                      </span>
                    </li>
                    <li className="flex  items-start gap-3 ">
                      <div>
                        <div className='mt-2  w-[4px] h-[5px] bg-black'>
                        </div>
                      </div>
                      <div>
                        <span className='  '>
                          Free returns within 14 days (excludes final sale and
                          made-to-order items, face masks and certain products
                          containing hazardous or flammable materials, such as
                          fragrances and aerosols)
                        </span>
                      </div>
                    </li>

                  </ul>

                  <div className="">
                    <div className=" mt-10">
                      <h2 className="font-semibold ">Import duties information</h2>
                      <p className="pt-1">
                        Let us handle the legwork. Delivery duties are included in
                        the item price when shipping to all EU countries
                        (excluding the Canary Islands), plus The United Kingdom,
                        USA, Canada, China Mainland, Australia, New Zealand,
                        Puerto Rico, Switzerland, Singapore, Republic Of Korea,
                        Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia, Taiwan
                        Region, Thailand, U.A.E., Japan, Brazil, Isle of Man, San
                        Marino, Colombia, Chile, Argentina, Egypt, Lebanon, Hong
                        Kong SAR, Bahrain and Turkey. All import duties are
                        included in your order – the price you see is the price
                        you pay
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="">
                  <h2 className="font-semibold">Estimated delivery</h2>
                  <p className="pt-1 text-[14px]">Express: Jan 19 - Jan 23</p>
                </div>

                <div className="mt-8">
                  <span></span>
                  <p className="pt-1 text-[14px]">
                    The model is wearing size 42.
                  </p>
                </div>
              </div>

              <div className="">
                <Image src={product?.image1} alt="" />
              </div>
            </div>
          </Collapse>
        </div>

        {/* select box  */}
        {/* recommend product  */}
        <Recommendations></Recommendations>
        <Why_onedrob></Why_onedrob>
        {/* const us  */}
        <Contact_us></Contact_us>
        <DownloadApp></DownloadApp>
      </div>
    </div>
  );
};

export default ProductDetail;
