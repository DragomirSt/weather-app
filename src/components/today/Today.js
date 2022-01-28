
import './Today.css';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getWeather } from "../../weather-forecast/weather";
import { DayContext } from '../../contexts/DayContext';

import extractDate from '../../helpers/extractDate';
import LoadingComponent from '../common/LoadingComponent';
import useErrorHandling from '../../hooks/errorHook';

const Today = () => {

    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState('');
    const [loading, setLoading] = useState(false);
    const triggerError = useErrorHandling();

    const { cityKey } = useContext(DayContext);
    const cityName = cityKey.cityName;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        getWeather(cityKey.key, {
            signal: signal
        })
            .then(res => {

                setWeather(res);
                setTemp(res.Temperature.Metric.Value);
            })
            .catch(err => {
                triggerError(err);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            controller.abort();
        };

    }, [cityKey, triggerError]);

    if (loading) {
        return <>
            <LoadingComponent />
        </>
    };

    return (
        <div className="today-div-forecast">
            <div className="city-name-temp">
                <div className='city-name'>
                    {cityName}
                    <br></br>
                </div>
                <h2 className='city-temps'>
                    {temp} *C
                </h2>
            </div>
            <div className="weather-icon">
                <img src={`./icons/icon${weather.WeatherIcon}.png`} alt="" />
            </div>
            <div className="weather-info">
                {weather.WeatherText}
            </div>
            <div className="date">
                {extractDate(weather.LocalObservationDateTime)}
            </div>
            <div className="fivedaysBtn">
                <Link to="/fivedaysAhead">Daily</Link>
            </div>
            <div className='hourlyBtn'>
                <Link to="/hourly">Hourly</Link>
            </div>
        </div>
    );

};

export default Today;