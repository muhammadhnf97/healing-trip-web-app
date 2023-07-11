import React from 'react'

const Main = () => {
  return (
    <div className='w-full font-poppins'>
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row'>
            <div className='flex-1 leading-[1] flex flex-col justify-between space-y-16 md:space-y-0'>
                <div className='relative text-center md:text-left'>
                    <h2 className='font-bold text-5xl md:text-7xl'>We Take Care Of Your Trip</h2>
                    <img src='/images/Vector 7.png' alt='vektor7' className='w-[120px] md:w-[150px] absolute right-[3rem] top-[107px] md:top-[10rem] md:right-44' />
                </div>
                <div className='flex-1 md:hidden'>
                    <img src='/images/Illustration.png' alt='illustration' className='w-[350px] mx-auto' />
                </div>
                <div className='flex gap-5 items-center px-5 md:p-0 '>
                    <div className='w-[116px] h-[123px] rounded-tr-full rounded-tl-full bg-[#F5032E] flex flex-col text-center items-center justify-center text-white space-y-2'>
                        <p className='text-[30px] font-bold'>24/7</p>
                        <p className='text-sm'>Guide Support</p>
                    </div>
                    <div className='flex-1 text-sm leading-loose'>
                        <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane.</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center justify-center md:justify-start'>
                    <img src='/images/Group 7.png' alt='happy customer' className='w-[153px]' />
                    <p className='font-semibold'>28K Happy Customer</p>
                </div>
                <div>

                </div>
            </div>
            <div className='flex-1 hidden md:block'>
                <img src='/images/Illustration.png' alt='illustration' className='w-[558px]' />
            </div>

        </div>
    </div>
  )
}

export default Main