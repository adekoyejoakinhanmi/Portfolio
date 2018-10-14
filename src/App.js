import React, { Component } from 'react';
import {Header} from './Base'
import { Footer } from './Footer'
import ReactGA from 'react-ga'
import './App.css';

ReactGA.initialize('UA-127451777-1')
ReactGA.pageview('/')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
