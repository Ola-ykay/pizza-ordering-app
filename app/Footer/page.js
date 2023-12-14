import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-bgFooter py-6 md:py-8 lg:py-12 ps-6 md:ps-4 px-6 max-w-[1440px]  z-1'>
        <div className='grid grid-cols-1 md:grid-cols-4'>
<div>
    <h2 className='uppercase text-lg font-bold mt-10 md:mt-0'>information</h2>
    <ul className='text-sm text-myGrey font-bold flex flex-col gap-4 md:gap-5 mt-3 md:mt-[15px]'>
    <li className="">
                <Link href='/'>Home
                </Link></li>
              <li className="">
                <Link href='/'>Blog
                </Link></li>
              <li className="">
                <Link href='/'>About Us
                </Link></li>
              <li className="">
              <Link href='/'>Menu</Link></li>
              <li className="">
              <Link href='/'>Contact Us</Link></li>
    </ul>
</div>
<div>
    <h2 className='uppercase text-lg font-bold mt-10 md:mt-0'>top items</h2>
    <ul className='text-sm text-myGrey font-bold flex flex-col gap-4 md:gap-5 mt-3 md:mt-[15px]'>
        <li>Pepperoni</li>
        <li>Swiss Mushroom</li>
        <li>Barbeque Chicken</li>
        <li>Vegetarian</li>
        <li>Ham & Chees</li>
    </ul>
</div>
<div>
    <h2 className='uppercase text-lg font-bold mt-10 md:mt-0'>others</h2>
    <ul className='text-sm text-myGrey font-bold flex flex-col gap-4 md:gap-5 mt-3 md:mt-[15px]'>
    <li>Checkout</li>
        <li>Cart</li>
        <li>Product</li>
        <li>Location</li>
        <li>Legal</li> 
    </ul>
</div>
<div>
    <h2 className='uppercase text-lg font-bold mt-10 md:mt-0 '>social media</h2>
    <div className='mt-4 md:mt-[18px]'>
        <div>
        <div className="flex gap-4 mb-4 ">
                    <div className="bg-bgFacebook flex justify-center items-center h-10 w-11 ">
                      <FaFacebookF className="text-white text-2xl"/>
                    </div>
                    <div className="bg-bgPinterest flex justify-center items-center h-10 w-11 ">
                      <FaPinterestP className="text-white text-2xl"/>
                    </div>
                    <div className="bg-bgTwitter flex justify-center items-center h-10 w-11 ">
                      <FaTwitter className="text-white text-2xl"/>
                    </div>
                    <div className="bg-bgInstagram flex justify-center items-center h-10 w-11 ">
                      <FaInstagram className="text-white text-2xl"/>
                    </div>
                  </div>
        </div>
        <p className='font-medium text-myBlack text-lg'>Signup and get exclusive offers and coupon codes</p>
    </div>
    <div >
                 
                  
                 <Link href={"/signup"} className="flex items-center mt-4 lg:mt-8">
                   <button className="uppercase bg-myYellow text-white  font-bold py-[6px] px-4 rounded-full">Sign Up</button>
                 </Link>
           </div>
</div>
        </div>
      
    </footer>
  )
}

export default Footer
