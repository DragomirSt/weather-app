
import { useState } from 'react';

const WeatherAheadComponent = ({
    weatherInfo
}) => {
    const [show, setShow] = useState(true);
  
    const daily = (
        <div className="days-forecast">
            <div className='date'>
                {weatherInfo.date}
            </div>
            <div className="weather-days-text">
                {weatherInfo.day.condition.text}
            </div>
            <div className='icon'>
                <img src={weatherInfo.day.condition.icon} alt="" />
            </div>
            <div className="temp">
                <h3>
                    {weatherInfo.day.mintemp_c} /
                    {weatherInfo.day.maxtemp_c}
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
            <div className='cloud-text'>Humidity: </div>
            <div className='cloud-cover'>
                <h3>
                    {weatherInfo.day.avghumidity}  %
                </h3>
            </div>
            <div className='rain-text'>Rain: </div>
            <div className='rain-percent'>
                <h3>
                    {weatherInfo.day.daily_chance_of_rain}  %
                </h3>
            </div>
            <div className='wind-text'>Wind Speed: </div>
            <div className='wind-speed'>
                <h3>
                    {weatherInfo.day.maxwind_kph}  km/h
                </h3>
            </div>
            <div className='button'>
                <button className='toggle-button-hide' onClick={() => setShow(!show)}>Hide</button>
            </div>
        </div>
    );

    return (
        <div>
            {show ? daily : dailyDetails}
        </div>
    );
};

export default WeatherAheadComponent;