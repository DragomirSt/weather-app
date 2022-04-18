
import './HourlyWeather.css';

import { useEffect, useState, useContext } from "react";
import { CityContext } from '../../contexts/CityContext';

import { currentWeather } from "../../weather-forecast/weather";

import HourlyComponent from './HouryComponent';
import LoadingComponent from '../common/LoadingComponent';

const HourlyWheater = () => {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    const { city } = useContext(CityContext);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        currentWeather(city, {
            signal: signal
        })
            .then(res => {
                let data;
                res.forecast.forecastday.forEach(element => {
                    data = element.hour;
                });
               setWeather(data);
            })
            .finally(() => {
                setLoading(false);
            })
        return () => {
            controller.abort();
        };

    }, [city]);

    if (loading) {
        return <>
            <LoadingComponent />
        </>
    };
    
    return (
        <div className='hourly-container'>
            {!!weather && weather.map((x, index) =>
                <HourlyComponent weatherInfo={x}
                    key={index} />)}
        </div>
    );
};

export default HourlyWheater;