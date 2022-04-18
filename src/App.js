
import './App.css';

import { Routes, Route } from 'react-router-dom'
import { CityContextProvider } from './contexts/CityContext';

import Navigation from "./components/navigation/Navigation";
import HomePage from './components/home/HomePage';
import Today from './components/today/Today';
import HourlyWheater from './components/hourly/HourlyWeather';
import WeatherAhead from './components/weatherAhead/WeatherAhead';
import GeoPosition from './components/geoPosition/GeoPosition';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <CityContextProvider >
        <main className='app'>
          <Navigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/today' element={<Today />} />
            <Route path='/hourly' element={<HourlyWheater />} />
            <Route path='/daily' element={<WeatherAhead />} />
            <Route path='/location' element={<GeoPosition />} />
          </Routes>
          <footer className='footer'>
            <h2>
              Weather Application
            </h2>
          </footer>
        </main>
      </CityContextProvider>
    </ErrorBoundary>
  );
};

export default App;
