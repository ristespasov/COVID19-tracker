import React, { Component } from 'react';
import './App.module.css';

// COMPONENTS
import Navbar from '../src/components/Navbar/Navbar';
import Covid from '../src/components/Covid/Covid';
import Cards from '../src/components/Cards/Cards';
import Input from '../src/components/Input/Input';
import Chart from '../src/components/Chart/Chart';
import About from '../src/components/About/About';

// ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// DATA
import { fetchData } from './api';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path="/"
            render={props =>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Covid />
                <Cards data={data} />
                <Input handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
              </div>
            }
            exact
          />
          <Route path="/About" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
