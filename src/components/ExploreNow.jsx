import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocation } from '../features/location/locationSlice'
import { Link } from 'react-router-dom'

const ExploreNow = () => {

  const [allProvincies, setAllProvincies] = useState([])
  const [exploreNow, setExploreNow] = useState({
    location: null,
    // date: null,
    // people: null
  })
  const [isDate, setIsDate] = useState(false)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchLocation())
  }, [])

  const destination = useSelector(state=>state.location.data)

  const getAllProvincies = async() => {
    const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
    const data = await response.json()
    return data
  } 

  useEffect(()=>{
    getAllProvincies().then(data=>setAllProvincies(data))
  }, [])

  const handleChangeExploreNow = (e) => {
    if(e.target.name === 'date'){
      setExploreNow(preveExploreNow => {
        return {
          ...preveExploreNow,
          date: e.target.value
        }
      })
      return
    }
    
    if(e.target.name === 'location'){
      setExploreNow(preveExploreNow => {
        return {
          ...preveExploreNow,
          location: e.target.value
        }
      })
      return
    }
    
    if(e.target.name === 'date'){
      setExploreNow(preveExploreNow => {
        return {
          ...preveExploreNow,
          date: e.target.value
        }
      })
      return
    }
    
    if(e.target.name === 'people'){
      setExploreNow(preveExploreNow => {
        return {
          ...preveExploreNow,
          people: e.target.value
        }
      })
      return
    }
  } 

  // const handleClickDate = () => {
  //   setIsDate(prev=>!prev)
  // }   

  return (
    <div className='w-full mx-auto font-poppins space-y-3 md:w-fit'>
        <div className='w-full h-full shadow-lg shadow-gray-300 rounded-lg flex flex-col md:items-center md:justify-between py-5 space-y-5 md:space-y-0 px-10 md:flex-row'>
          <div className='flex-1 w-fit md:w-32'>
            <select name='location' value={exploreNow?.location !== null ? exploreNow?.location : ''} className='font-semibold w-32'  onChange={(e)=>handleChangeExploreNow(e)}>
              <option>{exploreNow?.location === null ? 'Location' : location?.name}</option>
                {
                  destination?.map(provinsi => (
                    <option key={provinsi.id} value={provinsi?.id}>{provinsi?.name}</option>
                  ))
                }
            </select>
            <p className='text-gray-400 text-sm'>Enter your destination</p>
          </div>
          {/* <div className={isDate ? 'hidden' : 'object flex-1 w-fit md:w-32'}>
            <button className='font-semibold' onClick={()=>handleClickDate('date')}>Date</button>
            <p className='text-gray-400 text-sm'>When will start ?</p>
          </div>
          <div className={isDate ? 'object flex-1 w-fit md:w-32' : 'hidden'}>
            <input type='date' name='date' value={exploreNow?.date !== null ? exploreNow?.date : ""} className='font-semibold' onChange={(e)=>handleChangeExploreNow(e)} />
            <p className='text-gray-400 text-sm'>When will start ?</p>
          </div> */}
          {/* <div className='flex-1 w-fit md:w-32'>
            <select name='people' value={exploreNow?.people !== null ? exploreNow?.people : ''} className='font-semibold' onChange={(e)=>handleChangeExploreNow(e)}>
              <option>{exploreNow?.people === null ? 'People' : exploreNow?.people}</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <p className='text-gray-400 text-sm'>How many people</p>
          </div> */}
            <Link to={`/search/${exploreNow.location}`}>
              <button className='p-5 bg-[#F5032E] rounded-lg shadow-inner text-white font-semibold w-full md:w-fit'>Explore Now</button>
            </Link>
        </div>
        <p>Popular Search: <span className='text-[#F5032E]'>Mojokerto</span>, Yogyakarta, Lombok, Denpasar</p>
    </div>
  )
}

export default ExploreNow