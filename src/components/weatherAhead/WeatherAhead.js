
import './WeatherAhead.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from "../../contexts/DayContext";
import { getWeatherAhead } from "../../weather-forecast/weather";

import WeatherAheadComponent from "./WeatherAheadComponent";
import LoadingComponent from '../common/LoadingComponent';

const WeatherAhead = () => {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    const { cityKey } = useContext(DayContext);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        getWeatherAhead(cityKey.key, {
            signal: signal
        })
            .then(res => {
                console.log(res.forecast.forecastday)
                setWeather(res.forecast.forecastday);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            controller.abort();
        };

    }, [cityKey.key]);

    if (loading) {
        return <>
            <LoadingComponent />
        </>
    };

    return (
        <div className='five-day-container'>
            {!!weather && weather.map((x, index) =>
                <WeatherAheadComponent
                    weatherInfo={x}
                    key={x.date} />
            )}
         </div>
    );
};

export default WeatherAhead;