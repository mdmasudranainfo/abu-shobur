import React from 'react';

const Button = ({type,text}) => {
     return (
          <div>
             <button className=' rounded-[8px] text-[18px] px-6 duration-300  hover:bg-[#0000007a] py-[6px] flex justify-center items-center  font-medium  capitalize text-[#fff] primary_bg ' type={type}>{text}</button>   
          </div>
     );
};

export default Button;