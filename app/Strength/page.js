import React from 'react'
import { StrengthList } from '../Data/data'
import Image from 'next/image'

const Strength = () => {
  return (
    <>
    <div className='bg-mybg px-6 mt-16 py-16 md: relative py-14 inset-x'>
<h3 className="text-myRed text-xl font-[600] pb-2">Our Strength</h3>
<h2 className="font-bold text-4xl pb-10">Why We Are The Best</h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
  {StrengthList.map((strength, index) =>(
    <div key={index}>
       <Image src={strength.image} width={30} height={30} alt='icon' className='h-[35px] w-[30px]' />
       <h4 className='font-bold py-2'>{strength.title}</h4>
       <p>{strength.description}</p>
    </div>
  ))}
</div>
<div className='absolute top-4 md:top-18 lg:top-14 right-2'>
  <Image src='/Images/half-pizza.png' width={200} height={200} alt='half-pizza' className='h-[60px] md:h-[120px] xl:h-[180px]  w-[100px] md:w-[200px] xl:w-[240px]' />
</div>
    </div>
      
    </>
  )
}

export default Strength
