
import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { DayContext } from './contexts/DayContext';

import Navigation from "./components/navigation/Navigation";
import Today from './components/today/Today';
import HourlyWheater from './components/hourly/HourlyWeather';
import WeatherAhead from './components/weatherAhead/WeatherAhead';
import GeoPosition from './components/geoPosition/GeoPosition';
import ErrorBoundary from './components/common/ErrorBoundary';

const initialState = {
  key: null,
  cityName: null
}

function App() {

  const [cityKey, setKey] = useState(initialState);

  const setCityKey = (key) => {
    setKey(key)
  };

  return (
    <ErrorBoundary>
      <DayContext.Provider value={{ cityKey, setCityKey }} >
        <main className='app'>
          <Navigation />

          <Routes>
            <Route path='/today' element={<Today />} />
            <Route path='/hourly' element={<HourlyWheater />} />
            <Route path='/daily' element={<WeatherAhead />} />
            <Route path='/location' element={<GeoPosition />} />
          </Routes>
          <footer className='footer'>
            <div>
              Weather Application
            </div>
          </footer>
        </main>
      </DayContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
