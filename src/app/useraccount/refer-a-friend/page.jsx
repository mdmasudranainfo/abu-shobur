import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';
import React from 'react';

const page = () => {
     return (
          <div>
                <MyAccount />
               <CommonTitle text={"Refer a friend"}></CommonTitle>
          </div>
     );
};

export default page;