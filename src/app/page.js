
import DownloadApp from '@/components/contact/DownloadApp'
import Best_sale from '@/components/home/best-sale/Best_sale'
import Trending from '@/components/home/best-sale/trending/Trending'
import Destination from '@/components/home/destination/Destination'
import Site_process from '@/components/home/site_process/Site_process'
import Product from '@/components/product/Product'


export default function Home() {
  return (

    <div>
      <div className='container'>
        <div className=' pt-16  px-1 sm:px-5 md:px-10 w-full'>
          {/* new session title  */}
          <div className=' flex justify-between gap-4 flex-wrap items-center'>
            <h1 className=' text-[22px] font-normal text-color  leading-tight tracking-tighter'>New in: handpicked daily from the world’s best brands and boutiques</h1>
            <div>
              <button className=' py-[6px] px-[12px]  text-color  hover:bg-[#F5F5F5] font-bold border border-[#222] rounded-[8px]'>Shop new</button>
            </div>
          </div>
          {/* product card  */}
          <Product></Product>
          {/* best sale  */}
          <Best_sale></Best_sale>

          <Destination></Destination>
          {/* trending product  */}
          <Trending></Trending>
          <Site_process></Site_process>
          <DownloadApp></DownloadApp>
        </div>



      </div>
    </div>

  )
}
