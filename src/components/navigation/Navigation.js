
import './Navigation.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { CityContext } from '../../contexts/CityContext';

const Navigation = () => {

    const navigate = useNavigate();
    const { city, setCityName } = useContext(CityContext);

    const searchLocation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const city = formData.get('city')

        setCityName(city);
        e.target.reset();
        navigate('/today');
    };

    return (
        <nav className="topnav">
            {city ?
                <>
                    <Link to="/today">Now</Link>
                    <Link to="/hourly">Hourly</Link>
                    <Link to="/daily">Daily</Link>
                </>
                : <Link to="/location">location</Link>}
            <form className='form' method='POST' type="text" onSubmit={searchLocation}>
                <div className='form-div'>
                    <input className="form-input" name='city' placeholder='Enter your location ...' />
                    <button className='submit-button'>Search</button>
                </div>
            </form>
            {city ?
                <h3 className='city'>
                    weather in: {city}
                </h3>
                : null}
        </nav>
    );
};

export default Navigation;