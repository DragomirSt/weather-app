
import './HourlyWeather.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from '../../contexts/DayContext';
import { hourlyForecastWeather } from "../../weather-forecast/weater";

import HourlyComponent from './HouryComponent';
import LoadingComponent from '../common/LoadingComponent';
import useErrorHandling from '../../hooks/errorHook';

const HourlyWheater = () => {

    const { cityKey } = useContext(DayContext);
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const triggerError = useErrorHandling();

    useEffect(() => {
        setLoading(true);

        return hourlyForecastWeather(cityKey.key)
            .then(res => {

                setWeather(res);
            })
            .catch(err => {
                triggerError(err);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [cityKey.key, triggerError]);

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