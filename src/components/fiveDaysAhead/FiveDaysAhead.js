
import './FiveDaysAheadComponents.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from "../../contexts/DayContext";
import { getWeatherFiveDays } from "../../weather-forecast/weather";

import FiveDaysAheadComponent from "./FiveDaysAheadComponents";
import LoadingComponent from '../common/LoadingComponent';

const FiveDaysAhead = () => {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    const { cityKey } = useContext(DayContext);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        setLoading(true);

        getWeatherFiveDays(cityKey.key, {
            signal: signal
        })
            .then(res => {

                setWeather(res.DailyForecasts);
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
                <FiveDaysAheadComponent
                    weatherInfo={x}
                    key={index} />
            )}
        </div>
    );
};

export default FiveDaysAhead;