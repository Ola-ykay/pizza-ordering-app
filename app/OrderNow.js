import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const OrderNow = () => {
  return (
    <div>
      <button className="flex bg-myOrange justify-center items-center  py-3 px-6 rounded-full gap-2">
        <FaShoppingCart className="h-6 w-6 text-[#fffcfb]"/>
        <span className="uppercase text-[#fff6d2]">
            Order Now
            </span>
      </button>
    </div>
  )
}

export default OrderNow
