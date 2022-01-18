
import './HourlyWeather.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from '../../contexts/DayContext';
import { hourlyForecastWeather } from "../../weather-forecast/weater";

import HourlyComponent from './HouryComponent';
import ErrorComponent from '../errorComponent/ErrorComponent';

const HourlyWheater = () => {

    const { cityKey } = useContext(DayContext);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        return hourlyForecastWeather(cityKey.key)
            .then(res => {

                setWeather(res);
            });

    }, [cityKey.key]);

    if (typeof weather === 'undefined') {
        return (
            <>
                <ErrorComponent />
            </>
        );
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