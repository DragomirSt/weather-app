
import './WeatherAhead.css';

import { useEffect, useState, useContext } from "react";
import { CityContext } from '../../contexts/CityContext';

import { getWeatherAhead } from "../../weather-forecast/weather";

import WeatherAheadComponent from "./WeatherAheadComponent";
import LoadingComponent from '../common/LoadingComponent';

const WeatherAhead = () => {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    const { city } = useContext(CityContext);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        getWeatherAhead(city, {
            signal: signal
        })
            .then(res => {
                setWeather(res.forecast.forecastday);
            })
            .finally(() => {
                setLoading(false);
            });
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
        <div>
            {!!weather && weather.map((x, index) =>
                <WeatherAheadComponent
                    weatherInfo={x}
                    key={x.date} />
            )}
        </div>
    );
};

export default WeatherAhead;