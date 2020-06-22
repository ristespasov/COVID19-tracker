import React from 'react';

// COMPONENTS
import Navbar from '../components/Navbar/Navbar';
import Status from '../components/Status/Status';
import Map from '../components/Map/Map';
import About from '../components/About/About';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={Status} exact />
                <Route path="/Map" component={Map} />
                <Route path="/About" component={About} />
            </Switch>
        </BrowserRouter>
    );
}


export default Router;