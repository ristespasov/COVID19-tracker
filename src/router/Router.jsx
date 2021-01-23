import React from 'react';

// COMPONENTS
import Navbar from '../components/Navbar/Navbar';
import Status from '../components/Status/Status';
import Map from '../components/Map/Map';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

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
            <Footer />
        </BrowserRouter>
    );
}

export default Router;