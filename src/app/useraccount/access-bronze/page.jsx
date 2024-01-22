import CommonTitle from '@/components/dashboard/CommonTitle';
import MyAccount from '@/components/dashboard/MyAccount';


import React from 'react';

const page = () => {
     return (
          <div>
               <MyAccount></MyAccount>
               <CommonTitle text={"Access Bronze"}></CommonTitle>
          </div>
     );
};

export default page;