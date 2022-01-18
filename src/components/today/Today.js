
import './Today.css';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getWeather } from "../../weather-forecast/weater";
import { DayContext } from '../../contexts/DayContext';

import extractDate from '../../helpers/extractDate';
import ErrorComponent from '../errorComponent/ErrorComponent';

const Today = () => {

    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState('');

    const { cityKey } = useContext(DayContext);

    const cityName = cityKey.cityName;
    useEffect(() => {
        
        return getWeather(cityKey.key)
            .then(res => {
                setWeather(res);
                setTemp(res.Temperature.Metric.Value);

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
        <div className="today-div-forecast">
            <div className="city-name">
                <h3>
                    {cityName}
                    <br></br>
                    <br></br>
                    {temp}
                    <>*C</>
                </h3>
                <div className="weather-icon">
                    <img src={`./icons/icon${weather.WeatherIcon}.png`} alt="" />
                </div>
            </div>
            <h4>
                <div className="weather-info">
                    {weather.WeatherText}
                </div>
            </h4>
            <h4>
                <div className="date-year">
                    {extractDate(weather.LocalObservationDateTime)}
                </div>
            </h4>
            <div className="fivedaysBtn">
                <Link to="/hourly">Hourly</Link>
                <br></br>
                <br></br>
                <Link to="/fivedaysAhead">Daily</Link>
            </div>
        </div>
    );

};

export default Today;