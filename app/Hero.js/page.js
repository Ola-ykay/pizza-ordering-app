import Link from 'next/link'
import React from 'react'
import OrderNow from '../OrderNow'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className='mt-[10%] flex items-center justify-between z-30'>
    <div className='px-6'>
    <div className='flex flex-col gap-3 text-5xl font-[800] text-myBlack'>
      <h1>Handmade,</h1>
      <h1 className='py-2'>With an Extra</h1>
      <h1>Pinch of <span className='text-myRed'>Love</span></h1>
    </div>
    <p className='text-3xl max-w-full w-[80%] xl:max-w-[60%] text-[#242021] mt-6 leading-12 pb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <Link href='/products'>
      <OrderNow />
    </Link>
    </div>

<div className='flex '>
<div className="bg-myYellow  h-[450px] xl:h-[600px] hidden md:block w-[180px] lg:w-[250px] xl:w-[380px] rounded-l-full relative z-[-2]" >
  <div className="absolute left-[-150px] lg:left-[-180px] xl:left-[-250px] top-5 z-[-1] md:z-1">
    <Image src='/Images/tomato-pizza.png' alt='pizza' height={400} width={400} className="h-[200px] lg:h-[250px] xl:h-[400px] w-[200px] lg:w-[250px] xl:w-[400px]" />
    <Image src='/Images/onion.png' alt='onion' height={100} width={100}  className="h-[60px] xl:h-[120px] w-[60px] xl:w-[120px] ms-[-50px] mt-[120px] lg:mt-[80px] xl:ms-[-120px] xl:mt-[-50px]"/>
    <Image src='/Images/nut-pizza.png' alt='pizza' height={150} width={150} className="h-[120px] xl:h-[170px] w-[120px] xl:w-[170px] absolute right-[0px] lg:right-[-20px] bottom-[-50px] xl:bottom-[-130px]" />
</div>
  </div>
</div>

    </div>
    </>
  )
}

export default page
