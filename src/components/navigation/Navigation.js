
import './Navigation.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { DayContext } from '../../contexts/DayContext';
import { getLocation } from '../../weather-forecast/weather';

const Navigation = () => {

    const navigate = useNavigate();
    const { cityKey, setCityKey } = useContext(DayContext);

    const searchLocation = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let city = formData.get('city');

        getLocation(city)
            .then(res => {

                setCityKey({ key: res.Key, cityName: res.LocalizedName });
                navigate('/today');
            })
        e.target.reset();
    };

    return (

        <nav className="topnav">
            {cityKey.key ?
                <>
                    <Link to="/today">Now</Link>
                    <Link to="/hourly">Hourly</Link>
                    <Link to="/daily">Daily</Link>
                </>
                : <Link to="/location">location</Link>}
            <form className="form-input" action="submit" onSubmit={searchLocation}>
                <input type="text" name="city" placeholder="Enter your location..." />
            </form>
            {cityKey.cityName ?
                <div className='city'>
                    weather in: {cityKey.cityName}
                </div>
                : null}
        </nav>
    );
};

export default Navigation;