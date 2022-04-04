
import { useState } from 'react';

import extractTime from '../../helpers/extractTime';

const HourlyComponent = ({
    weatherInfo
}) => {
    const [show, setShow] = useState(true);
    const time = weatherInfo.time.substring(10, 16);

    const hourly = (
        <div className='hourly-weather'>
            <div className="time">
                {time}

            </div>
            <div className="icon">
                <img src={weatherInfo.condition.icon} alt="" />
            </div>
            <div className="weather-hourly-text">
                {weatherInfo.condition.text}
            </div>
            <div className='temps'>t*</div>
            <div className='weather-temps'>
                <h3>
                    {weatherInfo.feelslike_c} *C
                </h3>
            </div>
            <div className='button-details'>
                <button className='btn-details' onClick={() => setShow(!show)}>Details</button>
            </div>
        </div>


    );

    const hourlyDetails = (
        <div className='hourly-weather-details'>
            <div className='rain'>Rain: {weatherInfo.chance_of_rain} %</div>
            <div className='weather'>Cloud: </div>
            <div className='weather-text-details'>
                <h3>
                    {weatherInfo.cloud} %
                </h3>
            </div>
            <div className='wind'>Wind Speed: </div>
            <div className='wind-speed'>
                <h3>
                    {weatherInfo.wind_kph} km/h
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