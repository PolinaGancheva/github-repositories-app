import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { RootRoutes } from './app/root-routes';
import { Header } from './components/navigation/header';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <RootRoutes />
            </Router>
        </div>
    );
}

export default App;