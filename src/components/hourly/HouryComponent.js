
import extractTime from '../../helpers/extractTime';

const HourlyComponent = ({
    weatherInfo
}) => {

    return (
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
            <div className='weather-temps'>
                <h3>
                    {Math.round((weatherInfo.Temperature.Value - 32) * (5 / 9))}
                    <>*C</>
                </h3>
            </div>
        </div>
    );
};

export default HourlyComponent;