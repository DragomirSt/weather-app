
import './Navigation.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { DayContext } from '../../contexts/DayContext';
import { getLocation } from '../../weather-forecast/weater';

const Navigation = () => {

    const navigate = useNavigate();
    const { cityKey, setCityKey } = useContext(DayContext);

    const searchLoaction = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let city = formData.get('city');

        getLocation(city)
            .then(res => {

                setCityKey({ key: res.Key, cityName: res.LocalizedName });
                navigate('/today');
            });
        e.target.reset();
    };

    return (
        <div className="nav-flex">
            <nav className="topnav">
                {cityKey.key ?
                    <>
                        <Link to="/today">Now</Link>
                        <Link to="/hourly">Hourly</Link>
                        <Link to="/fivedaysAhead">Daily</Link>
                    </>
                    : <></>}
                <form className="form-input" action="submit" onSubmit={searchLoaction}>
                    <input type="text" name="city" placeholder="Search location..." />
                </form>
            </nav>
        </div>
    );
};

export default Navigation;