
import DownloadApp from '@/components/contact/DownloadApp';
import Need_help from '@/components/contact/Need_help';
import Services from '@/components/contact/Services';
import Add_product from '@/components/product/Add_product';
import Recently_viewed from '@/components/product/recently-viewed/Recently_viewed';
import YourWishlist from '@/components/product/yourWishlist/YourWishlist';
import Recommendations from '@/components/recommendations/Recommendations';
import Link from 'next/link';

const page = () => {

     return (
          <div>
               <div className=' container'>
                    <div className=' px-4 py-5'>
                         <div className='  flex  flex-col lg:flex-row  gap-6 md:gap-11 '>
                              <div className=' w-full '>
                                   <h1 className='text-[30px] font-bold   primary'>SHOPPING BAG</h1>
                                   <Add_product></Add_product>
                                   <Add_product></Add_product>
                              </div>
                              <div className=' lg:w-[390px]  pt-7 lg:pt-0'>
                                   <div className='   hidden lg:block'>
                                        <Link className='text-[13px] underline text-end font-normal secondary' href={'/product'}> Continue  Shopping </Link>
                                   </div>
                                   <div className=' lg:pt-10'>
                                        <h2 className='text-[19px] secondary font-medium'>Summary</h2>

                                        <div className=' pt-6'>
                                             <div className=' flex justify-between gap-2 items-center'>
                                                  <p>Subtotal</p>
                                                  <span>$3,089.00</span>
                                             </div>
                                             <div className='  py-3 flex justify-between gap-2 items-center'>
                                                  <p>Delivery</p>
                                                  <span>$24.00</span>
                                             </div>
                                             <div className=' my-2 h-[2px] w-full bg-[#aca2a2d7] '></div>

                                             <div className='  py-3 flex justify-between gap-2 items-center'>
                                                  <p className=' font-bold'>Total</p>
                                                  <p>USD  <span className=' font-bold'>$3,113.00</span></p>
                                             </div>
                                        </div>
                                        <div className=' py-2 w-full'>
                                             <Link href={'/checkout/basket'} className=' w-full text-white block text-center  duration-200    hover:bg-[#00000073]  primary_bg px-2 py-[10px] rounded-lg text-[16px] font-bold'>Go To Checkout</Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <Services>  </Services>
               <div className='container'>
                    <div className=' py-3'>
                         <YourWishlist></YourWishlist>
                         <Recommendations></Recommendations>
                         <Recently_viewed></Recently_viewed>
                    </div>
               </div>
               <div className=' '>
                    <Need_help></Need_help>
               </div>
               <div className=' container'>
                    <DownloadApp></DownloadApp>
               </div>


          </div>
     );
};

export default page;