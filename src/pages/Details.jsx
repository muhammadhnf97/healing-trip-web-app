import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Header from '../components/Header'
import { RxCross1 } from 'react-icons/rx'
import { FaAngleRight } from 'react-icons/fa'
import { getDetail } from '../lib/getdata'
import Footer from '../components/Footer'

const Details = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isShowImage, setIsShowImage] = useState(false)
    const [theImage, setTheImage] = useState('')
    const [detail, setDetail] = useState({})
    const [isDetailActivity, setIsDetailActivity] = useState(false)

    const { id } = useParams()

    useEffect(() => {
      getDetail(id).then(data => setDetail(data[0]));
    }, [id]);
    
    useEffect(()=>{
      if(detail !== null && id !== undefined){
        setIsLoading(false) 
      }
    }, [detail])

    const handleClickShowActivity = () => {
      setIsDetailActivity(prev=>!prev)
    }

    const handleClickShowImage = (image = null) => {
      setIsShowImage(prev=>!prev)
      setTheImage(image)
    }

    console.log(detail)

  return (
    <>
      {
        isLoading &&
        <Loading />
      }
      <Header />
      <div className='space-y-10 p-3 pt-[90px] bg-white font-poppins'>
        <section className='w-full mx-auto bg-gray-700 space-y-3 md:flex md:h-[30rem] md:flex-1 md:max-w-none md:space-y-0'>
          <img src={detail?.image} alt='pp' loading='lazy' className='w-full h-[64] object-cover mx-auto md:w-2/4 md:h-full' />
          <div className='text-white text-sm px-5 font-semibold pb-3 md:h-full  md:w-full md:pb-0 md:py-5 md:flex md:flex-col md:justify-evenly'>
            <div className='w-full p-1 space-y-2'>
              <p className='text-xl font-bold md:text-6xl'>{detail?.name}</p>
              <p className='md:text-xl'>{detail?.person} <span className='text-red-500'>Orang</span> {detail?.days} <span className='text-red-500'>Hari</span></p>
              <p className='md:text-3xl'>{detail?.price?.toLocaleString("id-ID", {style: 'currency', currency: 'IDR'})}</p>
            </div>
            <div className='space-y-2 hidden md:block md:py-5'>
              <button className='w-full py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-semibold text-lg flex justify-center items-center gap-1 md:w-full' onClick={handleClickShowActivity}>See our rundown <FaAngleRight className='w-6 h-6' /></button>
              <button className='w-full py-5 bg-green-500 rounded-lg font-semibold text-lg'>Booking Now !</button>
            </div>
          </div>
        </section>

        <section className={`z-10 -top-10 left-0 bg-black bg-opacity-60 w-screen h-screen overflow-auto fixed flex items-center justify-center ${isDetailActivity ? 'scale-100 visible' : ' invisible scale-0'}`}>
          <button className='w-screen h-screen fixed top-0 -z-10' onClick={handleClickShowActivity}></button>
          <div className={`overflow-auto h-screen relative min-w-[200px] p-5 bg-white shadow-md space-y-3 duration-200 ${isDetailActivity ? 'scale-100 visible' : ' invisible scale-0'}`}>
            <button className='fixed top-0 right-0 text-black ' onClick={handleClickShowActivity}><RxCross1 className="w-7 h-7 absolute top-5 right-5" /></button>
            <p className='text-xl font-bold text-[#F5032E]'>Kegiatan</p>
            <ul className='list-disc px-5 space-y-2'>
              {detail?.itinerary?.map(data=>(
                <li>{data?.waktu_mulai} {'=>'} <span className='font-semibold'>{data?.aktifitas}</span> di  <span className='font-semibold'>{data?.destinasi}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className='p-5 space-y-4 md:max-w-7xl md:mx-auto md:flex md:flex-col md:gap-5 md:space-y-0'>
          <div className='space-y-4 flex-1'>
            <p className='text-xl font-bold text-[#F5032E] md:text-3xl'>More about this trip ..</p>
            <p>{detail?.description}</p>
          </div>
          <div className='space-y-4 flex-1'>
            <p className='text-xl font-bold text-[#F5032E] md:text-3xl'>Destinasi</p>
            <div className='grid grid-cols-2 md:grid-cols-7 items-start'>
              {
                detail?.destination?.map((value, index)=>(
                  <button key={index} className='w-full' onClick={()=>handleClickShowImage(value.image)}>
                    <img src={value.image} alt='img' className='w-40 h-40 object-cover rounded-lg shadow-md' />
                    <p>{value.name}, {value.location_name}</p>
                  </button>
                ))
              }
            </div>
          </div>
        </section>

        <section className='w-full p-5 space-y-2 md:hidden'>
          <button className='w-full py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-semibold text-lg flex justify-center items-center gap-1' onClick={handleClickShowActivity}>See our rundown <FaAngleRight className='w-6 h-6' /></button>
          <button className='w-full py-5 bg-green-500 rounded-lg font-semibold text-lg'>Booking Now !</button>
        </section>

        <section className={`left-0 z-10 fixed bg-black w-screen h-screen -top-10 bg-opacity-80 duration-100 flex items-center justify-center ${isShowImage ? 'scale-100 visible' : 'scale-0 invisible'}  `}>
              <button className='w-screen h-screen absolute cursor-default' onClick={handleClickShowImage}></button>
              <img src={theImage} alt='img' className='w-full h-fit md:w-[55rem] md:h-[35rem] object-cover object-center' />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Details