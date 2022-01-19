
import React from 'react';

import { ErrorContext } from '../../contexts/ErrorContext';

import ErrorComponent from './ErrorComponent';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    triggerError = () => {
        this.setState({ hasError: true });
    };

    render() {
        return (
            <ErrorContext.Provider value={this.triggerError}>
                {this.state.hasError
                    ? <ErrorComponent />
                    : this.props.children}
            </ErrorContext.Provider>
        );
    };
};

export default ErrorBoundary;
