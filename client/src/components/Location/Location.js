import React, { useState } from 'react'
import "./Location.css"
import useGeoLocation from './hooks/useGeoLocation'
import { CiLocationOn, CiLocationOff } from "react-icons/ci";
import { toast } from 'react-toastify';

function Location() {
    const location = useGeoLocation()
    const [autoLocation, setautoLocation] = useState(false);
    return (
        <div className='location_container' onClick={(e) => {
            setautoLocation(!autoLocation);
            e.currentTarget.classList.toggle("underline_green_line");
            toast.success(`Location turned ${!autoLocation ? "on" : "off"}`);
            // console.dir(e.currentTarget);
        }}>
            {
                autoLocation === false && <CiLocationOff className='Location_icon' />
            }
            {autoLocation === true && <div>
                <CiLocationOn className='Location_icon' />
                {/* {
                        location.loaded ? JSON.stringify(location) : "location details not available"
                    } */}
            </div>
            }

        </div>
    )
}

export default Location