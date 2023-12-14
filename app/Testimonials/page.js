import React from 'react'
import Image from 'next/image'
import { TestimonialsList } from '../Data/data'

const Testimonials = () => {
  return (
    <>
      <div className='px-4 inset-x-0 pt-8'>
        <Image src='/Images/leaf.png' width={100} height={100} alt='leaf' />
        <h3 className="text-myRed text-xl font-[600] pb-2">Customer Feedback</h3>
<h2 className="font-bold text-4xl pb-10">Client Testimonials</h2>
<div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2'>
  {TestimonialsList.map((testimonial, index) =>(
    <div key={index} className='flex flex-col items-center justify-center border shadow rounded-2xl p-10 px-12 '>
      <Image src={testimonial.image} width={90} height={90} alt='client' className=' border rounded-full' />
      <h4 className='font-bold py-4 text-lg'>{testimonial.title}</h4>
      <p className='text-myBlack text-center'>{testimonial.remark}</p>
    </div>
  ))}
</div>
      </div>
    </>
  )
}

export default Testimonials
