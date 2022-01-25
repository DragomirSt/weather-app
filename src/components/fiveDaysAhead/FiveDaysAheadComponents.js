
import { useState } from 'react';

import extractDate from "../../helpers/extractDate";

const FiveDaysAheadComponent = ({
    weatherInfo
}) => {
    const [show, setShow] = useState(true);

    const daily = (
        <div className="days-forecast">
            <div className='date'>
                {extractDate(weatherInfo.Date)}
            </div>
            <div className="weather-days-text">
                {weatherInfo.Day.IconPhrase}
            </div>
            <div className='icon'>
                <img src={`./icons/icon${weatherInfo.Day.Icon}.png`} alt="" />
            </div>
            <div className="temp">
                <h3>
                    {Math.round((weatherInfo.Temperature.Minimum.Value - 32) * (5 / 9))} /
                    {Math.round((weatherInfo.Temperature.Maximum.Value - 32) * (5 / 9))}
                    <> *C</>
                </h3>
            </div>
            <div className="button">
                <button className='toggle-button' onClick={() => setShow(!show)}>Details</button>
            </div>
        </div>
    );

    const dailyDetails = (
        <div className='div-forecast-details'>
            <div className='cloud-text'>Cloud Cover: </div>
            <div className='cloud-cover'>
                <h3>
                    {weatherInfo.Day.CloudCover}  %
                </h3>
            </div>
            <div className='rain-text'>Rain: </div>
            <div className='rain-percent'>
                <h3>
                    {weatherInfo.Day.RainProbability}  %
                </h3>
            </div>
            <div className='wind-text'>Wind Speed: </div>
            <div className='wind-speed'>
                <h3>
                    {Math.round(1.609344) * weatherInfo.Day.Wind.Speed.Value}  km/h
                </h3>
            </div>
            <div className='button'>
                <button className='toggle-button-hide' onClick={() => setShow(!show)}>Hide Details</button>
            </div>
        </div>
    );

    return (
        <div>
            {show ? daily : dailyDetails}
        </div>
    );
};

export default FiveDaysAheadComponent;