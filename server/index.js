

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



// const PORT = process.env.PORT || 80;
// const app = express();
//
// app.use(express.static('./build'));
//
// app.get('/*', (req, res) => {
//     const context = {};
//
//     const html = ReactDOMServer.renderToString(
//         <StaticRouter location={req.url} context={context}>
//             <App />
//         </StaticRouter>
//     );
//
//     if (context.url) {
//         res.writeHead(301, {
//             Location: context.url
//         });
//         res.end();
//     } else {
//         console.log(html)
//         res.write(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `);
//         res.end();
//     }
// });
//
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });

