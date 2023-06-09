import React from 'react'
import { useMemo } from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'
import ScrollAnimation from 'react-animate-on-scroll';

const Maps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC9NNjn5wR5M9rQcPf4hsFDJbEPVrl1zFE"
    });
    if(!isLoaded) return <div>Loading...</div>
    

    return (
        <GoogleMap zoom={10} center={{lat: 44,lng: -80}} mapContainerClassName='map-container'>
            <Marker position={{lat: 44,lng:-80}}/>
        </GoogleMap>
    )
}

export default Maps