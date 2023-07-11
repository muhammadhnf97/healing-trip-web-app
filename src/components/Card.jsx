import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {

  return (
    <Link to={`/destination/${data.id}`}>
        <div className='w-full md:w-80 rounded-lg shadow-md font-poppins overflow-hidden duration-150 hover:scale-105 hover:-translate-y-2'>
            <img src={data.image} alt='img' loading='eager' className='w-full h-64  object-cover'
            onError={(e) => {
                e.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
            }} />
            <div className='w-full p-3'>
                <h3 className='text-lg font-semibold text-[#F5032E]'>{data.name}</h3>
                <p className='text-justify text-2xl'>{data.price.toLocaleString("id-ID", {
                    style: 'currency', currency: 'IDR'})}</p>
                    <div className='flex gap-2'>
                        {
                            data.destination.map((des, index)=>(
                                <p key={index} className={index%2 ? 'text-red-500' : 'text-black'}>{des.name}</p>
                            ))
                        }
                    </div>
                    <div className='flex gap-1 text-gray-500'>
                        <p>{data.person} Orang </p>
                        <p>{data.days} Hari</p>
                    </div>
            </div>
        </div>
    </Link>
  )
}

export default Card