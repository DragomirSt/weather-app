
const key = 'qbqm3RUXAPYRA1RzXIyywa6YXbZEwEZa';

const locationBase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const weatherBase = 'http://dataservice.accuweather.com/currentconditions/v1';
const fiveDaysAhead = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day';
const hourlyForecast = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour';

export const hourlyForecastWeather = async (id) => {

    try {
        const queary = `${id}?apikey=${key}`;

        let res = await fetch(`${hourlyForecast}/${queary}`);
        const data = await res.json();

        return data;

    } catch (error) {

        alert('Cannot connect to the server :(');
        return;
    }
};

export const getWeatherFiveDays = async (id) => {

    try {
        const queary = `${id}?apikey=${key}&details=true`;

        let res = await fetch(`${fiveDaysAhead}/${queary}`);
        const data = await res.json();

        return data;

    } catch (error) {

        alert('Cannot connect to the server :(');
        return;
    }
};

export const getWeather = async (id) => {

    try {
        const queary = `${id}?apikey=${key}`;

        let res = await fetch(`${weatherBase}/${queary}`);
        const data = await res.json();

        return data[0];

    } catch (error) {

        alert('Cannot connect to the server :(');
        return;
    }
};

export const getLocation = async (city) => {

    try {
        const queary = `?apikey=${key}&q=${city}`;

        let res = await fetch(`${locationBase}/${queary}`);
        const data = await res.json();
        console.log(data)
        return data[0];

    } catch (error) {

        alert('Cannot connect to the server :(');
        return;
    }
};

export const geoLocation = async (lat, long) => {

    try {

    let res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${lat}%2C%20${long}&details=toplevel%3Dtrue`);
    const data = await res.json();

    return data;
        
    } catch (error) {
        alert('Cannot connect to the server :(');
        return; 
    }
}


