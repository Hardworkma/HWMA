import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import './App.css'
import './styles/app.css'
import './styles/_slick.css'
import './styles/_slick-theme.css'

const App = () => (
    <div className=" container">
        <Header />
        {/*{renderRoutes(routes)}
        <Footer/>*/}
    </div>
);

export default App;


