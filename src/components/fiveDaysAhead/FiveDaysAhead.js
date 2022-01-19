
import './FiveDaysAheadComponents.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from "../../contexts/DayContext";
import { getWeatherFiveDays } from "../../weather-forecast/weater";

import FiveDaysAheadComponent from "./FiveDaysAheadComponents";
import LoadingComponent from '../common/LoadingComponent';

const FiveDaysAhead = () => {

    const { cityKey } = useContext(DayContext);
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return getWeatherFiveDays(cityKey.key)
            .then(res => {
                
                setWeather(res.DailyForecasts);
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