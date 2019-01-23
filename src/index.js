import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import ReactPixel from 'react-facebook-pixel';


const advancedMatching = { em: 'info@hardworkma.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('256646485044778', advancedMatching, options);

ReactPixel.pageView();

const renderRouter = Component => {
    ReactDOM.hydrate(
        <BrowserRouter>
            <Component />
        </BrowserRouter>, document.getElementById('root')
    );
};



renderRouter(App);