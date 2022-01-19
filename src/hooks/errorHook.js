
import { useContext } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';

const useErrorHandling = () => {
    return useContext(ErrorContext);
}

export default useErrorHandling;