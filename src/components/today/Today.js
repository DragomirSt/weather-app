
import './Today.css';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { currentWeather } from "../../weather-forecast/weather";
import { CityContext } from '../../contexts/CityContext';

import LoadingComponent from '../common/LoadingComponent';
import FetchError from '../common/FetchError';

const Today = () => {
    const [weather, setWeather] = useState([]);
    const { city } = useContext(CityContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        currentWeather(city, {
            signal: signal
        })
            .then(res => {
                const weatherData = [res];
                setWeather(weatherData);
            })
            .catch(error => {
                setError(true);
                setErrorMessage(error);
            })
            .finally(() => {
                setLoading(false);
            })
        return () => {
            setError(false);
            controller.abort();
        };

    }, [city]);

    if (error) {
        return <>
            <FetchError props={errorMessage} />
        </>
    }
    if (loading) {
        return <>
            <LoadingComponent />
        </>
    };

    return (
        <div>
            {weather && weather.map(x => (
                <div className="today-div-forecast" key={city}>
                    <div className='city-name'>
                        {city}
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

