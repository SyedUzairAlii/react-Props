import React, { Component } from 'react';
// import bulb from './images/bulb.jpg';
import './App.css';
import Bulb from './Screens/bulb';
import Brokenbulb from './Screens/brokenbulb';
import Bulbon from './Screens/bulbon';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulb: true,
      brokenBulb: false,
      bulbOn: false,
    }
  }

  brokenBulb = () => {
    this.setState({
      bulb: false,
      brokenBulb: true,
      bulbOn: false,
    })
  }

  bulbOn = () => {
    this.setState({
      bulb: false,
      brokenBulb: false,
      bulbOn: true,
    })
  }

  bulb = () => {
    this.setState({
      bulb: true,
      brokenBulb: false,
      bulbOn: false,
    })
  }
  render() {
    const { bulb, brokenBulb, bulbOn } = this.state;
    return (
      <div className="App">
        {bulb &&<Bulb bulbon = {this.bulbOn} brokenbulb = {this.brokenBulb} /> }
        {brokenBulb &&<Brokenbulb  bulb = {this.bulb} />}
        { bulbOn &&<Bulbon bulb = {this.bulb} brokenbulb = {this.brokenBulb} /> }
      </div>
    );
  }
}

export default App;


