
import './FiveDaysAheadComponents.css';

import { useEffect, useState, useContext } from "react";

import { DayContext } from "../../contexts/DayContext";
import { getWeatherFiveDays } from "../../weather-forecast/weater";

import FiveDaysAheadComponent from "./FiveDaysAheadComponents";
import LoadingComponent from '../common/LoadingComponent';
import useErrorHandling from '../../hooks/errorHook';

const FiveDaysAhead = () => {

    const { cityKey } = useContext(DayContext);
    
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const triggerError = useErrorHandling();

    useEffect(() => {
        setLoading(true);

        return getWeatherFiveDays(cityKey.key)
            .then(res => {
                
                setWeather(res.DailyForecasts);
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