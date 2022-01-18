
import './FiveDaysAheadComponents.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from "../../contexts/DayContext";
import { getWeatherFiveDays } from "../../weather-forecast/weater";

import FiveDaysAheadComponent from "./FiveDaysAheadComponents";
import ErrorComponent from '../errorComponent/ErrorComponent';

const FiveDaysAhead = () => {

    const { cityKey } = useContext(DayContext);
    const [weather, setWeather] = useState([]);

    useEffect(() => {

        return getWeatherFiveDays(cityKey.key)
            .then(res => {
                
                setWeather(res.DailyForecasts);
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