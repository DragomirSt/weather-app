
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DayContext } from '../../contexts/DayContext';

import { geoLocation } from '../../weather-forecast/weather';

const GeoPosition = () => {

    const { setCityKey } = useContext(DayContext);
    const navigate = useNavigate();

    let long;
    let lat;
    window.addEventListener('load', () => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(positon => {

                long = positon.coords.longitude;
                lat = positon.coords.latitude;

                geoLocation(lat, long)
                    .then(res => {

                        setCityKey({ key: res.Key, cityName: res.LocalizedName });
                        navigate('/today');
                    })

            });
        }
    });

    return (
        null
    );
};

export default GeoPosition;