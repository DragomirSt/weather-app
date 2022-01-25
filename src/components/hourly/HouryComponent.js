
import { useState } from 'react';

import extractTime from '../../helpers/extractTime';

const HourlyComponent = ({
    weatherInfo
}) => {
    const [show, setShow] = useState(true);

    const hourly = (
        <div className="hourly-weather">
            <div className="time">
                {extractTime(weatherInfo.DateTime)}

            </div>
            <div className="icon">
                <img src={`./icons/icon${weatherInfo.WeatherIcon}.png`} alt="" />
            </div>
            <div className="weather-hourly-text">
                {weatherInfo.IconPhrase}
            </div>
            <div className='temps'>t*</div>
            <div className='weather-temps'>
                <h3>
                    {Math.round((weatherInfo.Temperature.Value - 32) * (5 / 9))} *C
                </h3>
            </div>
            <div className='button-details'>
                <button className='btn-details' onClick={() => setShow(!show)}>Details</button>
            </div>
        </div>
    );

    const hourlyDetails = (
        <div className='hourly-weather-details'>
            <div className='rain'>Rain: {weatherInfo.RainProbability} %
            </div>
            <div className='weather'>Weather: </div>
            <div className='weather-text-details'>
                <h3>
                    {weatherInfo.RealFeelTemperature.Phrase}
                </h3>
            </div>
            <div className='wind'>Wind Speed: </div>
            <div className='wind-speed'>
                <h3>
                    {Math.round(1.609344) * weatherInfo.Wind.Speed.Value} km/h
                </h3>
            </div>
            <div className='button'>
                <button className='btn-hide-details' onClick={() => setShow(!show)}>Hide Details</button>
            </div>
        </div>
    );

    return (
        <div>
            {show ? hourly : hourlyDetails}
        </div>
    );
};

export default HourlyComponent;