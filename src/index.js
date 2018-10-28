import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactPixel from 'react-facebook-pixel';


const advancedMatching = { em: 'info@hardworkma.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
ReactPixel.init('256646485044778', advancedMatching, options);

ReactPixel.pageView(); 					// For tracking page view
// ReactPixel.track( event, data ) 		// For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
// ReactPixel.trackCustom( event, data ) 	// For tracking custom events

ReactDOM.render(<App />, document.getElementById('root'));
