
import { createContext } from 'react';
import { useState } from 'react';

export const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
    const [city, setCity] = useState('');
    const setCityName = (id) => {
        setCity(id);
    };

    return (
        <CityContext.Provider value={{ city, setCityName }}>
            {children}
        </CityContext.Provider>
    );
};

