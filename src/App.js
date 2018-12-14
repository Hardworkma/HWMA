import React, { Component } from 'react';
import {Container} from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import './styles/app.css'

import Header from "./components/Header/index";
import Footer from './components/Footer/index';


import About from "./components/About/index"
import AfterschoolPage from './containers/AfterschoolPage/index';
import CampPage from './containers/CampPage/index';
import HomePage from "./containers/HomePage/index";
import SideKicksPage from './containers/SideKicksPage/index';
import SchedulePage from './containers/SchedulePage/index';
import TaekwondoPage from './containers/TaekwondoPage/index';
import WelcomePage from "./containers/WelcomePage/index"
import CoreValuesPage from "./containers/CoreValuesPage";
import ReviewsPage from "./containers/ReviewsPage";
import PhilosophyPage from "./containers/PhilosophyPage";
import SafeSportPage from "./containers/SafeSportPage";
import HardWorkHeroesPage from "./containers/HardWorkHeroesPage";
import FAQPage from "./containers/FAQPage";
import TourPage from "./containers/TourPage"


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router >
                <Container className={'container-fluid'}>
                    <Header />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={About}/>
                    <Route path="/core" component={CoreValuesPage}/>
                    <Route path="/afterschool" component={AfterschoolPage}/>
                    <Route path="/camp" component={CampPage}/>
                    <Route path="/faq" component={FAQPage}/>
                    <Route path="/hardworkheroes" component={HardWorkHeroesPage}/>
                    <Route path="/philosophy" component={PhilosophyPage}/>
                    <Route path="/reviews" component={ReviewsPage}/>
                    <Route path="/safesport" component={SafeSportPage}/>
                    <Route path="/sidekicks" component={SideKicksPage}/>
                    <Route path="/schedule" component={SchedulePage}/>
                    <Route path="/taekwondo" component={TaekwondoPage}/>
                    <Route path="/tour" component={TourPage}/>
                    <Route path="/welcome" component={WelcomePage}/>
                    <Footer/>
                </Container>
            </Router>
        );
    }
}


export default App;

