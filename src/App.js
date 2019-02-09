import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img from './that70sshow.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src = {img }></img>
        <hr></hr>
        <p className="halo" >A comedy revolving around a group of teenage friends, their mishaps, and their coming of age, set in 1970s Wisconsin.</p>
        <br></br>
        <p className="haloo" >The creators had wanted the show to have a 1970s "feel" from the beginning, so opted to set the series later in the decade, when trends and political ideologies had become firmly established and disseminated. The idea that the duration of the series would carry sociopolitical undertones also necessitated a chain of social events which could influence the characters. </p>
      </div>
    );
  }
}

export default App;
