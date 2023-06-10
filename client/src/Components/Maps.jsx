import React from 'react'
import { useMemo } from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'

const Maps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC9NNjn5wR5M9rQcPf4hsFDJbEPVrl1zFE"
    });
    if(!isLoaded) return <div>Loading...</div>
    

    return (
        <GoogleMap zoom={13} center={{lat: 42.0693,lng: 19.5033}} mapContainerClassName='map-container'>
            <Marker position={{lat: 42.0693,lng:19.5033}}/>
        </GoogleMap>
    )
}

export default Maps