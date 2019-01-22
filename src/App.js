import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Footer from './components/Footer/index'
import Header from './components/Header/index'

const App = () => (
    <div className="container-fluid container">
        <Header />
        {renderRoutes(routes)}
        <Footer/>
    </div>
);

export default App;


