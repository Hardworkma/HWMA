

// Set up ======================================================================
// get all the tools we need
import express from 'express';
import http from 'http';
import logger from 'morgan';
import path from 'path';
import renderRouterMiddleware from '../middleware/index';



// require('dotenv').config();

// Configuration ===============================================================
const app = express();
app.set('port', process.env.PORT || 80);
app.use(logger('short'));

// Request Handlers
const buildPath = path.join(__dirname, '../', 'build');

app.use('/', express.static(buildPath));

app.get('*', renderRouterMiddleware);

// launch ======================================================================
// Starts the Express server on port 3001 and logs that it has started
http.createServer(app).listen(app.get('port'), () => {
    console.log(`Server is listening on port 80`);
});

module.exports = app;


