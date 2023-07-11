import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPaket } from '../features/paket/paketSlice'
import { fetchLocation } from '../features/location/locationSlice'
import { getdata } from '../lib/getdata'

const Paket = () => {
    const [filterSearch, setFilterSearch] = useState({ people: null, destination: null })
    const [paket, setPaket] = useState([])

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPaket())
        dispatch(fetchLocation())
    }, [dispatch])

    const paketData = useSelector(state=>state.paket)
    const locationData = useSelector(state=>state.location.data)

    const itemsPerPage = 3
    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = Math.ceil(paket?.length / itemsPerPage )
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    useEffect(()=>{
        if(paketData){
            setPaket(paketData.data)
        }
    }, [paketData])

    useEffect(() => {
        const fetchData = async () => {
          if (filterSearch.people !== null && filterSearch.destination !== null) {
            const peopleAndDestinationData = await getdata('peopleAndDestination', filterSearch.people, filterSearch.destination);
            setPaket(peopleAndDestinationData.data);
          } else if (filterSearch.people !== null) {
            const personData = await getdata('person', filterSearch.people, null);
            setPaket(personData.data);
          } else if (filterSearch.destination !== null) {
            const destinationData = await getdata('destination', null, filterSearch.destination);
            setPaket(destinationData.data);
          }
        };
      
        fetchData();
      }, [filterSearch.people, filterSearch.destination]);

    const handleClickPaggination = (page) => {
        setCurrentPage(page)
    }

    const handleChangeFilter = (e) => {
        const {name, value} = e.target 

        setFilterSearch(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleClickSearch = () => {
        if(filterSearch.destination && !filterSearch.people) {
            getDestination('peopleAndDestination').then(dest=>setPaket(dest))
            return
        }
        if(filterSearch.people !== null && filterSearch.destination === null) {
            setPaket(pkg=>{
                return pkg.filter(pkt=>pkt.people >= filterSearch.people)
            })
            return
        }
    };
      
    const handleClickResetSearch = () => {
        setPaket(paketData.data)
        setFilterSearch({
            people: null,
            destination: null
        })
    }

  return (
    <>
    <Header pinPoint={'paket'} />
    <div className='space-y-7 pt-28 p-3 bg-white'>
    { paketData.isLoading && <Loading /> }
        <div className='border p-2 rounded-lg space-y-2 flex flex-col bg-gray-400 md:w-[45rem] md:mx-auto md:flex-row md:space-y-0 gap-2'>
            <div className='w-full flex gap-2  items-center justify-center'>
                <select name='people' value={filterSearch.people} className='border rounded-lg px-2 py-3 w-full' onChange={(e)=>handleChangeFilter(e)}>
                    <option>People</option>
                    <option value={1}>1</option>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={7}>7</option>
                    <option value={9}>9</option>
                </select>
                <select name='destination' value={filterSearch.destination} className='border rounded-lg px-2 py-3 w-full' onChange={(e)=>handleChangeFilter(e)}>
                    <option>Destination</option>
                    {
                        locationData.map(data=>(
                            <option key={data.id} value={data.id}>{data.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className='w-full flex flex-col space-y-1 md:flex-row md:space-y-0 gap-2'>
                <button className='border-2 p-3 rounded-lg w-full duration-150 ease-out active:shadow-inner hover:bg-gray-500' onClick={handleClickSearch}>Search</button>
                <button className='border-2 p-3 rounded-lg w-full duration-150 ease-out active:shadow-inner hover:bg-gray-500' onClick={handleClickResetSearch}>Reset</button>
            </div>
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
    </>
  )
}

export default Paket