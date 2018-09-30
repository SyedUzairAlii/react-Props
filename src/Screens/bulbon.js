import React, { Component } from 'react';
import light_bulb from './images/lightbulb.png';
import '../App.css';


class light extends Component {
  render() {
    return (
      <div>
      {/* <img className = "back" src={ Background } /> */}
        <h1>Bulb</h1>
        <img className = "image" src={light_bulb} alt='Bulb On..' />
        <br />
        <br />
        <button onClick={this.props.bulb}>OFF</button>
        <button onClick={this.props.brokenbulb}>Broke It</button>
      </div>
    )
  }
}

export default light



