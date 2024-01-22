"use client"

import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import Add_Address_book from '@/components/dashboard/address-book/Add-address_book';
import Save_address from '@/components/dashboard/address-book/Save_address';

const Page = () => {
     return (
          <div>
               <MyAccount />
               <CommonTitle text={"Address book"}></CommonTitle>


                <div>
                <Save_address></Save_address>
                </div>
                  <Add_Address_book></Add_Address_book>

          </div>
     );
};

export default Page;