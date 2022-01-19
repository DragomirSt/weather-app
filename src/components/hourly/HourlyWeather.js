
import './HourlyWeather.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from '../../contexts/DayContext';
import { hourlyForecastWeather } from "../../weather-forecast/weater";

import HourlyComponent from './HouryComponent';
import LoadingComponent from '../common/LoadingComponent';

const HourlyWheater = () => {

    const { cityKey } = useContext(DayContext);
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return hourlyForecastWeather(cityKey.key)
            .then(res => {

                setWeather(res);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [cityKey.key]);

    if(loading) {
        return <>
        <LoadingComponent/>
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