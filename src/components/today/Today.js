
import './Today.css';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { currentWeather } from "../../weather-forecast/weather";
import { DayContext } from '../../contexts/DayContext';

import LoadingComponent from '../common/LoadingComponent';

const Today = () => {
    const [weather, setWeather] = useState([]);
    const { cityKey } = useContext(DayContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        currentWeather(cityKey.key, {
            signal: signal
        })
            .then(res => {
                const weatherData = [res];
                setWeather(weatherData);
            })
            .finally(() => {
                setLoading(false);
            })
        return () => {
            controller.abort();
        };
    }, [cityKey]);

    if (loading) {
        return <>
            <LoadingComponent />
        </>
    };
  
    return (
        <div>
            {!!weather && weather.map(x => (
                <div className="today-div-forecast">
                    <div className='city-name'>
                        {cityKey.key}
                    </div>
                    <div className='city-temps'>
                        {x.current.feelslike_c} *C
                    </div>
                    <div className="weather-icon">
                        <img src={x.current.condition.icon} alt="" />
                    </div>
                    <div className="weather-info">
                        {x.current.condition.text}
                    </div>
                    <div className="date">
                        {x.location.localtime}
                    </div>
                    <div className="fivedaysBtn">
                        <Link to="/daily">Daily</Link>
                    </div>
                    <div className='hourlyBtn'>
                        <Link to="/hourly">Hourly</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Today;

