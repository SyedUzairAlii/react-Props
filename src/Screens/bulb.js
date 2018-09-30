import React, { Component } from 'react';
import bulb from './images/bulb.jpg';
import '../App.css';

class Bulb extends Component {
  render() {
    return (
      <div>
        <h1>Bulb</h1>
        <img className="image" src={bulb} alt='Bulb..' />
        <br />
        <br />
        <button onClick={this.props.bulbon}>On </button>
        <button onClick={this.props.brokenbulb}>Broke It</button>
      </div>
    )
  }
}

export default Bulb;


