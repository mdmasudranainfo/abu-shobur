
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SectionTitle from '@/share/sectionTitle/sectionTitle';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';
import Product_card_primary from '../Product_card_primary';
import { products } from '@/utils/product';

const Recently_viewed = () => {
     const swiperRef = useRef(null);
     const goNext = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slideNext();
          }
     };
     const goPrev = () => {
          if (swiperRef.current) {
               swiperRef.current.swiper.slidePrev();
          }
     };


     return (
          <div className=' py-20'>

               <div>
                    <SectionTitle title="Recently viewed" action={"Shop new"}></SectionTitle>
               </div>
               <div className='  group max-w-full  flex justify-center items-center  mx-auto relative py-9'>

                    <Swiper
                         ref={swiperRef}
                         slidesPerView={1}
                         spaceBetween={2}
                         loop={true}
                         speed={500}

                         breakpoints={{
                              400: {
                                   slidesPerView: 2,
                                   spaceBetween: 4,
                              },
                              640: {
                                   slidesPerView: 2,
                                   spaceBetween: 4,
                              },
                              768: {
                                   slidesPerView: 3,
                                   spaceBetween: 4,
                              },
                              1024: {
                                   slidesPerView: 3,
                                   spaceBetween: 9,
                              },
                              1280: {
                                   slidesPerView: 4,
                                   spaceBetween: 20,
                              },
                              1536: {
                                   slidesPerView: 5,
                                   spaceBetween: 5,
                              },
                         }}
                         modules={[Pagination, Navigation]}
                         className="mySwiper overflow-hidden "
                    >
                         {products?.map((product, index) => (
                              <SwiperSlide className="  px-2 " key={index}>
                                   {/* slider component card   */}
                                   <Product_card_primary width={"max-w-[280px]"} product={product}></Product_card_primary>
                              </SwiperSlide>
                         ))}
                    </Swiper>

                    <div className="arrow absolute   md:hidden group-hover:block   top-1/2  z-30  w-full ">
                         <div className=" flex justify-between items-center  ">
                              <div
                                   className="flex cursor-pointer justify-center items-center shadow h-[30px] border border-[#000000ce] w-[30px] bg-[#fff]   duration-150  rounded-md "
                                   onClick={goPrev}
                              >
                                   {/*   button  */}
                                   <IoIosArrowBack size={18} />
                              </div>
                              <div
                                   className="flex cursor-pointer justify-center items-center shadow h-[30px] w-[30px] border border-[#000000ce] bg-[#fff]  duration-150 rounded-md "
                                   onClick={goNext}
                              >
                                   {/*  Next button  */}
                                   <IoIosArrowForward size={18} />

                              </div>
                         </div>
                    </div>

               </div>

          </div>
     );
};

export default Recently_viewed;