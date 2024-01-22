'use client';

import { data, mainCategory } from '@/utils/category';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { CiSearch } from 'react-icons/ci';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
import { toggle_search } from '@/redux/features/searchToggle/SearchToggle';

const CategoryNavbar = () => {
  const [showCard, setShowCard] = useState(false);
  const [showCardData, setShowCardData] = useState([]);
  const dispatch = useDispatch();


  var settings = {
    //

    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" py-2 relative w-full">
      <div className="container">
        <div className="  px-1 w-full">
          <div className=" flex justify-between items-center gap-2  px-2 md:gap-6">
            <div className=" w-full md:w-[70%] max-w-full px-4 category_slick">
              <Slider {...settings}>
                {mainCategory?.[0]?.category?.map((item, index) => (
                  <div
                    onMouseLeave={() => setShowCard(false)}
                    onMouseMoveCapture={() => {
                      setShowCard(true), setShowCardData(item);
                    }}
                    className={` ${index == 0 ? 'text-red-500' : ''}  `}
                    key={index}
                  >
                    <Link href={'/'}> {item?.name} </Link>
                  </div>
                ))}
              </Slider>
            </div>

            <div className=" hidden  border-[1.5px] border-[#727272] rounded-[5px] md:flex items-center   p-[6px] md:p-[10px] bg-white z-40 justify-start gap-2">
              <CiSearch className=" text-color" size={22} />
              <input onFocus={() => dispatch(toggle_search())}
                type="text"
                placeholder="Search"
                className=" w-full   text-[14px] font-normal border-none outline-0 r  "
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${showCard ? ' block' : ' hidden'
          } bg-[#3535355e] absolute z-30 top-10  h-screen w-full`}
      >
        <Collapse isOpened={showCard}>
          <div
            onMouseLeave={() => setShowCard(false)}
            onMouseMoveCapture={() => setShowCard(true)}
            className={`  bg-[#362929]    duration-300  `}
          >
            <div className=" bg-white  py-7 ">
              <div className=" container">
                <div className=" grid  grid-cols-3 gap-5 px-5">
                  <div className="col-span-2 w-full    pr-20">
                    <div className=" flex justify-between items-start">
                      {showCardData?.subCategory?.map((item, index) => (
                        <div key={index}>
                          <div>
                            <h1 className=" text-[18px] font-medium uppercase  text-[#3D3D3D] py-3  tracking-[1.2px]">
                              {' '}
                              {item?.name}{' '}
                            </h1>

                            <div>
                              {item?.option?.map((item, index) => (
                                <div className=" py-1" key={index}>
                                  <Link
                                    className=" capitalize    tracking-wide text-[15px]   text-[#3D3D3D] hover:underline"
                                    href={'/'}
                                  >
                                    {' '}
                                    {item?.name}{' '}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1 w-full pt-6">
                    <div className="  max-w-full max-h-[350px] overflow-hidden">
                      <Image
                        className=" h-full"
                        src={showCardData?.product?.image}
                        alt="image"
                      ></Image>
                    </div>

                    <div className=" py-2 mt-3">
                      <p className=" text-[12px] text-[#3D3D3D] capitalize font-normal">
                        Spotlight on
                      </p>
                      <h1 className=" text-[14px] text-[#3D3D3D] uppercase font-normal">
                        {showCardData?.product?.name}
                      </h1>
                      <Link
                        className=" text-[12px] font-normal  underline  text-[#3D3D3D]"
                        href={'/'}
                      >
                        {' '}
                        Shop new{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default CategoryNavbar;

// change mas
