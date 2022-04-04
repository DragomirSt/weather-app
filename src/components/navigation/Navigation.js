
import './Navigation.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { DayContext } from '../../contexts/DayContext';

const Navigation = () => {

    const navigate = useNavigate();
    const { cityKey, setCityKey } = useContext(DayContext);
    const [city, setCity] = useState('');

    const searchLocation = (e) => {
        e.preventDefault();
        setCityKey({ key: city.label.split(',')[0] });
        navigate('/today');
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
            <form className="form-input" onSubmit={searchLocation}>
                <GooglePlacesAutocomplete
                    selectProps={{
                        city,
                        onChange: setCity,
                    }}
                />
            </form>
            {cityKey.key ?
                <div className='city'>
                    weather in: {cityKey.key}
                </div>
                : null}
        </nav>
    );
};

export default Navigation;