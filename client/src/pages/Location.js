import React from 'react'
import "./Location.css"
import useGeoLocation from '../components/hooks/useGeoLocation'

function Location() {
    const location = useGeoLocation()
    return (
        <div className='location_container'>
            <h1>Location</h1>
            <div>
                {
                    location.loaded ? JSON.stringify(location) : "location details not available"
                }

            </div>
        </div>
    )
}

export default Location