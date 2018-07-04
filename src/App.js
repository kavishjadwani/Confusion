import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter } from 'react-router-dom'

import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {DISHES} from './shared/dishes';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            dishes : DISHES
        };
    }
  render() {
    return (
    <BrowserRouter>
      <div >
        <Main  dishes = {this.state.dishes}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
