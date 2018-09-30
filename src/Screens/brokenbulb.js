import React, { Component } from 'react';
import bulb_broken from './images/brokenbulb.jpg';
import '../App.css';

class broke extends Component {
  render() {
    return (
      <div>
        <h1>Bulb</h1>        
        <img className = "image" src={bulb_broken} alt='Broken Bulb..' />
        <br />
        <br />
        <button onClick={this.props.bulb}>Repair</button>
       
      </div>
    )
  }
}

export default broke


