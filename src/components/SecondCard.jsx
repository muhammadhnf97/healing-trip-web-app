import React from 'react'

function SecondCard({ country, batasAwal, batasAkhir }) {
  return (
    <>
    {
      country?.map(ctr=>(
        <div key={ctr.id} className='w-full md:w-full relative h-52 hover:h-fit group'>
          <div className='w-full h-52 absolute bg-gradient-to-t from-black group-hover:bg-none rounded-lg'></div>
          <img src={ctr.image} alt='pp' loading='lazy' className='w-full h-52 object-cover object-center rounded-md' />
            <p className='absolute top-40 text-2xl font-bold text-white left-7 drop-shadow-lg'>{ctr.name}</p>
          <div className='z-10 bg-black text-white bg-opacity-70 scale-0 duration-200 origin-top p-5 group-hover:scale-100  absolute text-xs text-start'>
            <p>{ctr.description}</p>
          </div>
        </div>
      )).slice(batasAwal, batasAkhir)
    }
    </>
  )
}

export default SecondCard