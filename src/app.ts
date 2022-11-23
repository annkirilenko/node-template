import bodyParser from 'body-parser';
import express from 'express';
import Router from './router';

const App = () => {
    const app: express.Express = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/', (new Router()).getRoutes());

    return app;
};

export default App;