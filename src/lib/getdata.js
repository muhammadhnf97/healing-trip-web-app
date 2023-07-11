const baseurl = 'http://servicesimager.my.id'

export const getdata = async(fetchFor, people, destination_id) => {
    const peopleAndDestination = `/api/package/peopledestinatin/?people=${people}&destination_id=${destination_id}`;
    const destination = `/api/package/destination/${destination_id}`;
    const person = `/api/package/people/${people}`
    let response;
    let data;

    if(fetchFor === 'peopleAndDestination'){
        response = await fetch(`${baseurl}${peopleAndDestination}`)
        data = await response.json()
    }
    if(fetchFor === 'destination'){
        response = await fetch(`${baseurl}${destination}`)
        data = await response.json()
    }
    if(fetchFor === 'person'){
        response = await fetch(`${baseurl}${person}`)
        data = await response.json()
    }
    return data
}

export const getDataDestination = async() => {
    const country = `/api/location/get-country`
    const response = await fetch(`${baseurl}${country}`)
    const data = await response.json()
    return data.data
}

export const getDetail = async(id) => {
  const res = await fetch(`${baseurl}/api/package/active/${id}`)
  const data = await res.json()
  return data.data
}