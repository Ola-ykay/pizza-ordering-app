'use client'
import React from 'react'
import {MenuDishList} from '../Data/data'
import OrderNow from '../OrderNow'
import Rating from '../Rating/page'
import Link from 'next/link'
import Image from 'next/image'

const DishMenu = () => {
    const handleRatingChange = (newRating) => {
        console.log(`Selected rating: ${newRating}`);
       
      };
  return (
    <>
    <div className='px-4 inset-x-0'>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        {MenuDishList.map((dish, index)=>(
                    <div key={index} className=" flex flex-col justify-center border shadow rounded-xl max-w-[600px]  h-[550px] p-4">
                        <div className="w-full flex justify-center h-[55%]">
                            <Image src={dish.image} height={200} width={300} className="h-[300px] w-[300px]" alt="Icon"/>
                        </div>
                        <div className="pb-4">
                            <div className="flex gap-[50%] font-semibold text-xl py-4">
                                <p>{dish.title}</p>
                                <p className="text-myRed">${dish.price}</p>
                            </div>
                            <div><Rating initialRating={5} onChange={handleRatingChange} /></div>
                            <p className="pt-4 pb-8">{dish.desc}</p>
                            <Link href='/products'>
                                <OrderNow/>
                            </Link>
                            
                        </div>
                        
                    </div>
                ))}
        </div>

    </div>
      
    </>
  )
}

export default DishMenu
