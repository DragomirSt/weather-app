
import './Navigation.css';

import { NavLink, Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CityContext } from '../../contexts/CityContext';

const Navigation = () => {
    const navigate = useNavigate();
    const { city, setCityName } = useContext(CityContext);

    let activeStyle = {
        'background-color': '#161618d0',
        'border-radius': '15px',
    };

    const searchLocation = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let cityName = formData.get('city').trim();
        cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

        setCityName(cityName);
        e.target.reset();
        navigate('/today');
    };

    return (
        <nav className="topnav">
            {city ?
                <>
                    <NavLink to="/today" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Now</NavLink>
                    <NavLink to="/hourly"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Hourly</NavLink>
                    <NavLink to="/daily"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Daily</NavLink>
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