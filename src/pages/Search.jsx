import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPaket } from '../features/paket/paketSlice'
import { fetchLocation } from '../features/location/locationSlice'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'

const Search = () => {

    const { id } = useParams()

    const [paket, setPaket] = useState([])

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPaket())
        dispatch(fetchLocation())
    }, [dispatch])

    const paketData = useSelector(state=>state.paket)

    const itemsPerPage = 3
    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = Math.ceil(paket?.length / itemsPerPage )
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    useEffect(()=>{
        if(paketData){
            setPaket(paketData.data.filter(dats=>{
                return dats.destination.some(a=>a.id === +id)
            }))
        }
    }, [paketData])

    const handleClickPaggination = (page) => {
        setCurrentPage(page)
    }

  return (
    <>
    { paketData.isLoading && <Loading />
    }
    <div className='w-full space-y-10 pb-16 bg-white font-poppins p-3'>
        <Header pinPoint={'paket'} />
        <div className='p-2 rounded-lg space-y-2 flex flex-col bg-gray-400 md:w-fit md:mx-auto md:flex-row md:space-y-0 gap-2'>
            <Link to={'/paket'}>
                <button className='border-2 p-3 rounded-lg w-full duration-150 ease-out active:shadow-inner hover:bg-gray-500' >Lihat Lebih banyak </button>
            </Link>
        </div>
        <div className='w-full flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-5 md:w-fit md:mx-auto'>
            {
                paket?.map((destination, index) => (
                    <Card key={index} data={destination} />
                )).slice(indexOfFirstItem, indexOfLastItem)
            }
        </div>
        <div className='w-fit flex gap-4 mx-auto'>
            { currentPage > 1 &&
                <button className='shadow-md p-2 rounded-lg bg-gray-300 hover:bg-gray-400' onClick={()=>handleClickPaggination(1)}>First Page</button>
            }
            {
                currentPage - 1 > 0 && 
                <button className='shadow-md p-2 rounded-lg bg-gray-300 hover:bg-gray-400' onClick={()=>handleClickPaggination(currentPage - 1)}>{currentPage - 1}</button>
            }
            <button className='shadow-md p-2 bg-red-500 rounded-lg ' onClick={()=>handleClickPaggination(1)}>{currentPage}</button>
            {
                currentPage + 1  < totalPage + 1 && 
                <button className='shadow-md p-2 rounded-lg bg-gray-300 hover:bg-gray-400' onClick={()=>handleClickPaggination(currentPage + 1)}>{currentPage + 1}</button>
            }
            { 
                currentPage < totalPage &&
                <button className='shadow-md p-2 rounded-lg bg-gray-300 hover:bg-gray-400' onClick={()=>handleClickPaggination(totalPage)}>Last Page</button>
            }
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Search