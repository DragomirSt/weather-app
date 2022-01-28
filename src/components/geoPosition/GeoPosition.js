
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DayContext } from '../../contexts/DayContext';
import { geoLocation } from '../../weather-forecast/weather';

const GeoPosition = () => {

    const { setCityKey } = useContext(DayContext);
    const navigate = useNavigate();

    const [location, setLocation] = useState({
        loaded: false,
        lat: null,
        lng: null
    });

    const onSuccess = (positon) => {
        setLocation({
            loaded: true,
            lat: positon.coords.latitude,
            lng: positon.coords.longitude
        });
    };

    const onError = () => {
        setLocation({
            loaded: false
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError,
            { enableHighAccuracy: true });
    }, []);

    useEffect(() => {
        if (location.loaded === true) {
            geoLocation(location.lat, location.lng)
                .then(res => {

                    setCityKey({ key: res.Key, cityName: res.LocalizedName });
                    navigate('/today');
                });
        }
    }, [location.lat, location.lng]);

    return (
        null
    );
};

export default GeoPosition;
