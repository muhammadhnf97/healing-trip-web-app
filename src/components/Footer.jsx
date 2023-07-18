import React from 'react'

const Footer = () => {
  return (
    <div className='py-3 px-10 w-full h-36 bg-black text-white font-poppins flex gap-10 justify-start'>
        <div className='space-y-1 h-full'>
            <p className='font-bold text-lg'>PT. Healing Take Away corp.</p>
            <p className='text-sm'>Jl. Sudirman, Pekanbaru, Riau</p>
            <p className='text-sm'>Telp : {'(+62)823 2222 2222'}</p>
            <p className='text-sm'>Telp : {'(+62)761 3333 333'}</p>
            <p className='text-sm'>Email : healingcorp@healing.com</p>
        </div>
        <div className='space-y-1 h-full'>
            <p className='font-bold text-lg'>Alamat Kantor Cabang</p>
            <p className='text-sm'>Jl. Pembangunan, Jakarta Raya, Indonesia</p>
            <p className='text-sm'>Telp : {'(+62)823 2222 2222'}</p>
        </div>
        <div className='h-full flex-1 flex flex-col'>
            <h1 className='text-[#F5032E] text-[36px] font-bold shadow-lg flex-1 text-center'>Healing.</h1>
            <p className='flex-1 text-center italic self-center'>We Take Care Your Trip</p>
        </div>
    </div>
  )
}

export default Footer