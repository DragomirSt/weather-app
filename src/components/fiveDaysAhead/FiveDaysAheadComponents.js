
import extractDate from "../../helpers/extractDate";

const FiveDaysAheadComponent = ({
    weatherInfo
}) => {

    return (
        <div className="days-forecast">
                <div className='date'>
                    {extractDate(weatherInfo.Date)}
                </div>
                <div className="weather-days-text">
                    {weatherInfo.Day.IconPhrase}
                </div>
                <div className="icon">
                    <img src={`./icons/icon${weatherInfo.Day.Icon}.png`} alt="" />
                </div>
                <div className="temp">
                    <h3>
                    {Math.round((weatherInfo.Temperature.Minimum.Value - 32) * (5 / 9))} /
                    {Math.round((weatherInfo.Temperature.Maximum.Value - 32) * (5 / 9))}
                    <> *C</>
                    </h3>
                </div>     
        </div>
    );
};

export default FiveDaysAheadComponent;