
export const currentWeather = async (city) => {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`;
        const response = await fetch(url);
        const weatherData = await response.json();

        return weatherData;

    } catch (error) {
        alert('Cannot conect to server :(');
    };
};

export const getGeoLocation = async (lat, long) => {
    try {
        const url = `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${lat}%2C%20${long}`;
        const response = await fetch(url);
        const weatherData = await response.json();

        return weatherData;

    } catch (error) {
        alert('Cannot conect to server :(');
    };
};

export const getWeatherAhead = async (city) => {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10&aqi=no&alerts=no`;
        const response = await fetch(url)
        const weatherData = await response.json();
        
        return weatherData;

    } catch (error) {
        alert('Cannot conect to server :(');
    };
};